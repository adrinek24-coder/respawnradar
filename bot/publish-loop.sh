#!/bin/sh
set -eu

publish() {
  if [ "$(git symbolic-ref --short HEAD)" != main ]; then
    echo 'Use a dedicated checkout on main.' >&2
    return 1
  fi
  if [ -n "$(git status --porcelain)" ]; then
    echo 'The publishing checkout has uncommitted changes. Inspect them before resuming.' >&2
    return 1
  fi
  remote=$(git remote get-url --push origin) || return 1
  case "$remote" in
    https://github.com/*/*) ;;
    *) echo 'Use a credential-free HTTPS github.com origin.' >&2; return 1 ;;
  esac
  repo_path=${remote#https://github.com/}
  case "$repo_path" in
    *[!a-zA-Z0-9_./-]*) echo 'Invalid GitHub repository URL.' >&2; return 1 ;;
  esac
  git fetch origin main || return 1
  git merge --ff-only FETCH_HEAD || return 1

  generation_status=0
  python bot/hunter.py || generation_status=$?
  git add -- ':(glob)web/src/content/posts/*/*.md' data/published_trends.json || return 1
  if ! git diff --cached --quiet; then
    git -c user.name=RespawnRadar -c user.email=respawnradar@users.noreply.github.com \
      commit -m 'Publish RespawnRadar articles' || return 1
  fi
  git push origin HEAD:main || return 1
  return "$generation_status"
}

: "${GIT_USERNAME:?Set GIT_USERNAME}"
: "${GIT_TOKEN_FILE:?Set GIT_TOKEN_FILE}"
GIT_ASKPASS=$(mktemp)
export GIT_ASKPASS
trap 'exit 0' INT TERM
trap 'rm -f "$GIT_ASKPASS"' EXIT
cat > "$GIT_ASKPASS" <<'ASKPASS'
#!/bin/sh
case "$1" in
  *Username*) printf '%s\n' "$GIT_USERNAME" ;;
  *Password*) cat "$GIT_TOKEN_FILE" ;;
  *) exit 1 ;;
esac
ASKPASS
chmod 700 "$GIT_ASKPASS"

while :; do
  publish || echo 'Publishing cycle failed. Retrying in three hours.' >&2
  sleep 10800 &
  wait "$!"
done

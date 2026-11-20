# RespawnRadar

RespawnRadar publishes gaming, hardware and deals coverage in German, English and Polish. Astro and Tailwind generate static pages. A scheduled Python job collects headlines and writes localized Markdown with Gemini.

## Local development

Use Node.js 24 and Python 3.11 or newer.

```sh
cd web
npm ci
npm run check
npm run build
npm run dev -- --host 0.0.0.0
```

From the repository root, install the bot in a virtual environment.

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r bot/requirements.txt
.venv/bin/python bot/hunter.py --feeds-only
.venv/bin/python bot/hunter.py
```

`--feeds-only` needs network access to the feed providers and makes no Gemini requests or file changes. A publishing run validates all three editions before writing them, records completed topics in `data/published_trends.json`, and uses normalized headlines for deduplication. RSS and Gemini availability determine how many articles are published. Check the generated articles and source links for factual accuracy.

## Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | Bot or GitHub Actions secret | Required for article generation. Use a key from a Gemini project eligible for the free tier. |
| `GEMINI_MODEL`, `MAX_POSTS_PER_RUN` | Bot or GitHub Actions variables | Optional. Defaults are `gemini-2.5-flash` and `2`. |
| `SITE_URL` | Web build | Public origin for canonical URLs, OpenGraph, robots and sitemap. Defaults to `https://respawnradar.pages.dev`. |
| `PUBLIC_OPERATOR_NAME`, `PUBLIC_OPERATOR_ADDRESS`, `PUBLIC_CONTACT_EMAIL` | Web build | Public publisher details for contact, privacy and Impressum. Complete and review the legal text for your operation before launch. |
| `PUBLIC_ADSENSE_CLIENT`, `PUBLIC_ADSENSE_SLOT_TOP`, `PUBLIC_ADSENSE_SLOT_ARTICLE`, `PUBLIC_ADSENSE_SLOT_MOBILE` | Web build | Optional client and numeric placement IDs. Leave unset until AdSense approves the site and any required Google-certified CMP is configured. The slot load button alone does not implement a CMP. |
| `PUBLIC_AMAZON_DE_TAG`, `PUBLIC_AMAZON_US_TAG`, `PUBLIC_ENEBA_REF`, `PUBLIC_G2A_REF` | Web build | Optional affiliate IDs. Confirm the generated tracking URLs against each program's dashboard. |
| `HOST_UID`, `HOST_GID`, `GIT_USERNAME`, `GIT_TOKEN_PATH` | Docker only | Host checkout owner's numeric UID/GID, GitHub username and host path to a readable file containing a scoped token with repository contents write access. |

Copy `web/.env.example` to `web/.env` for local site settings. Add public build variables to your hosting provider and keep secrets out of the repository.

## Deploy and automate

1. Connect the repository to Cloudflare Pages using its Git integration. Set production branch to `main`, root directory to `web`, build command to `npm run build`, output directory to `dist`, and Node version to 24 (via `NODE_VERSION` if needed).
2. Add `GEMINI_API_KEY` as a repository Actions secret. The **Publish gaming news** workflow runs every three hours and can be started from the Actions tab. The repository must allow Actions to write contents, and branch rules must permit the workflow push. Confirm a workflow commit triggers a Pages build.
3. Keep hosting, GitHub Actions and Gemini within their respective free-tier quotas. Model and free-tier availability vary by region and account. Scheduled jobs can be delayed by GitHub. External services and an optional Docker host have independent operating limits or costs.

For self-hosting, use a dedicated clean Linux checkout on `main` with a credential-free HTTPS GitHub origin. Configure the bot and Docker variables above, then run `docker compose -f bot/docker-compose.yml up -d --build`. It runs immediately and every three hours after each run. Use a single publisher to avoid competing pushes. The Docker service retains local commits if a push fails and retries on the next cycle. If histories diverge, reconcile the dedicated checkout before resuming.

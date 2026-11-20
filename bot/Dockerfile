FROM python:3.12-slim
ENV PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1 GIT_TERMINAL_PROMPT=0
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*
COPY requirements.txt /tmp/requirements.txt
RUN --mount=type=secret,id=pip_ca_bundle \
    if [ -r /run/secrets/pip_ca_bundle ]; then export PIP_CERT=/run/secrets/pip_ca_bundle; fi && \
    pip install -r /tmp/requirements.txt
COPY publish-loop.sh /usr/local/bin/publish-loop
WORKDIR /repo
ENTRYPOINT ["sh", "/usr/local/bin/publish-loop"]

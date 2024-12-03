FROM langchain/langgraphjs-api:20

ADD . /deps/open-canvas

# RUN cd /deps/open-canvas && yarn config set registry https://registry.npmmirror.com && yarn install --frozen-lockfile
RUN cd /deps/open-canvas && yarn config set registry https://registry.npmmirror.com && yarn install --registry https://registry.npmmirror.com

ENV LANGSERVE_GRAPHS='{"agent": "./src/agent/open-canvas/index.ts:graph", "reflection": "./src/agent/reflection/index.ts:graph", "thread_title": "./src/agent/thread-title/index.ts:graph"}'

WORKDIR /deps/open-canvas
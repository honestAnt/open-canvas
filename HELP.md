##接口文档参考
  https://langchain-ai.github.io/langgraph/cloud/reference/api/api_ref.html#tag/assistants

## generate dockerfile
```bash 
pip install -U langgraph-cli

langgraph dockerfile -c langgraph.json Dockerfile

```

## Dockerfile configuration
```bash 
FROM langchain/langgraphjs-api:20

ADD . /deps/open-canvas

RUN cd /deps/open-canvas && yarn config set registry https://registry.npmmirror.com && yarn install --frozen-lockfile

ENV LANGSERVE_GRAPHS='{"agent": "./src/agent/open-canvas/index.ts:graph", "reflection": "./src/agent/reflection/index.ts:graph", "thread_title": "./src/agent/thread-title/index.ts:graph"}'

WORKDIR /deps/open-canvas

```


## docker build and run
```bash 

docker build -t open-canvas:v1 .


docker run --name open-canvas --env-file .env  -p 57318:8000  -e REDIS_URI="redis://host.docker.internal:6379/0" -e DATABASE_URI="postgresql://opencanvas:opencanvas@host.docker.internal:5432/opencanvas" -e LANGSMITH_API_KEY="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" open-canvas:v1

```



## start ui
### 如果需要拿掉认证，注释掉下面这个代码

```text
[text](src/lib/supabase/middleware.ts) 39~78行
[text](src/hooks/useUser.tsx) 注释 15~20行，并
    setUser({
      id: "123",
      name: "asdf"
    });

```

```bash 
yarn install
yarn dev
```
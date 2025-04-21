FROM denoland/deno

WORKDIR /app

ADD . /app

RUN deno install --entrypoint main.ts

EXPOSE 8080/tcp

ENTRYPOINT ["deno", "run", "--allow-net", "main.ts"]

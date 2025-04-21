```
deno task start
```

# Building and running the container locally

1. Build the container image `docker build --pull -t my-app .`

2. Run the container `docker run -d -p 8080:8080 my-app`

3. Visit `localhost:8080`

4. To stop the container use `docker stop <container-id>`. The container ID was presented when you ran the container, alternatively you can fetch it again using `docker ps`

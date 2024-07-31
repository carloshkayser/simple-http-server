## Simple HTTP Server

### Build

```sh
docker build -t carloshkayser/simple-http-server -f ci/Dockerfile .
```

### Run

```sh
docker run -d -p 3333:3333 --name simple-http-server carloshkayser/simple-http-server
docker logs -f simple-http-server
```

#### Tag and push

```sh
$ docker tag carloshkayser/simple-http-server carloshkayser/simple-http-server:latest
$ docker push carloshkayser/simple-http-server:latest
```
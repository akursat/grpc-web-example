# grpc-web-example

A grpc web example with Javascript and Go

# Server side

```install Go Lang
install grpc with $ go get -u google.golang.org/grpc
install protoc-gen-go with $ go get -u github.com/golang/protobuf/protoc-gen-go
run $ export PATH=$PATH:$GOPATH/bin
run $ ~/grpc-web-example/server go run main.go
```

# Envoy Proxy

```
install docker
run $ docker build -t grpc-web-example/envoy -f ./Dockerfile .
run $ docker run -d -p 8080:8080 -p 9901:9901 --network=host grpc-web-example/envoy
```

# Client Side

```install npm
run $ npm install
run $ npm run dev
```

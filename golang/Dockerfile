FROM golang:1.9 as builder

WORKDIR /go/src/app
COPY . .

#RUN go get -u github.com/golang/dep/cmd/dep
RUN go get github.com/derekparker/delve/cmd/dlv

#RUN dep init
#RUN dep ensure

RUN go-wrapper install


# CMD [ "dlv" , "attach", "1", "app", "--headless", "--listen=0.0.0.0:2345", "--log=true"]

RUN chmod +x start.sh
CMD ./start.sh

FROM radumatei/golang:dlv

COPY . .

#RUN dep init
#RUN dep ensure

RUN go-wrapper install


# CMD [ "dlv" , "attach", "1", "app", "--headless", "--listen=0.0.0.0:2345", "--log=true"]

RUN chmod +x start.sh
CMD ./start.sh

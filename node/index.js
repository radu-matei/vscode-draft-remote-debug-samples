const http = require('http');
var os = require("os")
const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end(`I'm on ${os.hostname()}`);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})

const http = require('http');
var os = require("os")
const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  var options = {
    host: 'golang-go',
    path: '/'
};

  var body = `I am ${os.hostname()} Develoepr inner loop`
  // http.get(options, (r) => {
  //   r.on('data', (data)=> {
  //     body += data;
  //   });
  //   r.on('end', () =>   {
  //     response.end(body)
  //   });
  // });

  response.end(body);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})

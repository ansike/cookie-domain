const http = require("http");

const app = http.createServer((req, res) => {
  res.end("server3");
});

app.listen(9093);

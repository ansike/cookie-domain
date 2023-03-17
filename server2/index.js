const http = require("http");

const app = http.createServer((req, res) => {
  res.end("server2");
});

app.listen(9092);

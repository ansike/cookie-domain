const http = require("http");

const app = http.createServer((req, res) => {
  res.end("server4");
});

app.listen(9094);

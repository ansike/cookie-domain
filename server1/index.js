const http = require("http");

const app = http.createServer((req, res) => {
  // res.setHeader("Set-Cookie", ["c=333", "d=444"]);
  res.setHeader("Set-Cookie", ["c=333; domain=aaa.com", "d=444;domain=aaa.com"]);
  res.end("server1");
});

app.listen(9091);

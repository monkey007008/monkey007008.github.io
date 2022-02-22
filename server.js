const express = require('express'),
path = require("path")
app = express(),
PORT = 9999;

app
  .use(express.static(path.resolve(__dirname,"./")))
  .listen(PORT, function () {
    console.log(`app runing on http://localhost:${PORT}`);
  });

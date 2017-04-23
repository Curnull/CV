var express =  require('express');
var path = require('path');
var port = 3000;

var app = express();
app.use(express.static('./build'));
app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
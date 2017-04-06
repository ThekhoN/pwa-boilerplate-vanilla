var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function( req, res ){
  res.sendFile(path.resolve(__dirname, './build/index.html'));
})

app.listen( PORT, function (err) {
  if( err ){
    console.log('error in server: ', err);
    return;
  }
  else {
    console.log('app listening on port: ', PORT);
  }
});

// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');
var url = require('url');

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Read comments from comments.json
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Create new comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comment);
});

// Start server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
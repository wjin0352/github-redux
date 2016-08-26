var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../../public/index'));
})

app.listen(5000, function() {
  console.log('listening on port 5000');
});

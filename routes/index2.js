let express = require('express');
let router = express.Router();
let path = require("path");

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index2.html'));
});

module.exports = router;
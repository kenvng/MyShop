var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Shopping Cart' }); /* render() function tells node or express to send back a response to the browser containing the HTML code of this index file and .hbs */
});

module.exports = router;

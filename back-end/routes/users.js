var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('/users');
  console.log(req.headers.authorization);
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

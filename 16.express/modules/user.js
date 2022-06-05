const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
  res.send(`User ${req.params.name} entered the system`);
});
module.exports = router;
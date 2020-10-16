const express = require('express');
const router = express.Router();

//Middleware
router.use(require('./candidateRoutes'));
router.use(require('./voterRoutes'));


//EXPORT
module.exports = router;
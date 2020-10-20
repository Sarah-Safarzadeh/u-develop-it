const express = require('express');
const router = express.Router();

//Middleware
router.use(require('./candidateRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));

//EXPORT
module.exports = router;
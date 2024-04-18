const express = require('express');
const { getBalance } = require('../controllers/account/getBalance');
const { authMiddleware } = require('../controllers/middleware');
const { transfer } = require('../controllers/account/transfer');
const router = express.Router();

router.get("/balance",authMiddleware,getBalance);
router.post("transfer",authMiddleware,transfer);


module.exports = router;
const express = require('express')

const ProcessingDataCtrl = require('../controllers/processing-data-ctrl')

const router = express.Router()

router.get('/processing', ProcessingDataCtrl.getInvertedText)

module.exports = router
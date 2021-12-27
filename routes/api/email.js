const express = require("express");
const router = express.Router()

const { addToMailingList } = require ('../../controllers/emailRestcontroller.js')

router.post('/', addToMailingList);

module.exports = router;
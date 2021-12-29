const express = require("express");
const router = express.Router()

const { createDefault, getEnquiryByIdAndEmail, createCakeEnquiry } = require ('../../controllers/enquiryRestController.js')

router.get('/default', createDefault);

router.post('/makeEnquiry', createCakeEnquiry)

router.post('/getEnquiry', getEnquiryByIdAndEmail)

module.exports = router;
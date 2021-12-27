const express = require("express");
const router = express.Router()

const { createDefault, getEnquiryByIdAndEmail, createCakeEnquiry } = require ('../../controllers/enquiryRestController.js')

router.get('/default', createDefault);

router.get('/makeEnquiry', createCakeEnquiry)

router.get('/getEnquiry', getEnquiryByIdAndEmail)

module.exports = router;
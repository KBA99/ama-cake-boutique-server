const express = require("express");
const router = express.Router()

const { addToMailingList, getEmails } = require ('../../controllers/emailRestcontroller.js')

router.post('/', addToMailingList);

//TODO Make mongo query that returns all of the emails on the mailing list but to a protected route
router.get('/', getEmails);

module.exports = router;
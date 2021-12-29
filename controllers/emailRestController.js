const Email = require("../models/mailingList")

const addToMailingList = async (req, res) => {
	const {email} = req.body
    try {
		if(!Email.exists({email})) {
			const mailingList = await Email.create({
				email
			})
			res.status(201).send(`${email} added to mailing list`)
			console.log({mailingList})
		} else {
			res.status(403).send({error: "User is already registered to the mailing list"})
		}
    } catch (error) {
        console.log(error.message)
    }
}

const getEmails = async (req, res) => {
	res.send("get mailing list")
}

module.exports = {
	addToMailingList,
	getEmails
}
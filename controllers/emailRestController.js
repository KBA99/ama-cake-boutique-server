const addToMailingList = async (req, res) => {
	const {email} = req.params
    
    try {
        const mailingList = await Email.Create({
            email
        })
        res.status(201).send(`${email} added to mailing list`)
        console.log({mailingList})
    } catch (error) {
        console.log(error.message)
    }

    res.status(201).send(`${email} added to mailing list`)
}

module.exports = {
	addToMailingList
}
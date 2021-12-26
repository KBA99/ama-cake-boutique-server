let mailingList = [
	{
		id: 1,
		email: "test@testmail.com", 
		signUpDate: "Date 1"
	},
	{
		id: 2,
		email: "test2@testmail.com", 
		signUpDate: "Date 2"
	},
];

const getEmails = (req, res) => {
	const body = {data: mailingList}
	res.status(200).send(body)
};

const emailSignUp = (req, res) => {
	// res.send({type: GET})

	const email = req.body;

	mailingList.push({ ...email, id: uuidv4() });

	res.send(`User with the email ${mailingList.email} added to the database`);
};

const getEmailByID = (req, res) => {
	// res.send({type: GET})

	const { id } = req.params;	
	const foundUser = mailingList.find((user) => user.id === parseInt(id));
		
	if (foundUser) {
		res.status(200).json(foundUser)
	} else {
		res.status(400).json({message: `no email by id: ${id} found`})
	}
	// res.send(foundUser);
};

//todo Make a delete by email controller
const deleteUserByID = (req, res) => {
	res.send({type: DELETE});
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);

	res.send(`user with id ${id} deleted`);
};

module.exports = {
	getEmails,
	getEmailByID,
	emailSignUp,
	deleteUserByID
}
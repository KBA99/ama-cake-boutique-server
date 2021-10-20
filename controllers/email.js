import { v4 as uuidv4 } from "uuid";

let mailingList = [
  {
    email: "test@testmail.com",
    signUpDate: ""
  },
];

export const getEmails = (req, res) => {
  res.send(mailingList);
};

export const emailSignUp = (req, res) => {
  const email = req.body;

  mailingList.push({ ...email, id: uuidv4() });

  res.send(`User with the email ${mailingList.email} added to the database`);
};

export const getEmailByID = (req, res) => {
  const { id } = req.params;

  const foundUser = mailingList.find((user) => user.id === id);

  res.send(foundUser);
};

//todo Make a delete by email controller
export const deleteUserByID = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with id ${id} deleted`);
};

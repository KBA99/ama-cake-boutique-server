const Enquire = require("../models/cakeEnquire");

const createCakeEnquiry = async (req, res) => {
    try {
        const { fullName, email, dateOfEvent, partyOccasion, cakeTaste, cakeTopper, extraDetails,
        } = req.body;

        const cakeEnquiry = await Enquire.create({
            fullName,
            email,
            dateOfEvent,
            partyOccasion,
            cakeTaste,
            cakeTopper,
            extraDetails
        })

        res.status(201).send("User Saved")
        console.log(cakeEnquiry)
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
}

const createDefault = async (req, res) => {
    try {
        const cakeEnquiry = await Enquire.create({
            fullName: "KB A",
            email: "KB@email.com",
            dateOfEvent: new Date,
            partyOccasion: "other",
            cakeTaste: "Red Velvet",
            cakeTopper: true,
        })
        res.status(201).send("User Saved")
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
    
};

const getEnquiryByIdAndEmail = async (req, res) => {
    const { orderId, email} = req.body;
    try {
        const cakeEnquiry = await Enquire.findById(orderId)
        if (cakeEnquiry.email === email) {
            res.status(200).send(cakeEnquiry)
            console.log(cakeEnquiry)
        } else {
            res.status(403).send("This email does not match this order ID")
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
}

module.exports = {
    deleteUserByID,
    createDefault,
    getEnquiryByIdAndEmail,
    createCakeEnquiry
}
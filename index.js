const express = require("express");
const mongoose = require("mongoose");
const acbRoutes = require("./routes/api/api.js");
const config = require("./config.js")

mongoose.connect(config.dbURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Connected to Database"));

const app = express();

const PORT = 5000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.use("/api", acbRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
		res.status(422).send({ error: err.message });
	});

app.listen(config.PORT || 3000, () =>
	config.PORT ? console.log(`Server is running on http://localhost:${PORT}`) : console.log(`Server is running on http://localhost:${3000}`)
);

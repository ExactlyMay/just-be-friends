const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
let friends = [{
	name: "Bob Belcher",
	photo: "https://assets.foxdcg.com/dpp-uploaded/images/bobs-burgers/bobs-burgers_08/bobs-burgers_08_12/BOB_812port.jpg",
	scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
	name: "Linda Belcher",
	photo: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-Bobs-Burgers-John-Roberts.jpg",
	scores: ["3", "5", "2", "1", "1", "1", "4", "5", "4", "2"]
}, {
	name: "Tina Belcher",
	photo: "https://vignette.wikia.nocookie.net/bobsburgerpedia/images/f/fe/Tinajeff.jpg",
	scores: ["2", "3", "1", "3", "3", "5", "1", "2", "4", "3"]
}];
app.get("/", (request, response) => {
	response.sendFile(path.join(__dirname, "app/public/index.html"));
});
app.get("/survey", (request, response) => {
	response.sendFile(path.join(__dirname, "app/public/survey.html"));
});
app.get("/api/friends", (request, response) => {
	return response.json(friends);
});
app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT);
});
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({	extended: true}));
app.use(bodyParser.json());


apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT);
});
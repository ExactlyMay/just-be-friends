var path = require('path');

function htmlRoutes(app) {
    
    app.get("/survey", (request, response) => {
        response.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.use("/", (request, response) => {
        response.sendFile(path.join(__dirname, "/../public/home.html"));
    });  
  }
    
  module.exports = htmlRoutes;
const friends = require('../data/friends.js');

function apiRoutes(app) {


    app.get("/api/friends", (request, response) => {
        return response.json(friends);
    });

    app.post("/api/newFriend", (request, response) => {
        let newFriend = request.body;
        score = (newFriend.scores).map(Number) ;
        newFriend.totalsum = score.reduce(getSum);
        response.json(searchMatch(newFriend));
    });

    function getSum(total, num) {
        return total + num;
    };

    function searchMatch(friend) {
        friends.forEach(element => {
            score = (element.scores).map(Number);
            objName = element.name;
            objImg = element.photo;
        });

        var bestMatch = 0;

        for(var i=0; i < friends.length; i++){
            var temp = Math.abs(friend.totalsum - friends[i].totalsum);
            console.log("Temp: " + temp)
            var temp2 = Math.abs(friend.totalsum - friends[bestMatch].totalsum)
            console.log("Temp2: " + temp2)
            if(temp <= temp2){
                bestMatch = i;
            }
        }

        var match = friends[bestMatch];
        friends.push(friend);
        return match;
    }

}

module.exports = apiRoutes;
  
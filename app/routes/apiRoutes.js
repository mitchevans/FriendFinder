

var friendsArray = require("../data/friends");


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    var userScore = req.body.questions
    var difs = []
    matchIndex = 0
    for (i = 0; i < friendsArray.length; i++){
      var dif = 0
      for (j = 0; j < userScore.length; j++){
      dif += (Math.abs(parseInt(friendsArray[i].questions[j]) - userScore[j]));
      }
      difs.push(dif)
    }
    console.log(difs)
    for (i=0; i <difs.length; i++){
      if (difs[i] <= difs[matchIndex]){
        matchIndex = i
      }
    }
    var bestMatch = friendsArray[matchIndex]
    res.json(bestMatch);
   console.log(bestMatch.userName)
    friendsArray.push(req.body);

  });
};

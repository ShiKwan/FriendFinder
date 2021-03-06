module.exports = function (app) {

    var friends = require('../data/friends')

    console.log("friends required..");
    console.log(JSON.stringify(friends,false, 2));
    console.log(JSON.stringify(friends.maleArr));
    console.log("\n\n")
    console.log(JSON.stringify(friends.femaleArr));

    app.get('/api/male/:name?', function (req, res) {
    var chosen = req.params.name
    if (chosen) {
        console.log(chosen)
        for (var i = 0; i < friends.maleArr.length; i++) {
        if (chosen === friends.maleArr[i].shownName) {
            return res.json(friends.maleArr[i])
        }
        }
        return res.json(false)
    }
    console.log(friends.maleArr);
    return res.json(friends.maleArr)
    })

    app.get('/api/female/:name?', function (req, res) {
    var chosen = req.params.name
    if (chosen) {
        console.log(chosen)
        for (var i = 0; i < friends.femaleArr.length; i++) {
        if (chosen === friends.femaleArr[i].shownName) {
            return res.json(friends.femaleArr[i])
        }
        }
        return res.json(false)
    }
    console.log(friends.femaleArr);
    return res.json(friends.femaleArr)
    })

    // Create New Characters - takes in JSON input
    app.post('/api/addMale?', function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newPerson = req.body
    console.log(newPerson)

    friends.maleArr.push(newPerson)

    res.json(newPerson)
    })

    // Create New Characters - takes in JSON input
    app.post('/api/addFemale?', function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newPerson = req.body
    console.log(newPerson)

    friends.femaleArr.push(newPerson)

    res.json(newPerson)
    })

}
require('dotenv').config();

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require('request');

var db = require('db/db');

var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var movieName = process.argv[3];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



request(queryUrl, function(error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log("The movie is from the year " + JSON.parse(body).Year);
    }
});





//===================================================


var id = 1011762781799043072

var tweets = 20

request("GET", function(id, tweets) {
    console.log(tweets)
});



// Liri commands
if (process.argv[2] === "spotifySong") {
    spotifySong()
} else(process.argv[2] === "movieThis"); {
    movieThis()
}






var spotifySong = function(req, res) {
    request("GET", function(id, song) {
        console.log(song)
    })
    console.log(res);

};
var movieThis = function() {
    request(queryUrl, function(res) {
        console.log(res)
    })
}
var doIt = function() {
    console.log("doit")
}
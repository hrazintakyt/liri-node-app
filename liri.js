require('dotenv').config();

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require('request');

const db = require('db')

var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function (error, response, body){

if (!error && response.statusCode === 200) {
	console.log("The movie is from the year " + JSON.parse(body).Year);
}
});

var id = 1011762781799043072

var tweets = 20

request("GET", function(id, tweets){
console.log(tweets)
}


// Liri commands


var spotifySong = function(){

}
var movieThis = function(){

}
var doIt = function(){

}



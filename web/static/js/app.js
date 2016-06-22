// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
var elmDiv = document.getElementById('elm-app-lives-here');
var app = Elm.Mobbur.embed(elmDiv);

// var audio = new Audio('/audio/start1.mp3')

app.ports.alarm.subscribe(function() {
  document.getElementById('alarm').play()
});
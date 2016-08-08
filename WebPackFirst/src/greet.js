// src/greet.js

var moment = require('moment'); // Add moment.js

function greet(who) {
    console.log('Warm Greetings to  ' + who + ', it\'s ' + moment().format('h:mm:ss a') + '!');
};

module.exports = greet;       // Exposes the greet function to a require in another file
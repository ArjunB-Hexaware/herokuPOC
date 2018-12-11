'use strict';


var request = require("request");

var transport = new (winston.transports.DailyRotateFile)({
    filename: "./logs/myLogs-%DATE%.log",
    datePattern: 'YYYY-MM-DD',
    zippedArchive: false,
    maxSize: '20m'
  });
  var logger = winston.createLogger({
    format:format.combine(
      format.timestamp(),
      prettyPrint()
  ), transports: transport })
const builder = require('botbuilder'),

    apiairecognizer = require('api-ai-recognizer');
   // responseTemplates = require('./../response');

// Bot Storage: Here we register the state storage for your bot.
//var inMemoryStorage = new builder.MemoryBotStorage();

var microsoft = {
    //create chat bot and listen to messages
    connector: new builder.ChatConnector({
        appId: process.env.KEY1,
        appPassword: process.env.KEY2
    })
};

var bot = new builder.UniversalBot(microsoft.connector,{
    storage: new builder.MemoryBotStorage()
}),
    recognizer = new apiairecognizer(process.env.KEY3),
    intents = new builder.IntentDialog({
        recognizers: [recognizer]
    });

bot.dialog('/', intents);

// log any bot errors into the console
bot.on('error', function (e) {
    console.log('And error ocurred', e);
});

intents.matches('Default Fallback Intent', (session, args) => {	    
	calApi(session.message.user.id)
	.then(function(resp){
      
		session.send(resp);
	})
	   
});



intents.onDefault(function (session) {
    session.send("Sorry...can you please rephrase?");
});

module.exports = microsoft;

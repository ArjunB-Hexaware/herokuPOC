'use strict';
var apiai = require('apiai');


var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


   app.post('/',function(req,res){
      console.log('REQUESTTTTT:::'+JSON.stringify(req.body));
if(req.body.queryResult.intent.displayName=='LeaveBalance'){
  res.json({"messages": [
        {
    "displayText": "Text response",
    "platform": "google",
    "textToSpeech": "Audio response",
    "type": "simple_response"
  }
]});
}

});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});

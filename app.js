'use strict';
var apiai = require('apiai');


var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var options = {
    sessionId: '567yh8'
};






   app.post('/',function(req,res){
      console.log('REQUESTTTTT:::'+JSON.stringify(req.body));
if(req.body.queryResult.intent.displayName=='LeaveBalance'){
  res.json({
  "platform": "google",
  "type": "custom_payload",
  "payload": {
    "google": {
      "expectUserResponse": true,
      "isSsml": false,
      "noInputPrompts": [],
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "displayText": "hi",
              "textToSpeech": "hello"
            }
          }
        ],
        "suggestions": [
          {
            "title": "Say this"
          },
          {
            "title": "or this"
          }
        ]
      });



}

});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});

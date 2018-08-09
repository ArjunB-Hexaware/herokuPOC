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

    console.log("tester");
  res.send({"messages": [
  {
    "displayText": "Text response",
    "platform": "google",
    "textToSpeech": "Audio response",
    "type": "simple_response"
  },
     {
    "items": [
      {
        "description": "Item One Description",
        "image": {
          "url": "http://imageOneUrl.com"
          "accessibilityText": "Image description for screen readers"
        },
        "optionInfo": {
          "key": "itemOne",
          "synonyms": [
            "thing one",
            "object one"
          ]
        },
        "title": "Item One"
      },
      {
        "description": "Item Two Description",
        "image": {
          "url": "http://imageTwoUrl.com"
          "accessibilityText": "Image description for screen readers"
        },
        "optionInfo": {
          "key": "itemTwo",
          "synonyms": [
            "thing two",
            "object two"
          ]
        },
        "title": "Item Two"
      }
    ],
    "platform": "google",
    "title": "Title",
    "type": "list_card"
  }
]});





});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});

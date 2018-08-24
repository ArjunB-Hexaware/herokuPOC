'use strict';
var apiai = require('apiai');


var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


   app.post('/',function(req,res){
      console.log('REQUESTTTTT:::',req.body);

    console.log("tester");
      if(req.body.result.fulfillment.speech == "date"){
         res.userStorage="count=1";
      res.send({
  "data": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "Its Oh Great. Nice to know that you like "
            }
          }
        ],
        "suggestions": [
          {
            "title": "PremierLeague"
          },
          {
            "title": "FA Cup"
          },
          {
            "title": "Champions League"
          }
        ],
"contextOut": [
  {
    "name": "leaveBalanceContext",
    "lifespan": 5,
    "parameters": {}
  }
]
      },
      "userStorage": "count=10"
    }
  }
});
      }else{
         console.log("userStorage", JSON.stringify(req.body));
         console.log("userstorageValue",req.body.originalRequest.data.user.userStorage)
      if(req.body.result.fulfillment.speech == "number"){
      res.send({"messages": [
    {
      "displayText": "Number",
      "platform": "google",
      "textToSpeech": "Audio response",
      "type": "simple_response"
    },  {
      "items": [
        {
         
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
    },  {
        "platform": "google",
        "suggestions": [
          {
            "title": "Chip One"
          },
          {
            "title": "Chip Two"
          }
        ],
        "type": "suggestion_chips"
      }
       
  ]});
      }else{
               console.log("userStorage", JSON.stringify(req.body));
         console.log("userstorageValue",req.body.originalRequest.data.user.userStorage)
          if(req.body.result.fulfillment.speech == "success"){
            res.send({"messages": [
                {
                  "displayText": "I am success",
                  "platform": "google",
                  "textToSpeech": "Audio response",
                  "type": "simple_response"
                },  {
                  "items": [
                    {
                     
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
                },  {
                    "platform": "google",
                    "suggestions": [
                      {
                        "title": "Chip One"
                      },
                      {
                        "title": "Chip Two"
                      }
                    ],
                    "type": "suggestion_chips"
                  }
                   
              ]});
            
          }else{
          if(req.body.result.fulfillment.speech == "confirm"){
             
             
               res.send({"messages": [
                {
                  "displayText": "CONFIRM",
                  "platform": "google",
                  "textToSpeech": "Audio response",
                  "type": "simple_response"
                },  {
                  "items": [
                    {
                     
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
                },  {
                    "platform": "google",
                    "suggestions": [
                      {
                        "title": "Chip One"
                      },
                      {
                        "title": "Chip Two"
                      }
                    ],
                    "type": "suggestion_chips"
                  }
                   
              ]});
             }
          }
      }
      }








});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});

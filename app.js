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
      if(req.body.queryResult.fulfillmentText == "date"){
    console.log("I am in");
    /*  res.send({
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
        ]
      },
      "userStorage": "count=10"
    }
  }
});*/
         
         
        /* res.send({
  "data": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "123"
              ,"displayText":"123"

            }
          },
          {
            "basicCard": {
              "title": "0",
              "subtitle": "0",
              "formattedText":"0",
              "image": {
                "url": "",
                "accessibilityText": ""
              },
              "buttons": [
                {
                  "title": "",
                  "openUrlAction": {
                    "url": ""
                  }
                }
              ],
              "imageDisplayOptions": "CROPPED"
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
        ]
      },
      "userStorage": "count=10"
    }
  }
});*/
         
         res.send({
  "conversationToken": "",
  "expectUserResponse": true,
  "expectedInputs": [
    {
      "inputPrompt": {
        "richInitialPrompt": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "List"
              }
            }
          ],
          "suggestions": [
            {
              "title": "Raj"
            },
            {
              "title": "arj"
            }
          ]
        }
      },
      "possibleIntents": [
        {
          "intent": "actions.intent.OPTION",
          "inputValueData": {
            "listSelect": {
              "title": "123",
              "items": [
                {
                  "optionInfo": {
                    "key": "rajesh",
                    "synonyms": []
                  },
                  "title": "Rajesh"
                },
                {
                  "optionInfo": {
                    "key": "Arjun",
                    "synonyms": []
                  },
                  "title": "Arjun",
                  "description": ""
                }
              ]
            },
            "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec"
          }
        }
      ]
    }
  ],
  "userStorage": "{'name':'rajesh'}"
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

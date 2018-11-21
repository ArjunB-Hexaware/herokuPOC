'use strict';
var apiai = require('apiai');


var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/TICKETCOUNT',function(req,res){
    
res.send({
    "SERVICE_TKTS_RES": {
        "EMPLID": "00000",
        "SERVICE_TKT_COUNTS": [
  {
    "TICKET_NAME": "INTERNET",
    "TOTAL_COUNT": "11",
    "PRIORITY_COUNT": {
      "HIGH": "2",
      "MEDIUM": "5",
      "LOW": "3"
    }
  },
  {
    "TICKET_NAME": "ACCOUNT LOCKED",
    "TOTAL_COUNT": "8",
    "PRIORITY_COUNT": {
      "HIGH": "8",
      "MEDIUM": "0",
      "LOW": "0"
    }
  },
  {
    "TICKET_NAME": "ADMIN ACCESS",
    "TOTAL_COUNT": "5",
    "PRIORITY_COUNT": {
      "HIGH": "0",
      "MEDIUM": "1",
      "LOW": "4"
    }
  },
  {
    "TICKET_NAME": "HARDWARE",
    "TOTAL_COUNT": "6",
    "PRIORITY_COUNT": {
      "HIGH": "1",
      "MEDIUM": "3",
      "LOW": "2"
    }
  }
]
    }
}).end();
});

app.post('/REQUESTSTATUS',function(req,res){
res.send({
    "ID CARD REQUESTS": {
        "CARD_REQUESTS": [
            {
                "NAME": "RAJESH",
                "DESIGNATION": "SR. SOFTWARE ENGINEER",
                "STATUS": "Pending"
            },
            {
                "NAME": "RAHUL",
                "DESIGNATION": "VICE PRESIDENT",
                "STATUS": "Dispatched"
            },
            {
                "NAME": "Krishna",
                "DESIGNATION": "TECHNICAL ARCHITECT",
                "STATUS": "Closed"
            },
            {
                "NAME": "Ram",
                "DESIGNATION": "SENIOR CONSULTANT",
                "STATUS": "Dispatched"
            },
            
        ]
    }
}).end();
});

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
  "conversationToken": "[]",
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
  ]
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

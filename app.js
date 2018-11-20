'use strict';
var apiai = require('apiai');


var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/getLeaveBalance',fuction(req,res){
res.send({
    "HX_ES_BOT_LV_BAL_RES": {
        "EMPLID": "00000",
        "HX_ES_BOT_LBAL_CHD_DOC": [
            {
                "LEAVE_TYPE": "EL",
                "LEAVE_DESCR": "Earned Leave",
                "LEAVEBALANCE": "4",
                "ACTUAL_BALANCE": "1 Available, 3 Pending"
            },
            {
                "LEAVE_TYPE": "LOP",
                "LEAVE_DESCR": "Loss of Pay",
                "LEAVEBALANCE": "-1",
                "ACTUAL_BALANCE": "-1 Available, 0 Pending"
            },
            {
                "LEAVE_TYPE": "OPH",
                "LEAVE_DESCR": "Optional Holiday",
                "LEAVEBALANCE": "1",
                "ACTUAL_BALANCE": "0 Available, 1 Pending"
            },
            {
                "LEAVE_TYPE": "PATL",
                "LEAVE_DESCR": "Paternity Leave",
                "LEAVEBALANCE": "3",
                "ACTUAL_BALANCE": "3 Available, 0 Pending"
            }
        ]
    }
})
});

app.post('/getOptionHolidays',fuction(req,res){
res.json({
    "Optional Holiday List": {
        "EMPLID": "00000",
        "COUNTRY": "IND",
        "HX_ES_BOT_OPHL_RSD": [
            {
                "HOLIDAY_DATE": "2018-12-25",
                "HOLIDAY_NAME": "Christmas",
                "LEAVE_STATUS": "Pending",
                "FLAG": "Y"
            },
            {
                "HOLIDAY_DATE": "2018-12-12",
                "HOLIDAY_NAME": "OPH Alpha Testing 5",
                "LEAVE_STATUS": "",
                "FLAG": "N"
            },
            {
                "HOLIDAY_DATE": "2018-11-30",
                "HOLIDAY_NAME": "OPH Alpha Testing 4",
                "LEAVE_STATUS": "",
                "FLAG": "N"
            },
            {
                "HOLIDAY_DATE": "2018-11-22",
                "HOLIDAY_NAME": "OPH Alpha Testing 4",
                "LEAVE_STATUS": "",
                "FLAG": "N"
            },
            {
                "HOLIDAY_DATE": "2018-11-15",
                "HOLIDAY_NAME": "OPH Alpha Testing 3",
                "LEAVE_STATUS": "",
                "FLAG": "N"
            },
            {
                "HOLIDAY_DATE": "2018-10-25",
                "HOLIDAY_NAME": "OPH Alpha Testing 2",
                "LEAVE_STATUS": "Approved",
                "FLAG": "N"
            },
            {
                "HOLIDAY_DATE": "2018-10-05",
                "HOLIDAY_NAME": "OPH Alpha Testing 1",
                "LEAVE_STATUS": "",
                "FLAG": "N"
            },
            {
                "HOLIDAY_DATE": "2018-09-13",
                "HOLIDAY_NAME": "Ganesh Chaturthi",
                "LEAVE_STATUS": "Cancelled",
                "FLAG": "N"
            },
            {
                "HOLIDAY_DATE": "2018-06-15",
                "HOLIDAY_NAME": "Id-Ul_fitr",
                "LEAVE_STATUS": "Approved",
                "FLAG": "Y"
            },
            {
                "HOLIDAY_DATE": "2018-03-30",
                "HOLIDAY_NAME": "Good Friday",
                "LEAVE_STATUS": "",
                "FLAG": "N"
            }
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

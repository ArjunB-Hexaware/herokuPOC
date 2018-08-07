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
        "conversationToken": "",
        "expectUserResponse": true,
        "expectedInputs": [{
            "inputPrompt": {
                "richInitialPrompt": {
                    "items": [{
                        "simpleResponse": {
                            "textToSpeech": "test",
                            "displayText": "testing"
                        }
                    }],
                    "suggestions": []
                }
            },
            "possibleIntents": [{
                "intent": "actions.intent.TEXT"
            }]
        }]
    });



}else if (req.body.queryResult.intent.displayName =='Default Welcome Intent'){
  var apiagentreq=req.body.result&&req.body.result.parameters;
  var resagent='hello Welcome...would you like to book tickets?';
console.log('request are'+apiagentreq);
  return res.json({
    speech:resagent,
    displayText: resagent,
    source:'hello ticket book'
  });

}
else{
  return res.json({
    speech:'HEY Sorry, cannot determine',
    displayText:'HEY Sorry, we cant get you'
  })
}

});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});

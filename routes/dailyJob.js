var express = require('express');
var router = express.Router();
var knex = require('../models/connect');
var dateConvetor = require('bs-ad-convertor');
var bookshelf = require('bookshelf')(knex);
var CronJob = require('cron').CronJob;
var nodemailer = require("nodemailer");
var fs = require('fs');
var json2xls = require('json2xls');

var Reserve = bookshelf.Model.extend({
    tableName:'reserve'
  });
var today = new Date();
var yy = today.getFullYear();
var mm = today.getMonth()+1;
var dd = today.getDate();
var today1 = dateConvetor.eng_to_nep(yy,mm,dd);
var dateTravel = today1.year + '-' + today1.month + '-' + today1.date;
console.log(dateTravel);
Reserve.
query(function(qb){
  qb.orderBy('bus_no');
  qb.where({'dateToTravel': '2073-4-13'});
})
.fetchAll()
.then(function(data){
  var d = data.toJSON();
  console.log(d);
  var xls = json2xls(d,{
    fields: {bus_no:'string',
              seat_no:'string',
              price:'string'}
});

fs.writeFileSync('data.xlsx', xls, 'binary');

var transporter = nodemailer.createTransport("SMTP",{
    service: "Gmail",
  auth: {
    XOAuth2: {
      user: "sjitendra765@gmail.com", // Your gmail address.
                                            // Not @developer.gserviceaccount.com
      clientId: "669581045371-ipaufl7507o360g7lsbe2nc3rrem3vlo.apps.googleusercontent.com",
      clientSecret: "r7tIs8NZymwxpSqsxhCs5usU",
      refreshToken: "1/p2rutrqEThPepZ-HfRSO49DBkmFaHHSGbrNKe5xnIOk"
    }
  }
});
fs.readFile("data.xlsx", function (err, data) {
  console.log(data);
transporter.sendMail({  //email options
   from: "sjitendra765@gmail.com", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "sjitendra765@gmail.com", // receiver
   subject: "Your Report Today", // subject
   text: "" , // body
   attachments: [{filename: 'data.xlsx',filePath:'data.xlsx',content:fs.createReadStream('data.xlsx')}]
}, function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   transporter.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});
});
});


var job = new CronJob({
  cronTime: '* * * * * *',
  onTick: function() {
    
    // console.log('job started');
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});

job.start();
module.exports= job;
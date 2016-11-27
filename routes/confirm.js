var express = require('express');
var router = express.Router();
var Report = require('fluentreports' ).Report;
var displayReport = require('./reportDisplayer');
var fs = require('fs');
var nodemailer = require("nodemailer");
var myCache = require('../models/cacheset');
var keygen = require("keygenerator");
var knex = require('../models/connect');
var bookshelf = require('bookshelf')(knex);
var Seats = bookshelf.Model.extend({
		tableName:'seats'		
	});
var Reserve = bookshelf.Model.extend({
	tableName:'reserve'
})
var Travelbus = bookshelf.Model.extend({
	tableName:'travelbus'
});
router.get('/',function(req,res){		
    	
	res.render('confirm',{active :{bus_reserve:true},secret_key:req.session.reserve.secret_key});	
});
router.post('/',function(req,res){
 /* 
function printreport(options) {
    'use strict';
    options = options || {};

    var Current_Date = new Date().toDateString();

    var header = function(rpt, data) {

        // Company Info - Top Left
        rpt.setCurrentY(14);

        if (options.image && fs.existsSync(options.image)) {
            rpt.image(options.image, {x: 320,width: 100,height:100});
        }
        rpt.setCurrentY(rpt.getCurrentY() - 10);

        if (options.address) rpt.print(options.address, {x: 44});
        if (options.address2) rpt.print(options.address2, {x: 44});
        if (options.city && options.state && options.postal) {
            rpt.print(options.city + ', ' + options.state + ' ' + options.postal, {x: 44});
        }

        // Print our nice Fax header
        rpt.print('FAX', {x: 420, y: 40, fontSize: 80});
        



        rpt.fontSize(13);
        rpt.setCurrentY(170);

        //rpt.font('Aparajita');
        rpt.fontItalic();
        rpt.band([
            {data: 'Date:', width: 78},
            {data: Current_Date, width: 240},
            {data: '# of Pages:', width: 78}, //, font:"Aparajita"},
            {data: data.number_of_pages || 2, width: 200, align: 1}
        ], {font: "Times-Roman", fontBold: true, fontItalic: true}); //"Aparajita"});
        rpt.newLine();
        rpt.fontNormal();

        rpt.band([
            {data: 'To:', width: 78},
            {data: data.faxTo, width: 240},
            {data: 'Attention:', width: 78},
            {data: data.attention, width: 200}
        ]);
        rpt.newLine();

        rpt.band([
            {data: 'From:', width: 78},
            {data: data.from, width: 240},
            {data: 'Phone:', width: 78},
            {data: data.phone, width: 200}
        ]);
       
   };

    var footer = function(rpt) {
        rpt.print(['Thanks for purchasing ticket'], {fontBold: true, fontSize: 8, y: 740});
    };

    // If you change the callback to FALSE the report will be cancelled!
    // var recordCount = function(count, callback) {
    //     console.log("We have", count, "records!");
    //     callback(null, true);
    // };

    // You don't have to pass in a report name; it will default to "report.pdf"
    var reportName = "ticket.pdf";
    var rpt = new Report(reportName);

    rpt      
      .margins(30)
      //.autoPrint(true)
      .header(header)
      .pageFooter(footer)
      .registerFont("Aparajita", {normal: './aparaj.ttf', bold: './aparajb.ttf', 'italic': './aparaji.ttf'})
      .data(options.data);

    // Debug output is always nice (Optional, to help you see the structure)
    rpt.printStructure();

    // This does the MAGIC...  :-)
    console.time("Rendered");
    rpt.render(function(err, name) {
        console.timeEnd("Rendered");
        if (name === false) {
            console.log("Report has been cancelled!");
        } else {
           // displayReport(err, name);
        }
    });

}

var imgLoc = "";

// Depending on where the report is run from, the image location might be in the wrong folder; so we fix it here
// if (fs.existsSync("public/images/t1.jpg")) {
//       imgLoc = "public/images/t1.jpg";
// } else {
//     imgLoc = __dirname + "/public/images/t1.jpg";
// }


console.log(imgLoc);
printreport({
    image: imgLoc,
    name: "Rajdevi Yatayat",
    company: "",
    address: "",
    city: "",
    state: "Kathmandu",
    postal: "0000",
    data: [{
        phone: "800-555-1212",
        faxTo: "800-555-1211",
        from: req.session.travelinfo.from_dept,
        To: req.session.travelinfo.to_dest,       
        
    }]
});*/
});

module.exports = router;
$( document ).ready(function() {
  $(".bookingConti").click(function(){
      var seats = $(this).closest('div').find('#seatno').text();
      var amount = $(this).closest('div').find('#amount').text();
      console.log(seats);
      $.post( "/buslist", {seat_no: seats, amount:amount })
          .done(function(data ) {   
              window.location.replace("/contact_info");
    });
  });
$('.seats').hide();
$('.viewseats').click(function(){
  var bookedSeats=[];
  var date1 = $('#nepaliDate1').val();
  console.log(date1);
  var busno = $(this).closest('tr').find('#bus_no').text();
  console.log(busno);
  $.ajaxSetup({async: false});
  $.post( "test/seat", {date1: date1, bus_no:busno })
  .done(function( data ) {   
   data.forEach(function(d){
    console.log(d);
   bookedSeats.push(d);
   }) ;  
 });
 
  $(this).closest('tr').next('tr').toggle();
  //$(this).closest('tr').next('tr').removeClass('hidden');
  //var bookedSeats = ['A1','B5']; 
  console.log(bookedSeats); 
  var str1 = init(bookedSeats);
  $(this).closest('tr').next('tr').find('#holder').find('#place').html(str1.join(''));

  $(this).closest('tr').next('tr').find('.' + settings.seatCss).click(function () {
if ($(this).hasClass(settings.selectedSeatCss)){
    alert('This seat is already reserved');
}
else{
  var seatnum = $(this).closest('#holder').parent().next('div');
  seatnum.find('#seatno').empty();
  seatnum.find('#amount').empty();
  var str = [];  
  var amt = 0.00; 
    $(this).toggleClass(settings.selectingSeatCss);
      $.each($(this).closest('#holder').find('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title');                   
        str.push(item); 
        var peramt = parseInt($('#peramt').text().slice(3));
        amt = amt + peramt;
        });
     
    seatnum.find('#seatno').val(str);
    seatnum.find('#amount').val(amt);
    }
});

});
  //$(".viewseats").click(function(){
    //$('#seats').toggle();
  //});

var settings = {
               rows: 5,
               cols: 10,
               rowCssPrefix: 'row-',
               colCssPrefix: 'col-',
               seatWidth: 35,
               seatHeight: 35,
               seatCss: 'seat',
               selectedSeatCss: 'selectedSeat',
               selectingSeatCss: 'selectingSeat'
           };

var init = function (reservedSeat) 
              {
                var str = [], seatNo, className;
                var a=1;
                var b =1;
                var c = 1;
                var l = 1;
                    for (j = 0; j < settings.cols; j++) {
                         for (i = 0; i < settings.rows; i++) {
                         if(i>2 && j<2){
                              seatNo = 'C' +c;
                              c++;
                         }
                         if(i<2 && j < (settings.cols-1) && j >1){
                              seatNo = 'B' + b;
                              b++;
                         }
                         if(i>2 && j < (settings.cols-1) && j >2){
                              seatNo = 'A' + a;
                              a++;
                         }
                         if(j == (settings.cols-1))
                         {
                              seatNo = 'L' + l;
                              l++;
                         }
                         if(i<2 && j<2 ){
                              if(i==1 && j == 1){
                                       
                              }
                              continue;
                         }
                         else if((i == 4 || i == 3) && j ==2){
                              continue;
                         }
                         else if( i==2 && j!=settings.cols-1){
                              continue;
                         }
                         else{     
                                          
                        className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                       
                        if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                            className += ' ' + settings.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
               }
                }
                //$('#place').html(str.join(''));
                return str;
            };
            //case I: Show from starting
            //init();
 
            //Case II: If already booked
           // var bookedSeats = ['A1','B5'];
          //  init(bookedSeats);

});

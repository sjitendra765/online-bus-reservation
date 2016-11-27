$( document ).ready(function() {
  
	
    $("#downTicke").on('click', function () {
    var imgageData = $('#myCanvas')[0].toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#downTicke").attr("download", "ticket.png").attr("href", newData);
    });
});

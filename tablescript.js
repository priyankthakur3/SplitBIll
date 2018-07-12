
    var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');



$('.table-add').click(function () {
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line').addClass('vis');
  $TABLE.find('table').append($clone);
  getNoOfMem();
});

$('.table-remove').click(function () {
  $(this).parents('tr').detach();

  $(".vis").each(function(){
    console.log("working from row......");

    if($(".paidA").text().length > 0 && $("#bill-amt").val().length >0){
      var paid = parseInt($(this).find(".paidA").text());
      var billamt = $("#bill-amt").val();
      var $pending = $(this).find(".pending");
      console.log(paid+10);
      console.log("paid length" + $(".paidA").text().length);
      console.log(billamt);
      console.log($pending);

      var rows = getNoOfMem();
      let share = billamt / rows;
      
      let diff = paid - share;
      if(diff >= 0 ){
        $pending.html("Gets "+"Rs."+Math.abs(diff).toFixed(2));
        console.log("working");
  
      }
      else{
        $pending.html("Gives "+"Rs."+Math.abs(diff).toFixed(2));
        console.log("working");
      }
    }
  });
  
});

$('.table-up').click(function () {
  var $row = $(this).parents('tr');
  if ($row.index() === 1) return; // Don't go above the header
  $row.prev().before($row.get(0));
});

$('.table-down').click(function () {
  var $row = $(this).parents('tr');
  $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.click(function () {
  var $rows = $TABLE.find('tr:not(:hidden)');
  var headers = [];
  var data = [];
  
  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {
    headers.push($(this).text().toLowerCase());
  });
  
  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');
    var h = {};
    
    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      h[header] = $td.eq(i).text();   
    });
    
    data.push(h);
  });
  
  // Output the result
  $EXPORT.text(JSON.stringify(data));
});


$(".edi").click(function(){
  var range = document.createRange();
  range.selectNodeContents(this);  
  var sel = window.getSelection(); 
  sel.removeAllRanges(); 
  sel.addRange(range);
});

$(".paidA").on( "keydown",function(event) {
  if( isNaN(String.fromCharCode(event.which))){
      event.preventDefault(); 
  }
});

$(".paid input").css({"background-color":"transparent","border":"0px"});

$('#bill-amt').blur(function()
{   updateBillAmt();
    console.log($(this).val().length);
    if( $(this).val().length>0 ) {
          $(".container").fadeIn();
    }
});

function updateBillAmt(){
  var e = document.getElementById("bill-amt");
  console.log(e.value);
  
}


function getNoOfMem(){
  let dataRows = document.getElementsByClassName("vis");
  console.log("no of rows  :"+ dataRows.length);
  return dataRows.length;
}

$('input, td').on('blur',function(){
  $(".vis").each(function(){
    console.log("working from row......");

    if($(".paidA").text().length > 0 && $("#bill-amt").val().length >0){
      var paid = parseInt($(this).find(".paidA").text());
      var billamt = $("#bill-amt").val();
      var $pending = $(this).find(".pending");
      console.log(paid+10);
      console.log("paid length" + $(".paidA").text().length);
      console.log(billamt);
      console.log($pending);

      var rows = getNoOfMem();
      let share = billamt / rows;
      
      let diff = paid - share;
      if(diff >= 0 ){
        $pending.html("Gets "+"Rs."+Math.abs(diff).toFixed(2));
        console.log("working");
  
      }
      else{
        $pending.html("Gives "+"Rs."+Math.abs(diff).toFixed(2));
        console.log("working");
      }
    }
  });
});

// $(".paidA").on( "keydown",function(event) {
//   if(event.which != 8 && event.which !=46 && isNaN(String.fromCharCode(event.which))){
//       event.preventDefault(); 
//   }
// });

    var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');

$('.table-add').click(function () {
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line').addClass('vis');
  $TABLE.find('table').append($clone);

  // $(".table tr .vis :odd").css("background-color", "white");
  // $(".table tr .vis :even").css("background-color", "#F4F4F8");
  getNoOfMem();
});

$('.table-remove').click(function () {
  $(this).parents('tr').detach();
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

$(".paid").on( "keydown",function(event) {
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
//to color alternate table row
function colorAltRow(){  
  $(".table tr:even").css("background-color", "#F4F4F8");
  $(".table tr:odd").css("background-color", "white");
}

function getNoOfMem(){
  let dataRows = document.getElementsByClassName("vis");
  console.log("no of rows  :"+ dataRows.length);
  return dataRows.length;
}

$(".paid-in").on('blur',function(){
  if ($(this).val().length > 0){
    //get no of rows in table
    var rows = getNoOfMem();
    
    //get bill amount
    let billamt = $("#bill-amt").val();
    console.log('bill amount : '+ billamt);
    
    //calculate share of each member
    let share = billamt / rows;
    console.log('share= '+ share); 

    //get paid amount of the member
    var paid = $(this).val();
    console.log("paid: "+paid);
    var $span = $(this).parent();
    var $td = $span.parent();
    var $pending = $td.next();
    var $name = $td.prev();
    console.log($pending);
    console.log($name);
    
    let diff = paid - share;
    console.log("difference: "+diff);

    if(diff >= 0 ){
      $pending.html("Get "+"Rs."+Math.abs(diff));
      console.log("working");

    }
    else{
      $pending.html("Give "+"Rs."+Math.abs(diff));
      console.log("working");
    }
    
}
});

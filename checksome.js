   
function updateBillAmt(){
    var e = document.getElementById("bill-amt");
    console.log(e.value);
    
}




    var c =1;

    $("#addmem").click(function(){
        $("#splitTable").append('<tr class="memDetails"><td class="memName">'+c+'.'+'</td><td class="paidAmt"><input type="number" onClick="this.select();" placeholder="Amount.."></td> <td class="pending">pending</td></tr>');
        c=c+1;
        var members = document.getElementsByClassName("memDetails");
        console.log(members.length);
    });

function computeSplit(){
    var bill = document.getElementById("bill-amt").value;
    console.log("bill = "+bill);

    /*check if there are members in split table
        if yes ->
            - count no. of members
            - split bill equally
            - calculate difference for each member
            - display pending amount for each member
    */
}

// var members = document.getElementsByClassName("memDetails");
// console.log(members.length);



var member_count = 2;
class Member {
    constructor(name,bill,paid){
        this.name = name;
        this.paid = paid;
        this.pending =0;
        this.bill = bill;
    }
    
    calculateDiff(){
        var share =  this.bill/member_count;
        var diff = this.paid -share;

        if(diff>=0){
            console.log(this.name + " should get "+Math.abs(diff));            
        }
        else{
            console.log(this.name + " should give "+Math.abs(diff));
        }
    }
}

var shubham = new Member("shubham",30,12);
var hema = new Member("hema",30,18);

shubham.calculateDiff();
hema.calculateDiff();

var memPool = new Array();
memPool.push(shubham);
memPool.push(hema);

console.log(memPool);
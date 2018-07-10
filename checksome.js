
class Member {
    constructor(name,bill,paid){
        this.name = name;
        this.paid = paid;
        this.pending =0;
        this.bill = bill;
    }

    // constructor(){
    //     this.name;
    //     this.paid=0;
    //     this.pending=0;
    //     this.bill;
    // }
      
    setName(name){
        this.name = name;
    }
  
    setPaid(paid){
       this .paid = paid;
    } 

    setBill(bill){
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

var member_count = 2;
var shubham = new Member("shubham",30,12);
var hema = new Member("hema",30,18);

shubham.calculateDiff();
hema.calculateDiff();

var memPool = new Array();
memPool.push(shubham);
memPool.push(hema);

console.log(memPool);


function getNoOfMem(){
    var dataRows = document.getElementsByClassName("vis");
    console.log("no of rows  :"+ dataRows.length);
}
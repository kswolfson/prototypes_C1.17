function myMessage(){
    console.log("It's Alive!!");
}

function add(x, y){
    var z=x+y;
    console.log("x+y="+z);
}

function add2(x, y){
    return x+y;
}

function cardFlip(card){
    $(card).hide();
}

var add2result = add2(10, 36);
var recursiveResult = add2(add2(5, 10), add2(20, 30));
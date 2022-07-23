// var a = alert("Hello World")

// var b = prompt("Please enter your name")
// console.log(b);

// var str = 'welcom to js land \nhappy coding!';

// alert(str)

// prompt("what is your name")
// prompt("what is your father name");
// // var c = new Date()
// // var d = new Date()
// // c.getDate()
// // c.getDay()
// // c.getFullYear()
// // c.getMinutes()
// // c.getHours()
// // var c = (1000* 60* 60* 24* 365);
// // var d = (1000* 60* 60* 24* 365);
// // var ef =(c-d )
// var dd = prompt("Enter yor year ")
// console.log(dd);
// alert(Date ());

// alert("check console")
// var bb =("Hello i can run js through my web browser's console")
//  console.log(bb) 

//////////////////////////////////////calculator///////////////////////////////////////////////

// function clearScreen() {
//     document.getElementById("result").value = "";
// }

// // This function display values

// function display(value) {
//     document.getElementById("result").value += value;
// }

// // // This function evaluates the expression and returns result

// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

function clearvalue() {
    document.getElementById("result").value = "";
}

// this function disply value

function display(value) {

    document.getElementById("result").value += value
}

// This function evaluates the expression and returns result

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}






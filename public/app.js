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

/*function clearvalue() {
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
}*/


// var parent = document.getElementById("main")
// var allPera = parent.getElementByTagName("p")
// console.log(allPera);

// for (let i = 0; i < allPera.length; i++) {
//     allPera [i].className = "sucess";
// }

/*var parent = document.getElementById("inp")
var textt = document.getElementById('main')

function createElem(){
    var newPera = document.createElement("P")
    var newText = parent.value
    newText = document.createTextNode(  newText)
    newPera.appendChild(newText);

    textt.appendChild(newPera)
    console.log(parent);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// todo

var list = document.getElementById("list");

function addtodo() {
    var todo_item = document.getElementById("toodo-item");
    
    // create li tag with text node

    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class","lis")
    li.appendChild(liText)
    //   console.log(li)
     
    // input empty to next text to type 

    todo_item.value =""
    
    // create button delete
    
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext)
    
    li.appendChild(delbtn)
    list.appendChild(li)
    
    // create edite button
    var edibtn = document.createElement("button") 
    var ediText = document.createTextNode("EDITE")
    edibtn.setAttribute("class","btn") 
    edibtn.setAttribute("onclick","editeItem(this)") 
    edibtn.appendChild(ediText)
    
    li.appendChild(edibtn)
    

}

function editeItem(e){
  var editvalue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = editvalue
    
}

function deleteItem(e){
    
    
    e.parentNode.remove()
}

function deleteAll(){
    
    list.innerHTML = ""
}


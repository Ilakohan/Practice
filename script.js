/*let name = "Ila";
let otherName = "How are you? ";
alert(name);
alert(otherName);
alert("Hello " + name + ", " + otherName + ". How was your day?");*/

/*document.getElementById("footer").innerHTML = "Who Made this page?";
document.getElementById("footer").style.color = "black";
document.getElementById("footer").style.backgroundColor = "yellow";*/

/*function sayHello() {
    let myElementById ("content").appendenChild(h2)
    myElementById.innerHTML = "hello function"
    document.getElementById ("content").appendChild(myElement)

}
sayHello();
sayHello();*/

/*let button =document.getElementById(myCoolButtom)
button.addEventListener ("click", SayHello);*/

function sayHello() {
  let myElement = document.createElement("h1");
  myElement.innerHTML = "Ila Kohansal";
  document.getElementById("footer").appendChild(myElement);
}

let button = document.getElementById("buttom");
button.addEventListener("click", sayHello);

function sayHello() {
  let myElement = document.createElement("h1");
  myElement.innerHTML = "Ila Kohansal";
  document.getElementById("footer").appendChild(myElement);
}

let button = document.getElementById("buttom");
button.addEventListener("click", sayHello);

// https://jsonplaceholder.typicode.com/users
// API dokümanında Resources bölümünde belirtilen kaynaklardan
// /users uzantısındaki verileri alıp console’a yazdıracak kodu yazın.

let showConsole = document.getElementById("console");
let showTable = document.querySelector("#table");

showConsole.addEventListener("click", consoleShow);

function consoleShow(e) {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

let userListDOM = document.querySelector("#userList");
showTable.addEventListener("click", tableShow);

function tableShow(item) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.forEach((item) => {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = item.name;
        liDOM.style.color = "crimson";
        liDOM.style.fontWeight = "bold";
        userListDOM.appendChild(liDOM);
      });
    });
}

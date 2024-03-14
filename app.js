let list = [];
class format {
  constructor(item, date) {
    this.work = item;
    this.date = date;
  }
}
let item1 = new format("Doodh lana hai", "23-11-23");
let item2 = new format("Read book of history", "24-11-23");
let item3 = new format("Make notes of the math ", "25-10-23");
list.push(item1);
list.push(item2);
list.push(item3);
let database = document.querySelector(".datalist");
console.log(database);
function deletelist(i) {
  list.splice(i, 1);
  database.innerHTML = "";
  display();
}
function display() {
  for (let item = 0; item < list.length; item++) {
    console.log(list[item]);
    database.innerHTML += `<span>${item + 1}. ${list[item].work}</span><span>${
      list[item].date
    }</span><button onclick='deletelist(${item})'>delete</button>`;
  }
}

display();
let add = document.querySelector("#addbtn");
let todoitem = document.querySelector("#TodoList");
let tododate = document.querySelector("#TodoDate");
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoitem.value === "" || tododate.value==='') {
    return;
  }
  let newlist = new format(todoitem.value, tododate.value);
  console.log(todoitem.value);
  console.log(tododate.value);
  list.push(newlist);
  database.innerHTML = "";
  tododate.value='';
  todoitem.value=''
  display();
});

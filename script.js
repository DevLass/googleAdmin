var inp = document.querySelector(".dataInput");
var domain = document.querySelector(".domain");
var table = document.querySelector(".table");

function collectData() {
  console.log(inp.value);
  var names = inp.value;
  var nameArray = names.split("\n");
  main(nameArray);
}

function main(data) {
  for (let i = 0; i < data.length; i++) {
    table.innerHTML += `
    <tr>
      <td>${firstName(data[i])}</td>
      <td>${lastName(data[i])}</td>
      <td>${format(data[i])}</td>
      <td>${email(data[i])}</td>
    </tr>`;
  }
}

function format(str) {
  let regex = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  var arr = regex.split(" ");
  // var keep = arr[1][0].toUpperCase() != arr[1][0];
  // var name = arr.slice(0, keep ? 3 : 2).join(' ');
  var name = arr[0] + " " + arr[arr.length - 1];
  console.log(arr[arr.length - 1]);
  if (arr[arr.length - 1] == "") {
    name = arr[0] + " " + arr[arr.length - 2];
  }
  var lowercaseName = name.toLowerCase();
  var formatted = lowercaseName.replace(/ /g, ".");
  return formatted;
}

function firstName(str) {
  var nameParts = str.split(" ");
  return nameParts[0];
}

function lastName(str) {
  var nameParts = str.split(" ");
  return nameParts.slice(1).join(" ");
}

function email(str) {
  var name = format(str);
  var email = name.concat(`${domain.value}`);
  return email;
}

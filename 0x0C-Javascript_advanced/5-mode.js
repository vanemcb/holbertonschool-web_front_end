const changeMode = function(size, weight, transform, background, color) {
  return function () {
    console.log("entreeeeeeee")
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  const btn1 = document.createElement("button");
  btn1.innerHTML = "Spooky";
  document.body.appendChild(btn1);
  btn1.onclick = function () { spooky() };

  const btn2 = document.createElement("button");
  btn2.innerHTML = "Dark mode";
  btn2.onclick = function () { darkMode() };
  document.body.appendChild(btn2);

  const btn3 = document.createElement("button");
  btn3.innerHTML = "Scream mode";
  btn3.onclick = function () { screamMode() };
  document.body.appendChild(btn3);
}

main();

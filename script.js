  const btn = document.querySelector("button")

// btn.addEventListener("click", function () {
//   alert("You have begun Donut Clicker")
// });

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
 alert("You have begun Donut Clicker");
 localStorage.setItem('alerted','yes');
}

function onClick() {
  clicks += 1
  document.getElementById("donuts").innerHTML = clicks
}

var clicks = 0












/*
const autoClicker = document.querySelector("donuts")
for (let i = 0; i < clicks; i++) {
let autoClicker = clicks
}

document.getElementById("button").click();
for ( let i = 0; ; i++ ) {
document.getElementById("button").click();
}

setInterval(function CountUp(){
counter++;
document.getElementById(btn)
innerText = counter
})
*/
const btn=document.getElementById("button");
const display=document.getElementById("donuts-count");

let donutCount = 0

function addToDonutCount(amountToAdd) {
  donutCount = donutCount + amountToAdd
  display.innerText = donutCount
}

function getDonutCount() {
  return donutCount
}

btn.addEventListener("click", function()
{addToDonutCount(1)})

// Auto Clicker

let autoClickerCount = 0
function getAutoClickerCount(){
  return autoClickerCount 
}

function addToAutoClickerCount(amountToAdd) {
  if(donutCount >= autoClickerCost) {
  autoClickerCount = autoClickerCount + amountToAdd
  } 
}

function subtractDonutCount(autoClickerPurchasePrice) {
  donutCount = donutCount - autoClickerPurchasePrice;
}

const  increasePercentage  = 1.1;

let autoClickerCost = 100;

function increaseAutoClickerCost(){
    autoClickerCost = autoClickerCost * increasePercentage
    autoClickerCost = Math.round(autoClickerCost)
}

function countUp() {
  donutCount = donutCount + autoClickerCount
  }
  setInterval(countUp, 1000)



// modal 
const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => {
  favDialog.showModal();
});

favDialog.addEventListener('close', (e) => {
  outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`;
});


// //Add a click event listener to our button
btn.addEventListener("click", function () {
  addEventListener(1);
});
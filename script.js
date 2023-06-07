const btn=document.getElementById("donutget");
const display=document.getElementById("donuts-count");
const purchaseButton = document.getElementById('autoclickerpurchase');
const displayClicker=document.getElementById('clicker-count');
const resetButton=document.getElementById('resetButton')
const  increasePercentage  = 1.1

let donutCount = 0
let autoClickerCount = 0
let autoClickerCost = 100;

const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const showButton2 = document.getElementById('showDialog2');
const favDialog2 = document.getElementById('favDialog2');


function addToDonutCount(amountToAdd) {
  donutCount = donutCount + amountToAdd
  display.innerText = donutCount
}

function getDonutCount() {
  return donutCount
}

btn.addEventListener("click", function()
{addToDonutCount(1000)})

// Auto Clicker

function getAutoClickerCount(){
  return autoClickerCount 
}

function addToAutoClickerCount(amountToAdd) {
  autoClickerCount = autoClickerCount + amountToAdd
}

function subtractDonutCount() {
  donutCount = donutCount - autoClickerCost;
  display.innerText = donutCount

  addToAutoClickerCount(1)
  displayClicker.innerText = autoClickerCount
  
  increaseAutoClickerCost()
  purchaseButton.innerText = autoClickerCost + ' Donuts Needed'
  
  checkDonutPurchase()
}

function increaseAutoClickerCost(){
    autoClickerCost = autoClickerCost * increasePercentage
    autoClickerCost = Math.round(autoClickerCost)
}

function countUp() {
  donutCount = donutCount + autoClickerCount
  display.innerText = donutCount
  checkDonutPurchase()
    }
  setInterval(countUp, 1000)


function checkDonutPurchase() {
    if(donutCount < autoClickerCost || (donutCount - autoClickerCost < 0)){
      purchaseButton.disabled = true;
      console.log('PURCHASE-DENIED: need', autoClickerCost, "only have:", donutCount)
    }
    else{
      purchaseButton.disabled = false;
      console.log('PURCHASE:', donutCount)
    }
};

function reset(){
  donutCount = 0
  autoClickerCost = 100 
  autoClickerCount = 0
  display.innerText = donutCount
  displayClicker.innerText = autoClickerCount
  purchaseButton.innerText = autoClickerCost + ' Donuts Needed'
}


btn.addEventListener('click', checkDonutPurchase);
purchaseButton.addEventListener('click', subtractDonutCount);
resetButton.addEventListener('click', reset)

//modal 


// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => {
  favDialog.showModal();
});

favDialog.addEventListener('close', (e) => {
  outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`;
});


//modal 2


showButton2.addEventListener('click', () => {
  favDialog2.showModal();
});

favDialog2.addEventListener('close', (e) => {
  outputBox.value = favDialog2.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog2.returnValue}.`;
});

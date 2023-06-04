let donutCount = 0

function addToDonutCount(amountToAdd) {
  donutCount = donutCount + amountToAdd
}

function getDonutCount() {
  return donutCount
}

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

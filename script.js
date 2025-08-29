

// let heartCount = 0;
// let copyCount = 0;
// let coinCount = 100; 
// const historyList = document.getElementById("historyList");

// function increaseHeart() {
//   heartCount++;
//   document.getElementById("heartCount").innerText = heartCount;

//   const heartIcon = event.target;
//   heartIcon.classList.add("text-red-500");
// }
 
// function copyNumber(number) {
//   navigator.clipboard.writeText(number).then(() => {
//     copyCount++;
//     document.getElementById("copyCount").innerText = copyCount;
  
//     alert("Number copied: " + number);
//   });
// }

// function makeCall(serviceName, number) {
//   if (coinCount <= 0) {
//     alert("No coins left to make a call!");
//     return;
//   }

//   coinCount--;
//   document.getElementById("coinCount").innerText = coinCount;

//   const li = document.createElement("li");
//   li.textContent = `${serviceName} (${number}) - Called at ${new Date().toLocaleTimeString()}`;
//   historyList.prepend(li);
// }
// function clearHistory() {
//   historyList.innerHTML = "";
// }


let heartCount = 0;
let copyCount = 0;
let coinCount = 100; 
const historyList = document.getElementById("historyList");

function increaseHeart() {
  heartCount++;
  document.getElementById("heartCount").innerText = heartCount;

  const heartIcon = event.target;
  heartIcon.classList.add("text-red-500");
}

function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
    alert("Number copied: " + number);
  });
}

function makeCall(serviceName, number) {
  if (coinCount < 20) {
    alert("Not enough coins! Each call costs 20 coins.");
    return;
  }

  coinCount -= 20;  // Deduct 20 coins
  document.getElementById("coinCount").innerText = coinCount;

  alert(`Calling ${serviceName} at ${number}...`);

  const li = document.createElement("li");
  li.textContent = `${serviceName} (${number}) - Called at ${new Date().toLocaleTimeString()}`;
  historyList.prepend(li);
}

function clearHistory() {
  historyList.innerHTML = "";
}

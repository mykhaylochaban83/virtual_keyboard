const keyBoard = [
  ["`", 192],
  ["1", 49],
  ["2", 50],
  ["3", 51],
  ["4", 52],
  ["5", 53],
  ["6", 54],
  ["7", 55],
  ["8", 56],
  ["9", 57],
  ["0", 48],
  ["-", 189],
  ["=", 187],
  ["Backspace", 8],
  ["Tab", 9],
  ["q", 81],
  ["w", 87],
  ["e", 69],
  ["r", 82],
  ["t", 84],
  ["y", 89],
  ["u", 85],
  ["i", 73],
  ["o", 79],
  ["p", 80],
  ["[", 219],
  ["]", 221],
  ["CapsLock", 20],
  ["a", 65],
  ["s", 83],
  ["d", 68],
  ["f", 70],
  ["g", 71],
  ["h", 72],
  ["j", 74],
  ["k", 75],
  ["l", 76],
  [";", 186],
  ["'", 222],
  ["Enter", 13],
  ["Shift", 16],
  ["\\", 226],
  ["z", 90],
  ["x", 88],
  ["c", 67],
  ["v", 86],
  ["b", 66],
  ["n", 78],
  ["m", 77],
  [",", 188],
  [".", 190],
  ["/", 191],
  ["Shift", 16],
  ["Space", 32],
];

const funcKeys = [8, 9, 20, 13, 16, 16, 46];

function key() {
  let out = "";
  for (let i = 0; i < keyBoard.length; i++) {
    out += `<div class="k-key" data="${keyBoard[i][1]}"> ${keyBoard[i][0]} </div>`;
  }
  document.querySelector(".keyBoard").innerHTML = out;
}

key();

function addId() {
  document.querySelector(".keyBoard").children[52].setAttribute("id", "2");
}
addId();

const log = document.getElementById("log");

function activeKey() {
  document
    .querySelector(`.k-key[data="${event.keyCode}"]`)
    .classList.add("active");
}

function logKey(e) {
  for (let j = 0; j < funcKeys.length; j++) {
    if (e.keyCode === funcKeys[j]) {
      return log.textContent;
    }
  }
  log.textContent += `${e.key}`;
}

function deActive(e) {
  document
    .querySelector(`.k-key[data="${e.keyCode}"]`)
    .classList.remove("active");
}

function keyBackspace(e) {
  if (e.keyCode === 8) {
    log.textContent = log.textContent.substr(0, log.textContent.length - 1);
  }
}

function keyTab(e) {
  if (e.keyCode === 9) {
    log.innerHTML += `\t`;
  }
  document.querySelector(`.k-key[data="9"]`).classList.remove("active");
}

function CapsLock(e) {
  if (e.keyCode === 20) {
  }
}
function keyEnter(e) {
  if (e.keyCode === 13) {
    log.innerHTML += "\n";
  }

}
function keyShiftDown(e) {
  if (event.location == 2) {
    console.log(event.location);
    document.querySelector('.k-key[id="2"]').classList.add("active");
    document.querySelector('.k-key[data="16"]').classList.remove("active");
  }
}
function keyShiftUp(e) {
  if (event.location == 2) {
    console.log(event.location);
    document.querySelector('.k-key[id="2"]').classList.remove("active");
  }
}
document.querySelector('.k-key[data="8"]').classList.add("func");
document.querySelector('.k-key[id="2"]').classList.add("func");
document.querySelector('.k-key[data="9"]').classList.add("func");
document.querySelector('.k-key[data="20"]').classList.add("func");
document.querySelector('.k-key[data="13"]').classList.add("func");
document.querySelector('.k-key[data="16"]').classList.add("func");
document.querySelector('.k-key[data="32"]').classList.add("space");

document.addEventListener("keydown", keyTab);
document.addEventListener("keydown", keyBackspace);
document.addEventListener("keydown", activeKey);
document.addEventListener("keydown", keyEnter);
document.addEventListener("keydown", logKey);
document.addEventListener("keydown", keyShiftDown);
document.addEventListener("keyup", keyShiftUp);
document.addEventListener("keyup", deActive);

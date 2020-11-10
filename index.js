const textContainer = document.querySelector(".text-container");

function Text(content, originTop, originLeft) {
  this.content = content;
  this.originTop = originTop;
  this.originLeft = originLeft;

  this.init();
}

Text.prototype = {
  constructor: Text,
  init: function () {
    const mainElem = document.createElement("div");
    mainElem.style.top = this.originTop;
    mainElem.style.left = this.originLeft;
    mainElem.innerHTML = this.content;
    mainElem.classList.add("text");
    textContainer.appendChild(mainElem);
  },
};

const text1 = new Text("Pour les personnes immigrantes", `0%`, 0);
const text2 = new Text("qui se chercher un emploi", `20%`, 0);
const text3 = new Text(`c'est  plus de portes qui se ferment,`, `40%`, 0);
const text4 = new Text(`moins de portes qui s'ouvrent`, `60%`, 0);

let n = 0;
let timeId;

//유사배열을 배열로
const text = document.querySelectorAll(".text");
const array = Array.from(text);
array.forEach((ea) => {
  const textRightCorner = ea.offsetWidth;

  function clone() {
    for (let i = 0; i < ea.length; i++) {
      const clone = document.createElement("div");
      clone.innerHTML = ea.innerHTML;
      clone.style.left = textRightCorner;
      clone.classList.add("textClone");
      clone.style.top = ea.offsetTop;
      // console.log(ea.offsetTop);//0 122 244 365
      textContainer.appendChild(clone);
    }
  }
  clone();
  // console.log(ea.offsetWidth); //1143. 920, 1252, 1063

  function moveLeft() {
    for (let i = 0; i < text.length; i++) {
      text[i].style.left = `${(text[i].offsetLeft -= 1)}px`;
    }
    timeId = requestAnimationFrame(moveLeft);
  }

  moveLeft();
  // clone();
});

window.addEventListener("click", function () {
  cancelAnimationFrame(timeId);
});

let color1 = document.getElementById("FIRST");
let color2 = document.getElementById("SECOND");
let gradientCont = document.getElementById("output");
let btn = document.getElementById("btnThree");
let copyButton = document.getElementById("btnCopy");
let popUp = document.querySelector(".popup");
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
//
// hamburger.addEventListener("click", mobileMenu);
//
// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

const makeColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return randomColor;
};

const generateGradient = () => {
  color1.value = "#" + makeColor();
  color2.value = "#" + makeColor();

  // let angle = Math.floor(Math.random() * 360);

  document.getElementById("codeOne").innerText = color1.value;
  document.getElementById("codeTwo").innerText = color2.value;
  gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
  document.getElementById(
    "outputCode"
  ).innerText = `background: linear-gradient(${color1.value}, ${color2.value});`;
};

const setGradient = () => {
  gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
  document.getElementById("codeOne").innerText = color1.value;
  document.getElementById("codeTwo").innerText = color2.value;
  document.getElementById(
    "outputCode"
  ).innerText = `background: linear-gradient(${color1.value}, ${color2.value});`;
};

document.body.addEventListener("load", generateGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", generateGradient);

copyButton.addEventListener("click", () => {
  popUp.classList.add("active");
  copyToClip();
});
popUp.addEventListener("animationend", () => {
  popUp.classList.remove("active");
});
const copyToClip = () => {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.value = document.getElementById("outputCode").innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

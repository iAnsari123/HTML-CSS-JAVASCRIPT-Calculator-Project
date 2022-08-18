const display = document.querySelector(".display");
const arr = Array.from(document.querySelectorAll(".item"));
console.log(arr);

arr.forEach((item) => {
  item.onclick = () => {
    if (item.innerText == "C") {
      display.innerText = " ";
    } else if (display.innerText != "" && item.innerText == "=") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText != "" && item.classList[0] == "Arrow") {
      let cutting = display.innerText;
      cutting = cutting.slice(0, -1);
      display.innerText = cutting;
    } else {
      display.innerText += item.innerText;
    }
  };
});

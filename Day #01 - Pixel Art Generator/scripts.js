// document.addEventListener("DOMContentLoaded", () => {
const widthSlider = document.querySelector("#width-slider");
const heightSlider = document.querySelector("#height-slider");
const widthValue = document.querySelector("#width-value");
const heightValue = document.querySelector("#height-value");
const createGridBtn = document.querySelector("#create-grid-btn");
const eraseGridBtn = document.querySelector("#erase-grid-btn");
const eraseBtn = document.querySelector("#erase-btn");
const paintBtn = document.querySelector("#paint-btn");
const colorPickerBtn = document.querySelector("#color-picker-btn");
const outputContainer = document.querySelector(".output-container");
let isErase = false;
let isPaint = false;

widthSlider.addEventListener("input", () => {
  widthValue.textContent = widthSlider.value;
});

eraseBtn.addEventListener("click", () => {
  if (isPaint || isErase) {
    isErase = false;
    isPaint = false;
    eraseBtn.classList = "bg-red-700 p-2 rounded-md cursor-pointer text-color5";
  } else {
    isErase = true;
    eraseBtn.classList =
      "bg-green-700 p-2 rounded-md cursor-pointer text-color5";
    paintBtn.classList = "bg-red-700 p-2 rounded-md cursor-pointer text-color5";
  }
  console.log(isErase);
});

paintBtn.addEventListener("click", () => {
  isPaint = !isPaint;
  if (isPaint) {
    paintBtn.classList =
      "bg-green-700 p-2 rounded-md cursor-pointer text-color5";
    eraseBtn.classList = "bg-red-700 p-2 rounded-md cursor-pointer text-color5";
  } else {
    paintBtn.classList = "bg-red-700 p-2 rounded-md cursor-pointer text-color5";
  }
});

heightSlider.addEventListener("input", () => {
  heightValue.textContent = heightSlider.value;
});

createGridBtn.addEventListener("click", () => {
  const widthOfGrid = widthSlider.value;
  const heightOfGrid = heightSlider.value;
  const noOfPixel = widthOfGrid * heightOfGrid;
  console.log(`${widthOfGrid},${heightOfGrid},${noOfPixel}`);

  outputContainer.innerHTML = "";
  const gridItemWidth = 100 / widthOfGrid;

  outputContainer.style.gridTemplateColumns = `repeat(${widthOfGrid}, 1fr)`;

  for (let i = 1; i <= noOfPixel; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList = "bg-gray-200 w-5 h-5 border border-sky-500 canvas";
    outputContainer.appendChild(newDiv);
    newDiv.addEventListener("click", () => {
      if (isErase) {
        newDiv.style.backgroundColor = `#e0e1dd`;
        console.log("Hello world");
      } else {
        newDiv.style.backgroundColor = `${colorPickerBtn.value}`;
        console.log(colorPickerBtn.value);
      }
    });

    newDiv.addEventListener("mouseenter", () => {
      if (isPaint) {
        newDiv.style.backgroundColor = `${colorPickerBtn.value}`;
        console.log(colorPickerBtn.value);
      }
      if (isErase) {
        // newDiv.style.backgroundColor = `transparent`;
        console.log("Hello world");
      }
    });
  }
  canvas = outputContainer.querySelectorAll(".canvas");
  console.log(canvas);
});

colorPickerBtn.addEventListener("click", () => {
  console.log(colorPickerBtn.value);
});

eraseGridBtn.addEventListener("click", () => {
  outputContainer.innerHTML = "";
});

widthValue.textContent = widthSlider.value;
heightValue.textContent = heightSlider.value;
// })();

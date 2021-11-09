'use strict'


const textOutputLimits = document.querySelector('.text-outputs-limits')
const textOutputsContainer = document.querySelector('.text-outputs');
const textOutputs = document.querySelectorAll(".text-output-js");


const textInputs = document.querySelectorAll(".text-inputs-js");
const image = document.querySelector('img');

const coloPicker = document.querySelector("#color");
const previewWindow = document.querySelector(".preview-window");

const radios = document.querySelectorAll("input[type='radio']");
let fontSize = 256;

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function(event){
    for (let y = 0; y< radios.length; y++) {if (radios[y].checked) image.src = `Cute-Mickey-Mouse-PNG-0${i+1}.png`; }
    }
    )
  if (radios[i].checked) image.src = `Cute-Mickey-Mouse-PNG-0${i+1}.png`;
}



for (let i = 0; i < textOutputs.length; i++) {
    textInputs[i].addEventListener('input', function(event) {
    textOutputs[i].innerText = event.target.value;

    for (let y = 0; y < textOutputs.length; y++) {
      textOutputs[y].style.fontSize = `${fontSize}px`;
    }

    while (isOverflown(textOutputLimits, textOutputsContainer)) {
      fontSize--
      for (let y = 0; y < textOutputs.length; y++) {
        textOutputs[y].style.fontSize = `${fontSize}px`;
      }
    }
    
  });
}
  
coloPicker.addEventListener('change', function(event) {
  previewWindow.style.backgroundColor = event.target.value;
});


function isOverflown(OuterElement, innerElement) {
  return OuterElement.offsetWidth < innerElement.offsetWidth || OuterElement.offsetHeight < innerElement.offsetHeight;
}
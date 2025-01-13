const $inputName = document.querySelector("#name");

const $selectJob = document.querySelector("#title");
const $inputJob = document.querySelector("#other-title");

const $design = document.querySelector("#design");
const $color = document.querySelector("#color");
const $puns = document.querySelectorAll(".puns");
const $heart = document.querySelectorAll(".heart");

console.log($inputName);
console.log($selectJob);
console.log($inputJob);
console.log($design);

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Hello");
  $inputName.focus();

  $selectJob.addEventListener("change", function (e) {
    console.log(e.target.value);
    if (e.target.value === "other") {
      $inputJob.classList.remove("is-hidden");
    } else {
      $inputJob.classList.add("is-hidden");
    }
  });

  $design.addEventListener("change", function (e) {
    console.log(e.target.value);

    if (e.target.value === "js puns") {
      $color.classList.add("is-hidden");
    } else if (e.target.value === "heart js") {
      $puns.classList.add("is-hidden");
    } else {
      $color.classList.add("is-hidden");
    }
  });
});

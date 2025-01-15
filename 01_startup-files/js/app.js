const $inputName = document.querySelector("#name");

const $selectJob = document.querySelector("#title");
const $inputJob = document.querySelector("#other-title");

const $design = document.querySelector("#design");
const $color = document.querySelector("#color");
const $puns = document.querySelectorAll(".puns");
const $heart = document.querySelectorAll(".heart");

const $checkbox = document.querySelectorAll("input[type='checkbox']");

console.log($inputName);
console.log($selectJob);
console.log($inputJob);
console.log($design);
console.log($puns);
console.log($checkbox);

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
      for (let i = 0; i < $heart.length; i++) {
        const element = $heart[i];
        element.classList.add("is-hidden");
      }

      for (let i = 0; i < $puns.length; i++) {
        const element = $puns[i];
        element.classList.remove("is-hidden");
      }
    } else if (e.target.value === "heart js") {
      for (let i = 0; i < $puns.length; i++) {
        const element = $puns[i];
        element.classList.add("is-hidden");

        for (let i = 0; i < $heart.length; i++) {
          const element = $heart[i];
          element.classList.remove("is-hidden");
        }
      }
    } else {
      for (let i = 0; i < $puns.length; i++) {
        const element = $puns[i];
        element.classList.remove("is-hidden");

        for (let i = 0; i < $heart.length; i++) {
          const element = $heart[i];
          element.classList.remove("is-hidden");
        }
      }
    }
  });

  $checkbox.addEventListener("click", function (e) {
    if ($checkbox[i].className === "100") {
      console.log("100$");
    }
  });
});

const btnsNext = document.querySelectorAll(".btn-next");
const btnsPrev = document.querySelectorAll(".btn-prev");
const Prograss = document.getElementById("prograss");
const formStep = document.querySelectorAll(".formStep");
const prograssStep = document.querySelectorAll(".prograss-step");

let formStepNumber = 0;

btnsNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepNumber++;
    updatePrograss();
    updatePrograssPar();
  });
});
btnsPrev.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepNumber--;
    updatePrograss();
    updatePrograssPar();
  });
});

function updatePrograss() {
  formStep.forEach((formstep) => {
    formstep.classList.contains("form-step-active") &&
      formstep.classList.remove("form-step-active");
  });
  formStep[formStepNumber].classList.add("form-step-active");
  console.log(formStepNumber);
}

function updatePrograssPar() {
  prograssStep.forEach((prostep, index) => {
    if (index < formStepNumber + 1) {
      prostep.classList.add("prograss-step-active");
    } else {
      prostep.classList.remove("prograss-step-active");
    }
  });
  const prograssStepactive = document.querySelectorAll(".prograss-step-active");
  Prograss.style.width =
    ((prograssStepactive.length - 1) / (prograssStep.length - 1)) * 100 + "%";
}

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Sun-kissed sands so white, Waves crash soft, a gentle song, Island dreams take flight. Palm trees sway in breeze, Ocean's breath, a salty kiss, Holiday's sweet ease.",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

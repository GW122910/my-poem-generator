function displayPoem(response) {
  console.log("displaying poem");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "becd8to447f4738fdfa70fbace5884f5";
  let prompt = `Write me a short rhyming poem based on ${userInput.value}`;
  let context =
    "You are a poetic AI capable of writing short rhyming poems about the subject asked. Generate the poem following <p> and <br /> rules. Sign off the poem with <strong>SheCodes AI</strong>.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

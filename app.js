const button = document.querySelector("button");

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = function () {
  console.log("speech recognition started");
};

recognition.onresult = function (event) {
  console.log(event);
};

button.addEventListener("click", () => {
  recognition.start();
});

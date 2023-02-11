const button = document.querySelector("button");

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = function () {
  console.log("speech recognition started");
};

recognition.onresult = function (event) {
  console.log(event);
  const spokenWords = event.results[0][0].transcript;

  console.log("spoken words are", spokenWords);

  computerSpeech(spokenWords);
};

function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();

  speech.lang = "en.US";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;
  speech.text = words;

  window.speechSynthesis.speak(speech);
}

button.addEventListener("click", () => {
  recognition.start();
});

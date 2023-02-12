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

  speech.lang = "en-GB";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;

  determineWords(speech, words);

  window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
  if (words.includes("hello")) {
    speech.text = "hello human!";
  }

  if (words.includes("how are you")) {
    speech.text = "I am as fine as a robot living on your screen can be";
  }
}

button.addEventListener("click", () => {
  recognition.start();
});

let emotion = prompt("u emotion? ( chirful, normal or sad )");

const chirful = "😊";
const normal = "😠";
const sad = "😢";

switch (emotion) {
  case "chirful":
    emotion = alert(chirful);
    break;

  case "normal":
    emotion = alert(normal);
    break;

  case "sad":
    emotion = alert(sad);
    break;

  default:
    console.log("Invalid emotion type");
}

console.log(emotion);

//recupération command de l'input
var command = document.getElementById("command");
var commandLine = document.getElementById("commandLine");
var sound = document.getElementById("sound");

//detection touche enter pour lancer une command
document.body.addEventListener("keyup", function(event){
  if(event.keyCode == 13){
    switch (command.value) {
      case "nyancat":
      nyancatCmd();
      break;
      case "twitter":
      twitterCmd();
      break;
      case "help":
      helpCmd();
      break;
      default:
      console.log("Commande inaccessible, Taper help pour voir toutes les commandes");
      break;
    }
  }
}, false);
function helpCmd(){
  help = ["bgblue", "twitter", "nyancat"];
  alert(help)
  var prevCommand = document.createElement("div");
  prevCommand.setAttribute("id", "prevCommand");
  prevCommand.setAttribute("class", "prevCommandStyle");
  //prevCommand.innerHTML = help;
  command.value = "";
}

//fonction répondant à la commande "nyancat"
function nyancatCmd() {
  var prevCommand = document.createElement("div");
  prevCommand.setAttribute("id", "prevCommand");
  prevCommand.setAttribute("class", "prevCommandStyle");
  prevCommand.innerHTML = ("C:/ProgramsPoney/nyancat");
  commandLine.parentNode.insertBefore(prevCommand, commandLine);
  command.value = "";

  document.body.style.backgroundImage = "url(http://media3.giphy.com/media/sIIhZliB2McAo/giphy.gif)";
  sound.innerHTML = "<audio src='https://ia600608.us.archive.org/26/items/nyannyannyan/NyanCatoriginal.mp3' autoplay></audio>";
}

function twitterCmd() {
  window.open("http://www.twitter.com");
  var prevCommand = document.createElement("div");
  prevCommand.setAttribute("id", "prevCommand");
  prevCommand.setAttribute("class", "prevCommandStyle");
  prevCommand.innerHTML = ("C:/ProgramsPoney/twitter");
  commandLine.parentNode.insertBefore(prevCommand, commandLine);
  prevCommand.removeAttribute("id", "prevCommand");
  command.value = "";
}

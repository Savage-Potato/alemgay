$('#no-btn').on('mouseover', function() {
  $(this).css({
    'top': Math.random() * 500 + "px",
    'left': Math.random() * 500 + "px"
  });
});

window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});

$('#yes-btn').on('click', function(){
  var audio = document.getElementById("audio");
  audio.setAttribute("src", "snap-happy.mp3");
  audio.play();

  document.getElementById("pyro").style.display = "block";
  document.getElementById("body").style.backgroundColor = "#000000";

  var catImg = document.getElementById("cat");

  // Replace the GIF with your own
  catImg.setAttribute("src", "ALL.gif");  // Update this with your actual file name

  // Set the width and height
  catImg.style.width = "800px";
  catImg.style.height = "400px";

  document.getElementById("no-btn").style.display = "none";
  document.getElementById("yes-btn").style.display = "none";
  var textElement = document.createElement("h1");
  textElement.innerText = "Congrats on Being Gay. You're officially Gay now";
  textElement.style.color = "white";
  textElement.style.textAlign = "centre";
  textElement.style.position = "absolute";
  textElement.style.top = "50%";
  textElement.style.left = "50%";
  textElement.style.transform = "translate(-50%, -50%)";

  textElement.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";  // Change this to any font
  textElement.style.fontSize = "40px";  // Adjust size
  textElement.style.fontWeight = "bold";  // Make text bold
  textElement.style.textShadow = "2px 2px 5px rgba(255,255,255,0.5)";

  // Append text to the body
  document.body.appendChild(textElement);
});

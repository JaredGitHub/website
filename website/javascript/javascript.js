body.addEventListener("click", explodeOnClick);
body.addEventListener("keydown", keyPress);

function keyPress(event)
{
  if (event.key == "e")
  {
      let img = document.createElement("img");
    
      img.src = "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/Musk-2.jpg?w=2000&h=1126&crop=1";
      document.body.appendChild(img);

      let audio = new Audio("website/audio/demon.mp3");
      audio.play();

      img.style.position = "fixed";
      img.style.height = "800px";
      img.style.left = "10px";
      img.style.top = "10px";

      setTimeout(() => {
        img.remove();
      }, 3000);
  }
}
function explodeOnClick(event) {
  let x = event.pageX;
  let y = event.pageY;

  let explosion = document.getElementsByClassName("explosion");

  let img = new Image();
  let audio = new Audio("website/audio/explosion.mp3");
  audio.play();

  img.src = "https://media.tenor.com/j-ixpElDGOYAAAAi/explode-boom.gif";
  document.getElementsByClassName("explosion")[0].appendChild(img);

  img.style.position = "absolute";
  img.style.left = x - 30 + "px";
  img.style.top = y - 50 + "px";

  setTimeout(() => {
    img.remove();
  }, 700);
}

//Whenever someone presses the e key Elon Musk will show up for 3 seconds and say AI unleashes a demon.

$("#elonswitch").change(function()
{
  var elonswitch = $(this).is(':checked');

  if(elonswitch === true)
{
  $("body").on("keypress", function (event) {
    if (event.key == "e") {
      let img = document.createElement("img");
  
      img.src = "../images/elon musk.png";
      document.body.appendChild(img);
  
      let audio = new Audio("../audio/demon.mp3");
      audio.play();
  
      img.style.position = "fixed";
      img.style.height = "800px";
      img.style.left = "10px";
      img.style.top = "10px";
      $(img).show();
  
      setTimeout(() => {
        img.remove();
        $(img).hide();
      }, 3000);
    }
  });
}
else
{
  $("body").off("keypress");
}
});

//Checking if the user clicks on the page, and wherever they click it will put an explosion gif and a sound!
$("#explosionswitch").change(function ()
{
  var explosionswitch = $(this).is(':checked');

  if (explosionswitch === true)
  {
    $("body").on("click", function (event) {
      let x = event.pageX;
      let y = event.pageY;

      let explosion = document.getElementsByClassName("explosion");

      let img = new Image();
      let audio = new Audio("../audio/explosion.mp3");
      audio.play();

      img.src = "../images/explode-boom.gif";
      document.getElementsByClassName("explosion")[0].appendChild(img);

      img.style.position = "absolute";
      img.style.left = x - 30 + "px";
      img.style.top = y - 50 + "px";
      $(".explosion").show();

      setTimeout(() => {
        $(".explosion").hide();
        img.remove();
      }, 700);
    });
  }
  else{
    $("body").off("click");
  }
});

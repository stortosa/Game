let game = new Game

window.onload = () => {
  // document.getElementById("start-button").onclick = function(){
  //   startGame();
  // };

  const gameStartImage = document.querySelector(".star-planet");
  gameStartImage.onclick = function () {
    // gameStartImage.style.display = "none";
    game.init("canvas"); //canvas
  }

  // startGame = () =>{
  //   game.init("canvas");
  // }
}
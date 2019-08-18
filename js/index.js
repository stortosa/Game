
let game = new Game

window.onload = () => {
  document.getElementById("start-button").onclick = function(){
    startGame();
  };
  
  startGame = () =>{
    game.init("canvas");
  }
}
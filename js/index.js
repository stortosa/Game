
var game = new Game()
window.onload = function(){
  document.getElementById("start-button").onclick = function(){

    startGame();
  };
  startGame = () =>{
    game.init("canvas");
  }
}
class scoreBoard {
  constructor(ctx) {
    this.canvas = ""
    this.ctx = ctx
    this.score = 0

  }

  increaseScore = () => {
    this.score += 0.01
    console.log(this.score)

  }

  drawScoreBoard = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#canvas");
    /** @type CanvasRenderingContext2D */
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "80px Comic Sans MS";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(Math.floor(this.score), 50, 50);
  }

  drawScoreMssg = () => {
    this.ctx.font = '20px Comic Sans MS';
    this.ctx.fillStyle = "black";
    this.ctx.fillText(` `, 50, 500);
  }

  getScore = () => {
    return this.score
  }

}

//este literal mantiene el marcador del juego con su puntuación
// var ScoreBoard = {
//   ctx: undefined,
//   init: function(ctx) {
//     ctx.font = "50px sans-serif";
//     this.ctx = ctx;
//   },
//   update: function(score) {
//     this.ctx.fillStyle = "black";
//     this.ctx.fillText(Math.floor(score), 50, 50);
//   }
// };

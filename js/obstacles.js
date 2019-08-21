class Obstacle {
  constructor(w,playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 15; //
    this.h = this.w * 3;
    this.enemyW = 80;
    this.enemyH = 80;
    this.dx = 12;
    this.x = w;
    this.y = playerY + playerH - this.h - 2;
    this.posY = 500
    
    //imagen del gorila:
    this.imgEnemy = new Image();
    this.imgEnemy.src = "img/firegood.png";

  }

  draw() {

    this.ctx.drawImage(
      this.imgEnemy,
      this.x, //donde ponerlo inicio (x, y)
      this.y -200,
      120,
      340
    )
  }

  move() {
    this.x -= this.dx;
  }
}



// class Obstacle {
//   constructor(w, playerY, playerH, ctx) {
//     this.ctx = ctx;
//     this.w = 15;
//     this.h = this.w * 5;
//     this.dx = 10;
//     this.x = w;
//     this.y = playerY + playerH - this.h - 5;
//   }

//   draw() {
//     this.ctx.fillStyle = "red";
//     this.ctx.fillRect(this.x, this.y, this.w, this.h);
//   }

//   move() {
//     this.x -= this.dx;
//   }
// }
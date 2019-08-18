class RandomObstacle {
  constructor(w, playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 148;
    this.h = 100;
    this.dx = 10;
    this.x = w;
    this.y = this.getRandomInt(100, 150)
    // this.y = (playerY + playerH - this.h + 5) + this.getRandomInt(-100, 150)
    this.img = new Image();
    this.img.src = "img/gorila.png";
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  draw = () => {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }
  move = () => {
    this.x -= this.dx;
  }
}

class RandomImpObs {
  constructor(w, playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 90;
    this.h = this.w;
    this.dx = 10;
    this.x = w;
    this.y = this.getRandomInt(400, 600)
    this.img = new Image();
    this.img.src = "img/Banana_Coin.png";
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
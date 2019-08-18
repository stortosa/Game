
class Background {
  constructor() {
    this.w = w
    this.h = h
    this.ctx = ctx
    this.canvas = ""
    this.imgBack = new Image()
    this.imgBack.src = "img/backgroundFinal.png"
    this.imgBackX = 0
    this.imgBackY = 0
    this.imgBackDx = 10 //para movimiento

    this.imgNave = new Image()
    this.imgNave.src = "img/nave.jpg"
    this.imgNaveX = 20
    this.imgNaveY = 50
    this.naveDx = 8  //para movimiento

    this.imgTron = new Image()
    this.imgTron.src = "/img/tron.jpg"
    this.imgTronX = 0
    this.imgTronY = 0
    this.tronDx = 8  //para movimiento

    this.imgEaster = new Image()
    this.imgEaster.src = "img/easterEgg.jpg"
    this.imgEasterX = 200
    this.imgEasterY = 300
  }

  draw = () => {
    this.drawBack()
    this.drawNave()
    this.drawTron()
    this.drawEaster()
    this.moveBack()
    this.moveNave()
    this.moveTron()
  }

  drawBack = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#canvas");
    /** @type CanvasRenderingContext2D */
    this.ctx = this.canvas.getContext("2d");
    // this.ctx.drawImage(this.imgBack, 0, 0, w, h);
    this.ctx.drawImage(
      this.imgBack,
      this.x,
      this.y - 300,
      10000,
      this.h + 300
    )
  }

  drawNave = () => {
    this.ctx.drawImage(this.imgNave, this.imgNaveX, this.imgNaveY, 100, 50);
    this.ctx.drawImage(this.imgNave, this.imgNaveX, this.imgNaveY + this.h, 100, 50);
  }

  drawTron = () => {
    this.ctx.drawImage(this.imgTron, this.imgTronX + 800, this.imgTronY, 200, 100);
    this.ctx.drawImage(this.imgTron, this.imgTronX + 800, this.imgTronY + this.h, 200, 100);

  }

  drawEaster = () => {
    this.ctx.drawImage(this.imgEaster, this.imgEasterX, this.imgEasterY, 800, 400);
    this.ctx.drawImage(this.imgEaster, this.imgEasterX, this.imgEasterY + this.h, 800, 400);
  }

  //poniendo movimiento:
  moveBack = () => {
    this.imgBackX -= this.imgBackDx;

    // o : 
    //   this.imgBackX -= this.imgBackDx;

    //   if (this.imgBackX < -this.w) this.imgBackX = 0;
    // }

    //o :
    // this.imgBackX += this.imgBackDx;

    // if (this.imgBackX > 0) {
    //   this.imgBackX = 0
    // }
  }
  moveNave = () => {
    this.imgNaveX += this.naveDx;
  }

  moveTron = () => {
    this.imgTronX -= this.tronDx;
  }
}
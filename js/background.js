class Background {
  constructor(w, h, ctx) {
    this.w = w
    this.h = h
    this.ctx = ctx
    // this.canvas = ""
    // this.imgBack =     
    this.imgBackgroundFinal = new Image();
    this.imgBackgroundFinal.src = "Background/backgroundFinal.png";
    // this.imgBack.src = "img/backgroundFinal.png"
    //si poner el background unificado recuerda tocar los parametro de move y draw
    //y alargar la imagen
    this.imgBackX = 0
    this.imgBackY = 0
    this.imgBackDx = 10 //para movimiento 4

    this.imgNave = new Image()
    this.imgNave.src = "img/falcon.png"
    this.imgNaveX = 10
    this.imgNaveY = 80
    this.naveDx = 3  //para movimiento

    this.imgTron = new Image()
    this.imgTron.src = "img/tronbike2.png"
    this.imgTronX = 900
    this.imgTronY = 300
    this.tronDx = 7  //para movimiento

    this.imgEaster = new Image()
    this.imgEaster.src = "img/easterEgg.jpg"
    this.imgEasterX = 200
    this.imgEasterY = 300
  }

  draw = () => {
    this.drawBack()
    this.drawNave()
    // this.drawNave2()
    // this.drawNave3()
    this.drawTron()
    // this.drawEaster()
    // this.moveBack()
    this.moveNave()
    this.moveNave2()
    this.moveNave3()
    this.moveTron()
    //
    this.moveLeft()
    this.moveRight()
    this.move()
  }

  drawBack = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#canvas");
    /** @type CanvasRenderingContext2D */
    this.ctx = this.canvas.getContext("2d");
    //
    // this.ctx.drawImage(this.imgBackgroundFinal, 0, 0, w, h);
    //

    // this.ctx.drawImage(
    //   this.imgBack,
    //   this.imgBackX,
    //   this.imgBackY - 200,
    //   this.w + 600,
    //   this.h + 200
    // );
    // this.ctx.drawImage(
    //   this.imgBack,
    //   this.imgBackX + this.w,
    //   this.imgBackY - 200,
    //   this.w + 600,
    //   this.h + 200
    // );
  }

  drawNave = () => {
    this.ctx.drawImage(this.imgNave, this.imgNaveX, this.imgNaveY, 100, 50);
    this.ctx.drawImage(this.imgNave, this.imgNaveX, this.imgNaveY + this.h, 100, 50);
  }

  drawTron = () => {
    this.ctx.drawImage(this.imgTron, this.imgTronX + 500, this.imgTronY, 100, 60);
    this.ctx.drawImage(this.imgTron, this.imgTronX + 500, this.imgTronY + this.h, 100, 60);

  }

  drawEaster = () => {
    if (this.scoreBoard = 200) {
      this.ctx.drawImage(this.imgEaster, this.imgEasterX, this.imgEasterY, 800, 400);
      this.ctx.drawImage(this.imgEaster, this.imgEasterX, this.imgEasterY + this.h, 800, 400);
    }
  }


  // nuevo para mover el background:
  moveLeft() {
    this.imgBackX -= this.imgBackDx;
  }

  moveRight() {
    this.imgBackX += this.imgBackDx;

    if (this.imgBackX > 0) {
      this.imgBackX = 0
    }
  }

  move() {
    this.imgBackX -= this.imgBackDx;
  }

  // hasta aqui
  moveNave = () => {
    this.imgNaveX += this.naveDx;
  }

  moveNave2 = () => {
    this.imgNaveX += this.naveDx;
  }

  moveNave3 = () => {
    this.imgNaveX += this.naveDx;
  }

  moveTron = () => {
    this.imgTronX -= this.tronDx;
  }
}
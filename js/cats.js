//creando el protagonista

class Cat {
  constructor(ctx, x, y, catSpeed, wCanvas, framesCounter) {  //keys
    this.x = x
    this.y = y
    this.ctx = ctx;
    this.wCanvas = wCanvas;
    this.framesCounter = framesCounter
    this.catW = 148;
    this.catH = 100;
    this.x0 = 20 // para avanzar el muñeco en pixeles
    this.posY = 20;
    this.cFrame = 0;
    this.gravity = 0.4;
    this.catSpeed = catSpeed;

    //imagen del gorila:
    this.imgCat = new Image();
    this.imgCat.src = "img/donkeycolgao.png";

    // número de imágenes diferentes
    this.imgCat.frames = 31;
    this.imgCat.frameIndex = 0;

    this.vel0 = 0;
    this.velY = this.vel0;

    // this.velJump = 10;


    this.frameWidthTotal = 1045;
    // this.frameWidth = this.frameWidthTotal / 5;
    this.frameHeightTotal = 90;

  }

  move() {
    this.x -= 15
    if(this.x < 0){
      this.x = 1000
    }
  }

  draw() {
    
    this.ctx.drawImage(
      this.imgCat,
      this.imgCat.frameIndex * Math.floor(this.imgCat.width / this.imgCat.frames), //this.cFrame,,
      0,
      34,//100,
      80,//100,
      this.x, //donde ponerlo inicio (x, y)
      this.y -20,
      70,
      200
    )
    this.animateImgCat()
  }

  animateImgCat() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.framesCounter % 10 === 0) {
      this.imgCat.frameIndex += 1;
      // Si el frame es el último, se vuelve al primero
      if (this.imgCat.frameIndex > 30) this.imgCat.frameIndex = 0;
    }
  }
}
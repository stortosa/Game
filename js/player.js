class Player {
  constructor(w, h, ctx) {
    this.canvasW = w
    this.canvasH = h
    this.ctx = ctx
    this.keyRight = 39;
    this.keyLeft = 37;
    // this.keyJump = 32;
    this.keys = {
      // arrowUp: 38,
      spaceBar: 32,
      right: false,
      left: false,
      jump: false
    }
    this.x = this.canvasW * 0.08
    this.posX = 80;
    // guardar posición original (suelo)
    this.y0 = this.canvasH * 0.8;
    this.y = this.y0;
    this.vy = 1;
    this.posY = this.y0;

    this.img = new Image();
    this.img.src = "img/ProtaDefinitivo.png";

    // número de imágenes diferentes
    this.img.frames = 5;
    this.img.frameIndex = 0;

    // medidas de la imagen a representar en el canvas
    this.w = 63;
    this.h = 93;

    this.bullets = [];

    this.setListeners();
  }

    // new to player moving:

    moveRight() {
      this.keys.right = true;
      this.keys.left = false;
      this.posX += 40;
  
      this.animateImg(framesCounter)
      if (this.posX > 700) { //limitano el movimiento en la pantalla
        this.posX = 700
      }
    }
    moveLeft() {
      this.keys.left = true;
      this.keys.right = false;
      // this.keys.jump = false;
      this.posX -= 40;
      if (this.posX < 40) {
        this.posX = 40
      }
  
      this.animateImg(framesCounter)
      if (this.posX < 0) { //limitano el movimiento en la pantalla
        this.posX = 0
      }
    }
    moveJump() {
      let sense = -1
  
      const intervalID = setInterval(() => {
        this.posY += (10 * sense)
  
        if (this.posY < this.maxYWhenJumping) {
          sense = 1
        }
  
        if (this.posY === 500) {
          clearInterval(intervalID)
        }
  
      }, 10)
    }
    // hasta aqui DELETE
  drawPlayer = (framesCounter) => {
    // this.setListeners();

    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.posX,
      this.y,
      this.w,
      this.h
    );

    this.animateImg(framesCounter);
  }

  animateImg = (framesCounter) => {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 5 === 0) {
      this.img.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 4) this.img.frameIndex = 0;
    }
  }

  // setListeners = () => {
  //   document.onkeydown = function (event) {
  //     if (event.keyCode === this.keys.arrowUp && this.y == this.y0) {
  //       this.y -= 7;
  //       this.vy -= 11;

  //     } else if (event.keyCode == this.keys.spaceBar) {

  //       this.shoot();
  //     }
  //   }.bind(this);
  // }

  setListeners = () => {
    document.onkeydown = function (event) {
      if (event.keyCode == this.keys.spaceBar) {
        this.shoot();
      }
    }.bind(this);
  }

  shoot = () => {
    var bullet = new Bullet(
      this.x + this.w,
      this.y + this.h / 2,
      this.y0,
      this.h,
      this.ctx
    );

    this.bullets.push(bullet);
  }

  drawBullet = () => {
    this.bullets = this.bullets.filter(bullet => {
      return bullet.x < this.canvasW;
    });

    this.bullets.forEach(function (bullet) {
      bullet.draw();
      bullet.move();
    });
  }

  movePlayer = () => {
    // Aumenta la velocidad en el eje y.
    var gravity = 0.4;

    // solo salta cuando el personaje está en el suelo
    if (this.y >= this.y0) {
      this.vy = 1;
      this.y = this.y0;
    } else {
      this.vy += gravity;
      this.y += this.vy;
    }
  }
}
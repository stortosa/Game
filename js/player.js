class Player {
  constructor(w, h, ctx) {
    this.canvasW = w
    this.canvasH = h
    this.ctx = ctx
    this.keys = {
      arrowUp: 38,
      spaceBar: 32,
    }
    this.x = this.canvasW * 0.08

    // guardar posición original (suelo)
    this.y0 = this.canvasH * 0.8;
    this.y = this.y0;
    this.vy = 1;

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

  drawPlayer = (framesCounter) => {
    // this.setListeners();

    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
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

  setListeners = () => {
    document.onkeydown = function (event) {
      console.log("kkkkkkkkkkkkkkkkkkkkkkk")
      if (event.keyCode === this.keys.arrowUp && this.y == this.y0) {
        console.log("sisisisissi")
        this.y -= 7;
        this.vy -= 11;
        console.log("llllllllllllllllll")

      } else if (event.keyCode == this.keys.spaceBar) {
        console.log("firefire"),

          this.shoot();
      }
    }.bind(this);
  }

  // setListeners = () => {
  //   document.onkeydown = (e) => {
  //     e.preventDefault();
  //     switch (e.keyCode) {
  //       case 38:
  //         if (this.y == this.y0) {
  //           console.log("SSSSAAAALLLLLLLTTTTTTAAAAA")
  //           this.y -= 80
  //           this.vy -= 15
  //           console.log("llllllllllllllllll")
  //         }
  //         break;
  //       case 32:
  //         this.shoot()
  //         console.log("FFIIIIIRRRREEEE")
  //         break;
  //     }
  //   }
  // }

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
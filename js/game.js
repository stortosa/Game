// let background = new Background

class Game {
  constructor() {
    this.canvasDOMEl = undefined;
    this.ctx = undefined;
    this.canvasW = 1400;
    this.canvasH = 600;
    this.framesCounter = 0;
    this.intervalId = undefined;
    this.counter = 0;
    this.keys = {
      arrowUp: 38,
      spaceBar: 32,
    }
    this.obstacles = []
    this.randomObstacles = []
    this.randomImpObs = []
    this.destroyedObstacle = null
    this.destroyedBullet = null
  }

  init = (id) => {
    this.canvasDOMEl = document.getElementById(id)
    this.ctx = this.canvasDOMEl.getContext("2d")
    this.canvasDOMEl.setAttribute("height", this.canvasH);
    this.canvasDOMEl.setAttribute("width", this.canvasW)
    this.start()
  }

  start = () => {
    this.disableButton()
    this.fps = 60;
    this.reset();
    this.intervalId = setInterval(() => {
      this.clear();
      this.framesCounter++;
      if (this.framesCounter > 3500) {
        this.framesCounter = 0;
      }
      if (this.framesCounter % 100 === 0) this.generateObstacle();
      if (this.framesCounter % 100 === 0) this.generateRandomObstacle();
      if (this.framesCounter % 100 === 0) this.generateRandomImpObs();


      this.drawAll();
      this.moveAll();
      // this.setListeners();
      this.clearObstacles();

      if (this.isCollisionObstacle()) {
        this.gameOver();
      }
      if (this.isBulletCollision()) {
        this.destroyrandomObs()
        this.destroyBullet()
      };
      if (this.framesCounter % 30) {
        this.scoreBoard.increaseScore()
      }

    }, 1000 / this.fps)
  }

  stop = () => {
    clearInterval(this.intervalId)
  }

  gameOver = () => {
    this.stop();

    if (confirm("GAME OVER. Play again ape?")) {
      this.reset();
      this.start();
    }
  }

  reset = () => {
    this.background = new Background(this.canvasW + 500, this.canvasH, this.ctx);
    this.player = new Player(this.canvasW, this.canvasH, this.ctx);
    this.scoreBoard = new scoreBoard(this.ctx);
    this.obstacles = []
    this.randomObstacles = []
    this.randomImpObs = []
    this.player.bullets = []
  }

  isCollisionObstacle = () => {
    return this.obstacles.some(obstacle => {
      return (
        this.player.x + this.player.w - 20 >= obstacle.x &&
        this.player.x + 10 <= obstacle.x + obstacle.w &&
        this.player.y + this.player.h - 5 >= obstacle.y &&
        this.player.y <= obstacle.y + obstacle.h - 30
      )
    })
  }

  isCollisionrandomObstacle = () => {
    return this.randomObstacles.some(obstacle => {
      return (
        this.player.x + this.player.w - 15 >= obstacle.x &&
        this.player.x + 50 <= obstacle.x + obstacle.w &&
        this.player.y + (this.player.h + 15) >= obstacle.y &&
        this.player.y <= obstacle.y + obstacle.h - 40
      )
    })
  }

  isCollisionrandomImpObs = () => {
    return this.randomImpObs.some(obstacle => {
      return (
        this.player.x + this.player.w - 40 >= obstacle.x &&
        this.player.x + 100 <= obstacle.x + obstacle.w &&
        this.player.y + (this.player.h) >= obstacle.y &&
        this.player.y <= obstacle.y + obstacle.h - 50
      )
    })
  }

  isBulletCollision = () => {
    return this.randomObstacles.some(obstacle => {
      for (let i = 0; i < this.player.bullets.length; i++) {
        return (
          this.player.bullets[i].x + (this.player.bullets[i].r * 3) >= obstacle.x &&
          this.player.bullets[i].x <= obstacle.x + obstacle.w + 10 &&
          this.player.bullets[i].y + (this.player.bullets[i].r * 3) >= obstacle.y &&
          this.player.bullets[i].y <= obstacle.y + obstacle.h + 10
        )
      }
    })
  }

  isBulletCollision = () => {
    return this.randomObstacles.some(obstacle => {
      for (let i = 0; i < this.player.bullets.length; i++) {
        return (
          this.player.bullets[i].x + (this.player.bullets[i].r * 3) >= obstacle.x &&
          this.player.bullets[i].x <= obstacle.x + obstacle.w + 10 &&
          this.player.bullets[i].y + (this.player.bullets[i].r * 3) >= obstacle.y &&
          this.player.bullets[i].y <= obstacle.y + obstacle.h + 10
        )
      }
    })
  }

  destroyObs = () => {
    this.randomObstacles.forEach((obstacle, idx) => {
      if (this.isBulletCollision()) {
        this.destroyedObstacle = idx
        obstacle.destroyrandomObs()
      }
    }
    )
    this.player.bullets.forEach((bullet, idx) => {
      if (this.isBulletCollision()) {
        this.destroyedBullet = idx
        bullet.destroyBullet()
      }
    })
  }

  destroyrandomObs = () => {
    this.randomObstacles.splice(this.destroyedObstacle, 1)
  }

  destroyBullet = () => {
    this.player.bullets.splice(this.destroyedBullet, 1)
  }

  drawAll = () => {
    this.background.draw()

    this.player.drawPlayer(this.framesCounter)
    this.player.drawBullet()
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    })
    this.randomObstacles.forEach((obstacle) => {

      obstacle.draw();

    })
    this.randomImpObs.forEach((obstacle) => {
      obstacle.draw();
    })
    
    this.scoreBoard.drawScoreBoard()
    // this.scoreBoard.drawScoreMssg()
  }

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
  }

  moveAll = () => {
    this.background.moveBack()
    this.background.moveNave()
    this.background.moveTron()

    this.player.setListeners()
    this.player.movePlayer()

    this.obstacles.forEach((obstacle) => {
      obstacle.move()
    });
    this.randomObstacles.forEach((obstacle) => {
      obstacle.move()
    });
    this.randomImpObs.forEach((obstacle) => {
      obstacle.move()
    });
  }

  clearObstacles = () => {
    this.obstacles = this.obstacles.filter((obstacle) => {
      return obstacle.x >= 0;
    })
    this.randomObstacles = this.randomObstacles.filter((obstacle) => {
      return obstacle.x >= 0
    })
    this.randomImpObs = this.randomImpObs.filter((obstacle) => {
      return obstacle.x >= 0
    })
  }

  generateObstacle = () => {
    this.obstacles.push(
      new Obstacle(this.canvasW, this.player.y0, this.player.h, this.ctx)
    );
  }

  generateRandomObstacle = () => {
    this.randomObstacles.push(
      new RandomObstacle(this.canvasW, this.player.y0, this.player.h, this.ctx)
    );
  }

  generateRandomImpObs = () => {
    this.randomImpObs.push(
      new RandomImpObs(this.canvasW, this.player.y0, this.player.h, this.ctx)
    );
  }

  disableButton = () => {
    document.getElementById("start-button").style.display = "none";
  }
}
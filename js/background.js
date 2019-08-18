
class Background {
  constructor(){
    this.w = w
    this.y = y
    this.ctx = ctx 
    this.canvas = ""
    this.imgBack = new Image()
    this.imgBack.src = "img/backgroundFinal.png"
    this.imgBack.x = 0
    this.imgBack.y = 0
    this.imgBack.dx = 10 //para movimiento

    this.imgNave = new Image()
    this.imgNave.src = "img/nave.jpg"
    this.imgNave.x = 20
    this.imgNave.y = 50
    this.naveDx = 10  //para movimiento

    this.imgTron = new Image()
    this.imgTron.src = "/img/tron.jpg"
    this.imgTron.x = 0
    this.imgTron.y = 0
    this.tronDx = 10  //para movimiento

    this.imgEaster = new Image()
    this.imgEaster.src = "img/easterEgg.jpg"
    this.imgEaster.x = 200
    this.imgEaster.y = 300
  }
}
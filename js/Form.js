class Form {

  constructor() {
    this.welcomeBG = "images/bg.jpg";
    this.welcome = createImg(this.welcomeBG)
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.welcome.hide();
  }

  display(){
    this.welcome.position(0,0,windowWidth,windowHeight);
    this.input.position(windowWidth/2 - 40 , windowHeight/2 - 80);
    this.button.position(windowWidth/2 - 30, windowHeight/2);
    this.reset.position(windowWidth-250,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name+ "!");
      this.greeting.position(windowWidth/2 - 70, windowHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      var playerInfoRef = database.ref('players');
      playerInfoRef.remove();
      Player.updateCarsAtEnd(0);
          })
  }
}

class Form {
  constructor() {
    this.titleImg = createImg(
      "../Multiplayer-v4-stage-1-activity-main/assets/title.png",
      "Game Title"
    );
    this.inputbox = createInput("").attribute("placeholder", "Enter Your Name");
    this.button = createButton("Play");
    this.greeting = createElement("h2");
  }

  setPosition() {
    this.titleImg.position(width / 3 - 380, height / 2 - 300);
    this.inputbox.position(width / 2 - 130, height / 2);
    this.button.position(width / 2 - 110, height / 2 + 100);
    this.greeting.position(width / 2, height / 2);
  }

  setStyle() {
    this.titleImg.class("gameTitle");
    this.inputbox.class("customInput");
    this.button.class("customButton");
    this.greeting.class("greeting");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.inputbox.hide();
  }

  handleMousedpressed() {
    this.button.mousePressed(() => {
      this.inputbox.hide();
      this.button.hide();
      var message = `Hello ${this.inputbox.value()}
<br/> waiting for other player...`;
      this.greeting.html(message);
      myPlayerCount += 1;
      myPlayer.updateCount(myPlayerCount);
      

      myPlayer.name=this.inputbox.value()
      myPlayer.index=myPlayerCount
      myPlayer.addPlayers()
      myPlayer.getDistance()
    
    
    });
  }

  display() {
    this.setPosition();
    this.setStyle();
    this.handleMousedpressed();
  }
}

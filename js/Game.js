class Game {
  constructor() {}

  getState() {
    var stateInfo = database.ref("gameState");
    stateInfo.on("value", (data) => {
      myGameState = data.val();
    });
    console.log(myGameState);
  }

  updateState(stateNumber) {
    database.ref("/").update({
      gameState: stateNumber,
    });
  }

  start() {
    myForm = new Form();
    myForm.display();
    myPlayer = new Player();
    myPlayer.getCount();

    car1 = createSprite(width / 2 - 50, height - 10);
    car1.addImage("car1", car1Img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 10);
    car2.addImage("car2", car2Img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  play() {
    myForm.hide();
    myForm.titleImg.position(40, 80);
    myForm.titleImg.class("chageTitle");
    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      // image(nameImage,x,y,w,h)
      image(trackImg, 0, -height * 5, width, height * 6);
      var index = 0;

      for (var i in allPlayers) {
        index = index + 1;

        var x = allPlayers[i].positionX;
        var y = height-allPlayers[i].positionY

        // index=1 cars[1-1]= cars[0]= car1
        //  index=2 cars[2-1]= cars[1]= car2
        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === myPlayer.index) {
          stroke("red");
          strokeWeight(4);
          fill("black");
          ellipse(x, y, 60, 60);
          //camera.position.x = cars[index - 1].position.x;
          camera.position.y = cars[index - 1].position.y;
        }
      }
    }

    if (keyDown("up")) {
      myPlayer.positionY -= 10;
      myPlayer.updatePlayerInfo();
    }

    drawSprites();
  }

  end() {}
}

class game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form1 = new form()
      form1.display();
    }
  }

  play(){
    form1.hide();

    Player.getPlayerInfo();

    
    if(allPlayers !== undefined){
      //var display_position = 100;
    //background(groundImg);
     //image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 180;
      var y;
      drawSprites();
      
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 220;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }*/

  }
  end(){
    console.log("game has ended");
  }
}

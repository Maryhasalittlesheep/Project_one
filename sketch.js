//variable for draw.functions
var drawFunction;

var midX = 1300/2

var midY = 700/2;

var eggshell;

var eggyellowX = 489;

var eggyellowY = 239;

//Preload items goes here
function preload(){
	//load images
	Home = loadImage('asserts/homepage.png');
	Intro = loadImage('asserts/introduction.png');
	Prep = loadImage('asserts/preparation.png');
	Stage1 = loadImage('asserts/stageone.png');
	eggyellow = loadImage('asserts/eggyellow.png');
	bowl = loadImage('asserts/bowl.png');
	mixture = loadImage('asserts/mixture.png');
	mixer = loadImage('asserts/mixer.png');
	moldfore = loadImage('asserts/moldforepart.png');
	mold = loadImage('asserts/mold.png');

	font=loadFont('asserts/museo.ttf');
}
// Setup code goes here
function setup() {
  createCanvas(1300, 700);

  textAlign(CENTER);
  textFont(font);
  textSize(30);

  noStroke();
  ellipseMode(CORNER);
  drawFunction = drawHomepage
 }


// Draw code goes here
function draw() {
  background(150);

  drawFunction();

  print(mouseX, mouseY);
}


//pages function goes here
drawHomepage = function(){
    image(Home, 0, 0);

    fill(97, 108, 133);
    text('Click anywhere to continue', midX, 35);
}

drawIntroduction = function(){
	image(Intro, 0, 0);

    fill(97, 108, 133);
    text('Press S to start', midX, 35);
}

drawPreparation = function(){
	image(Prep, 0, 0);

    fill(97, 108, 133);
    text('Press N to continue', 200, 35);
}

//spreate the eggyellow
drawStageOne = function(){
	image(Stage1, 0, 0);

    fill(97, 108, 133);
    textSize(50);
    text('Stage One', midX, 50);

    image(eggyellow, 600, 380);


    noCursor();
    cursor(HAND);
}

//egg whisk
drawStageTwo = function(){
	image(Stage1, 0, 0);

    fill(97, 108, 133);
    textSize(50);
    text('Stage Two', midX, 50);


}

//egg whisk
drawStageThree = function(){

    fill(97, 108, 133);
    textSize(50);
    text('Stage Three', midX, 50);
}

//added seasoning
drawStageFour = function(){
	image(bowl, 0, 0);

    fill(97, 108, 133);
    textSize(50);
    text('Stage Four', midX, 50);

}

drawStageFour2 = function(){
	image(bowl, 0, 0);
    image(mixture, 0, 0);

    fill(97, 108, 133);
    textSize(50);
    text('Stage Four', midX, 50);
}

//mixed
drawStageFive = function(){
	image(mixture, 0, 0);

    fill(97, 108, 133);
    textSize(50);
    text('Stage Five', midX, 50);

    var mixerX ;
    if (mouseX < 396){
    	mixerX = 396;
    }
    else if (mouseX > 750){
    	mixerX = 750;
    }
    else{
    	mixerX = mouseX;
    }

    var mixerY ;
    if (mouseY < 101){
    	mixerY = 101;
    }
    else if (mouseY > 292){
    	mixerY = 292;
    }
    else{
    	mixerY = mouseY;
    }
    image(mixer, mixerX, mouseY);
}

//filling the cake batter
drawStageSix = function(){
	background(255, 244, 207);
    fill(97, 108, 133);
    textSize(50);
    text('Stage Six', midX, 50);

    image(mold, midX-196.5, midY-127);

    var ellipseH = 0
    fill(244, 243, 205);
    ellipse(465, 265, 371, 200);

    if ( mouseIsPressed === true){
    	if (ellipseH < 200){
    		ellipseH = ellipseH + 5;
    	}
    }

   image(moldfore, midX-196.5, midY-127);
}

//select you favor topings 
drawStageSeven = function(){

    fill(97, 108, 133);
    textSize(50);
    text('Stage Seven', midX, 50);
}

//splash to introduction
function mousePressed() {
  // splash to introdction 
  if( drawFunction === drawHomepage ) {
    drawFunction = drawIntroduction;
  }

  //added seasoing into the bowl
  else if( drawFunction === drawStageFour ){
 	drawFunction = drawStageFour2;
  }

  else if( drawFunction === drawStageFour2 ){
 	drawFunction = drawStageFive;
  }
}


function keyTyped() {
  if( drawFunction === drawHomepage ) {
    return;
  }

  if( drawFunction === drawIntroduction){
  	if( key === 's' ) {
  		drawFunction = drawPreparation;
  	}
  }

  if( drawFunction === drawPreparation){
  	if( key === 'n' ) {
  		drawFunction = drawStageOne;
  	}
  	if( key === '4' ) {
  		drawFunction = drawStageFour;
  	}
  	if( key === '5' ) {
  		drawFunction = drawStageFive;
  	}
  	if( key === '6' ) {
  		drawFunction = drawStageSix;
  	}
  }


}

//having trouble
function mouseDragged() {
  if( drawFunction === drawStageOne){
  	eggyellowX = eggyellowX + 5;
  	eggyellowY = eggyellowY + 5;
  	}
}


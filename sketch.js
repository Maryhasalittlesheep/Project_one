//global variable for draw.functions
var drawFunction;

var midX = 1300/2

var midY = 700/2;

var ellipseH = 0;

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
	sugarwhite = loadImage('asserts/stagetwosugar.png');
	eggwhitestage = loadImage('asserts/stagetwo.png');
	eggwhitestage1 = loadImage('asserts/stagetwo1.png');
	eggwhitestage2 = loadImage('asserts/stagetwo2.png')
	eggwhitestage3 = loadImage('asserts/stagetwo3.png')
	oven = loadImage('asserts/stagesix.png');
	ovenWbatter = loadImage('asserts/stagesix2.png');
	finalstage = loadImage('asserts/stageseven.png')

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

//introduction pages
drawIntroduction = function(){
	image(Intro, 0, 0);

    fill(97, 108, 133);
    text('Press S to start', midX, 35);
}

//showing the equiment and ingredients
drawPreparation = function(){
	image(Prep, 0, 0);

    fill(97, 108, 133);
    text('Press N to continue', midX, 35);
}

//spreate the egg yolk from white
drawStageOne = function(){
	image(Stage1, 0, 0);
    image(eggyellow, mouseX -40 , mouseY - 40);

	//text codes goes here
    fill(97, 108, 133);
    textSize(50);
    text('Stage One', midX, 50);

    textSize(30);
    text('Remember to separate', 223, 193);
    text('the yolk from the white', 223, 225);
    text('Press N to continue', midX, 640);

    textSize(15);
    text('Move your mouse to remove the egg yolk', 223, 405);

    //mocing the egg yolk
    noCursor();
    cursor(HAND);
}

//add sugar
drawStageTwo = function(){
	image(Stage1, 0, 0);

	//text codes goes here
    fill(97, 108, 133);
    textSize(30);
    text('Click to add sugar', 223, 193);

    textSize(50);
    text('Stage Two', midX, 50);

}

//sugar added
drawStageTwo2 = function(){
	image(sugarwhite, 0, 0);

    fill(97, 108, 133);
    textSize(30);
	text('Press N to continue', midX, 640);

    textSize(50);
    text('Stage Two', midX, 50);
}

//whisk egg
drawStageTwo3 = function(){
	image(eggwhitestage, 0, 0);

    fill(97, 108, 133);
    textSize(30);
    text('Press 1-3 to check the stage for whisking egg white', midX, 193);

    textSize(50);
    text('Stage Two', midX, 50);
}
//egg whisking stage 1
drawStageTwo31 = function(){
	image(eggwhitestage1, 0, 0);

    fill(97, 108, 133);
    textSize(30);
    text('Press 1-3 to check the stage for whisking egg white', midX, 193);

    textSize(50);
    text('Stage Two', midX, 50);
}
//egg whisking stage 2
drawStageTwo32 = function(){
	image(eggwhitestage2, 0, 0);

    fill(97, 108, 133);
    textSize(30);
    text('Press 1-3 to check the stage for whisking egg white', midX, 193);

    textSize(50);
    text('Stage Two', midX, 50);
}
//egg whisking stage 3
drawStageTwo33 = function(){
	image(eggwhitestage3, 0, 0);

    fill(97, 108, 133);
    textSize(30);
    text('Press 1-3 to check the stage for whisking egg white', midX, 193);
	text('Press N to continue', midX, 640);

    textSize(50);
    text('Stage Two', midX, 50);
}


//added seasoning
drawStageThree = function(){
	image(bowl, 0, 0);

    fill(97, 108, 133);
    textSize(30);
    text('Click to added the important ingredients',midX , 193);
    text('milk', 223, 263);
    text('butter', 223, 303);
    text('cake flour', 223, 343);
    text('sugar', 223, 383);


    textSize(50);
    text('Stage Three', midX, 50);

}

drawStageThree2 = function(){
	image(bowl, 0, 0);
    image(mixture, 0, 0);

    //text code goes here
    fill(97, 108, 133);
    textSize(30);
	text('Press N to continue', midX, 640);

    textSize(50);
    text('Stage Three', midX, 50);
}

//mixed
drawStageFour = function(){
	image(mixture, 0, 0);

    fill(97, 108, 133);
    textSize(30);
    text('Movie your mouse to play with Mixer', midX,193);
	text('Press N to continue', midX, 640);

    textSize(50);
    text('Stage Four', midX, 50);

    //play with mixer
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
drawStageFive = function(){
	background(255, 244, 207);

	//text code goes here
    fill(97, 108, 133);
    textSize(30);
    text('Pressed to fill the mold with batter', midX, 193);
	text('Press N to continue', midX, 640);

    textSize(50);
    text('Stage Five', midX, 50);

    image(mold, midX-196.5, midY-127);

    fill(244, 233,175);
    ellipse(465, 265, 371, ellipseH);

    if (mouseIsPressed === true ){
    	if (ellipseH < 200){
    	ellipseH = ellipseH + 5;
    	}
    }

   image(moldfore, midX-196.5, midY-127);
}

//put the batter in oven
drawStageSix = function(){
	image(oven, 0, 0);

	//text goes here
    fill(97, 108, 133);
    textSize(30);
    text('Click to put the filled mold into the oven', midX, 193);

    textSize(50);
    text('Stage Six', midX, 50);
}

drawStageSix2 = function(){
	image(ovenWbatter, 0, 0);

	//text goes here
    fill(97, 108, 133);
    textSize(30);
	text('Press N to continue', midX, 640);

    textSize(50);
    text('Stage Six', midX, 50);
}
//Final stage 
drawStageSeven = function(){
	image(finalstage, 0, 0);

	//text goes here
    fill(97, 108, 133);
    textSize(30);
    text('And then here is a prefect Chiffon Cake', midX, 193);
    text('You can add any toping and favor you like', midX, 233);
	text('Press B to back to Home page', midX, 640);
	
    textSize(50);
    text('Stage Seven', midX, 50);
}
//splash to introduction
function mousePressed() {
  // splash to introdction 
  if( drawFunction === drawHomepage ) {
    drawFunction = drawIntroduction;
  }

  else if( drawFunction === drawStageTwo ){
 	drawFunction = drawStageTwo2;
  }

  //added seasoing into the bowl
  else if( drawFunction === drawStageThree ){
 	drawFunction = drawStageThree2;
  }

  //out the batter in the oven
  else if( drawFunction === drawStageSix ){
 	drawFunction = drawStageSix2;
  }
}


function keyTyped() {
  if( drawFunction === drawHomepage ) {
    return;
  }
  //intro to pre screen
  if( drawFunction === drawIntroduction){
  	if( key === 's' ) {
  		drawFunction = drawPreparation;
  	}
  }
  //pre to stage one
  else if( drawFunction === drawPreparation){
  	if( key === 'n' ) {
  		drawFunction = drawStageOne;
  	}
  }

  //stage one to stage two
  else if( drawFunction === drawStageOne){
  	if( key === 'n' ) {
  		drawFunction = drawStageTwo;
  	}
  }

  //stage two to stage two-whisk egg
  else if( drawFunction === drawStageTwo2){
  	if( key === 'n' ) {
  		drawFunction = drawStageTwo3;
  	}
  }

  //egg whisk stage main page
  else if( drawFunction === drawStageTwo3){
  	if( key === '1' ) {
  		drawFunction = drawStageTwo31;
  	}
  	else if( key === '2' ) {
  		drawFunction = drawStageTwo32;
  	}
  	else if( key === '3' ) {
  		drawFunction = drawStageTwo33;
  	}
  }

  //able to switch page
  else if( drawFunction === drawStageTwo31){ 
  	if( key === '2' ) {
  		drawFunction = drawStageTwo32;
  	}
  	else if( key === '3' ) {
  		drawFunction = drawStageTwo33;
  	}
  }

  //able to switch page
  else if( drawFunction === drawStageTwo32){ 
  	if( key === '1' ) {
  		drawFunction = drawStageTwo31;
  	}
  	else if( key === '3' ) {
  		drawFunction = drawStageTwo33;
  	}
  }

  //able to switch page
  else if( drawFunction === drawStageTwo33){ 
  	if( key === '1' ) {
  		drawFunction = drawStageTwo31;
  	}
  	else if( key === '2' ) {
  		drawFunction = drawStageTwo32;
  	}
  	else if( key === 'n' ) {
  		drawFunction = drawStageThree;
  	}
  }
  //stage three to four
  else if( drawFunction === drawStageThree2){
  	if( key === 'n' ) {
  		drawFunction = drawStageFour;
  	}
  } 

  //stage four to five
  else if( drawFunction === drawStageFour){
  	if( key === 'n' ) {
  		drawFunction = drawStageFive;
  		ellipseH = 0;
  	}
  } 

  //stage Five to Six
  else if( drawFunction === drawStageFive){
  	if( key === 'n' ) {
  		drawFunction = drawStageSix;
  	}
  }

  //stage Six to Seven
  else if( drawFunction === drawStageSix2){
  	if( key === 'n' ) {
  		drawFunction = drawStageSeven;
  	}
  } 

  //stage Seven to home
  else if( drawFunction === drawStageSeven){
  	if( key === 'b' ) {
  		drawFunction = drawHomepage;
  	}
  }
}
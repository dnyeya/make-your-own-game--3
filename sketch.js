function preload(){
  bananaimg = loadImage("banana.jpeg")
  boyimg = loadImage("boy.jpg")
  cucumberimg = loadImage("cucumber.jpg")
  farmerimg = loadImage("farmer.jpg")
  funwithplantimg = loadImage("funwithplants.png")
  garlicimg = loadImage("garlic.jpg")
  gingerimg = loadImage("ginger.jpg")
  hibiscusimg = loadImage("hibiscus.jpg")
  jasmineimg = loadImage("jasmine.jpg")
  lemonimg = loadImage("lemon.jpg")
  mintimg = loadImage("mint.jpg")
  pomegranetimg = loadImage("pomegranet.jpg")
  roseimg = loadImage("rose.jpg");
  tomatoimg = loadImage("tomato.jpg")
  aloeveraimg = loadImage("aloevera.jpg")
  appleimg = loadImage("apple.webp")
  vendorimg = loadImage("vendor.jpg")
}
function setup(){
  createCanvas(1000,1000)
  funwithplant = createSprite(200,200,20,20)
  funwithplant.addImage("funwithplant",funwithplantimg)

  banana = createSprite(200,200,20,20)
  banana.addImage("banana",bananaimg)
  banana.scale = 0.3;
  apple = createSprite(200,200,20,20)
  apple.addImage("apple",appleimg)
  apple.scale = 0.3;

  pomegranet = createSprite(200,200,20,20)
  pomegranet.addImage("pomegranet",pomegranetimg)
  pomegranet.scale = 0.3;

  tomato = createSprite(200,200,20,20)
  tomato.addImage("tomato",tomatoimg)
  tomato.scale = 0.3;

  //cucumber = createSprite(200,200,20,20)
  //cucumber.addImage("cucumber",cucumberimg)
  //cucumber.scale = 0.3;

  //lemon = createSprite(200,200,20,20)
  //lemon.addImage("lemon",lemonimg)
  //lemon.scale = 0.3;

  //rose = createSprite(200,200,20,20)
  //rose.addImage("rose",roseimg)
  //rose.scale = 0.3;

  //jasmine = createSprite(200,200,20,20)
  //jasmine.addImage("jasmine",jasmineimg)
  //jasmine.scale = 0.3;

  //hibiscus = createSprite(200,200,20,20)
  //hibiscus.addImage("hibiscus",hibiscusimg)
  //hibiscus.scale = 0.3;

  //aloevera = createSprite(200,200,20,20)
  //aloevera.addImage("aloevera",aloeveraimg)
  //aloevera.scale = 0.3;

  //mint = createSprite(200,200,20,20)
  //mint.addImage("mint",mintimg)
  //mint.scale = 0.3;

  //ginger = createSprite(200,200,20,20)
  //ginger.addImage("ginger",gingerimg)
  //ginger.scale = 0.3;

  //garlic = createSprite(200,200,20,20 )
  //garlic.addImage("garlic",garlicimg)
  //garlic.scale = 0.3;

  boy = createSprite(700,200,20,20)
  boy.addImage("boy",boyimg)
  boy.scale = 0.5;

  farmer = createSprite(100,200,20,20)
  farmer.addImage("farmer",farmerimg)
  farmer.scale = 0.3;

  
 
}
function draw(){
  background("white");
  drawSprites();
  if(keyDown("a")){
    convo1()
  }
  if(keyDown("b")){
    convo2()
  }
  if(keyDown("c")){
    convo3()
    vendor = createSprite(500,500,20,20)
    vendor.addImage("vendor",vendorimg)
    vendor.scale = 0.3;
  }
  if(keyDown("d")){
    convo4()
  }
  if(keyDown("e")){
    convo6()
  }
  if (keyDown("f")){
    convo7()
  }
  if (keyDown("g")){
    ground()
  }
}
  function convo1(){
    fill("yellow")
    textSize(20)
    text("Hello,I want to leart how take care of plants",650,100)
  }
  function convo2(){
    fill("yellow")
    textSize(20)
    text("ok....you have come to the right place.First let's go too the seed vendor to get the seeds.",150,100)
  }
  function convo3(){
    fill("yellow")
    textSize(20)
    text("TO THE SEED VENDOR.......",400,400)
  }
  function convo4(){
    fill("yellow")
    textSize(20)
    text("Hello",650,100)
  }
  function convo5(){
    fill("yellow")
    textSize(20)
    text("Hello,how may I help you",450,450)
  }
  function convo6(){
    fill("yellow")
    textSize(20)
    text("We need some seeds to grow",150,100)
  }
  function convo7(){
    fill("yellow")
    textSize(20)
    text("Here is the List of seeds we have...",650,100)
  }
  function ground(){
    fill("yellow")
    textSize(20)
    text("List of the seeds:",500,100)
   text("Vegetables;",500,120)
   text("Tomato,Cucumber,lemon",500,140)
   text("Fruits;",500,160)
   text("Apple,Banana,Pomegranet",500,180)
   text("Frowering Plants;",500,200)
   text("Rose,Jasmine",500,220)
   text("Benefecial Plants;",500,240)
   text("Aloevera,Mint,Ginger,Garlic",500,260)
  }

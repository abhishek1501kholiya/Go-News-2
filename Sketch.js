
var rect;
var form;
var bg;
var value;
var users = [];
var gameState = "home";
var didbutton;
var statement1;
var bubbles = [];
var display;
var question1;
var answer1;
var database;
var user;
var question2;
var userCount = 0;
var explore;
var exploreimg;
var Explorehtml  ;
var back;
var More1;
var Morehtml;
var morebg;
var viewPost;
var astrobg;
var Post1;
var tab;
var i = 0;
var imageRef 
function preload(){
bg = loadImage("homenew.jpeg");
 exploreimg = loadImage("features.jpg");
 morebg = loadImage('More.jpg')
 astrobg = loadImage('image10.jpg')
}
function setup (){

canvas = createCanvas(800,800);

//database = firebase.database();
console.log(database)
form = new Form();
question1 = new Question("what is global warming and what are its causes ?");
answer1 = new Answer();
user = new User();


 didbutton = new Button('did you know',150,750,"didyou");
question2 = new question();
Explorehtml = new  Explore(" Let's Explore How  technology is helping us to make our environment clean");
back = new Button('Back',150,750,'back1');
More1 = new Button('More',550,750,'More');
viewPost = new Button('View Post',650,750,'Post');
Morehtml = new More('feedback','Dear user ');
//Post1 = new Post();

var storageRef = firebase.storage().ref();
imageRef = storageRef.child('pupies');


}
function draw(){
background(bg);
fill("white");
 
 form.display();
 if(gameState === "didyou"){
     rect(50,200,700,80);
    back.display();
    back.show();
    question1.display();   
 question1.show();
 question2.display();
 question2.show();
 rect(50,350,700,80)
 answer1.hide();

 }
if(gameState === "question"){
 
 answer1.display();
 answer1.show();
 question2.hide();



}

//if(gameState ==="question2"){
 //    question2.hide();
//}
if(gameState === "did2"){
    gameState = "home";
    form.show(); 
    didbutton.show();
 //    answer1.hide();
}
if(gameState === "explore"){
  background(exploreimg);
    // form.hide();
     question1.hide();
     question2.hide();
     Explorehtml.display();
     Explorehtml.show();
     back.display();
     back.show();
    //var image = loadImage("images/download(2).png");
 
}
if(gameState === "back1"){
    background(astrobg)
    form.display();
    form.show();

    Explorehtml.hide();
    question1.hide();
    question2.hide();

    didbutton.display();
    didbutton.show();
    explore.display();
    explore.show();
    More1.display();
    More1.show();
    viewPost.display();
    viewPost.show();
}
if(gameState === 'More'){
    background(morebg);
    back.display();
    back.show();
  // /  displayImage();
}
if(gameState === "Post"){
    didbutton.hide();
    back.display();
    back.show();
   displayImage();
   store();
    // displayImage();
    //store();
  //  Post1.display();
   // Post1.store();   
}
drawSprites()

}
//console.log(gameState);
function displayImage(){
  imageRef.getDownloadURL().then(function(url){
    console.log(url.toString());
    var modURL = "https://cors-anywhere.herokuapp.com" + url;
    tab = createImg(modURL,"test");
    tab.position(200,row);
    tab.style("width","100px");
    tab.style("height","100px");

  });
}
function  store(){
  database  = firebase.database();
  var storageRef = firebase.storage().ref();
  var i;
  // lists the images and displays it with a proper gap between them 
  storageRef.child('/').listAll().
   then(function(result){  
   result.items.forEach(function(imageRef){ 
   console.log(imageRef.toString()); 
   i+=150; 
   //displayImage(i,imageRef);
    displayImage(i,imageRef) ;
 }); 
 });
}
//every thing about questions in did gameState

// about the answer of 1 question

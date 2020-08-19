
     https://firebase.google.com/docs/web/setup#available-libraries -->
var username;

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFryzejxSYbxM9yLhHphBQzo3ZZR2Z6w4",
    authDomain: "go-news-3c47d.firebaseapp.com",
    databaseURL: "https://go-news-3c47d.firebaseio.com",
    projectId: "go-news-3c47d",
    storageBucket: "go-news-3c47d.appspot.com",
    messagingSenderId: "337934705204",
    appId: "1:337934705204:web:15d127c5ce6d9add4ba061"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var name,password,email;
  const auth = firebase.auth();
  
  var next;
  var message;
  
  var name1;
  var name2;
  function setup(){
     next = createA("index2.html","home","same");
     next.style('background-color', "orange");
    message =  createElement('h2');
    message.html("kindly press Home button to continue");
    name2 = new Button();
     
    }
    function draw(){
        //ame.hide();
        name2.display();
        
    }
  //  function draw(){
    //    next.hide();
      //  message.hide();
    //}
    function createAccount (){
      name1 = name2.value();
    //  name.display();
      //var name = document.getElementById('name');
       //name1 = name.value;
       if(name1 != null && name1 != ''){
      var email = document.getElementById('email');
       var password = document.getElementById('password');
       const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
       promise.catch(e => alert(e.message));
       alert('signed up');
       }else{
         alert('Kindly Enter Name to Create Account');
       }
 
   }
 function Login(){
 // name1 = name2.value();
  //name.display();
  if(name1 != null && name1 != ''){
    
     var name = document.getElementById('name');
   
     var email = document.getElementById('email');
     var password = document.getElementById('password');

     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    // name = name.value;
     promise.catch(e => alert(e.message));
     alert('Logged in' + email.value);

     next.position(200,600);
     next.show();
     message.show();
     message.position(200,600);
  }else{
    alert('Kindly Enter a name to Log in ');
  }
    }
 function signOut (){
     next.hide();
     auth.signOut();
     alert('signout');
 }
 auth.onAuthStateChanged(function(user){
     if(user){
       var email = user.email;
       alert(" Activeuser" + email);

     }else{
      alert('No Active User')
     }
 })
 function working(){
     if(email!=null){
         console.log("working");
     }
 }
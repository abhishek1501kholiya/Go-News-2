class Form {
    constructor(){
        this.displayask = createElement('h3');
        this.displayname = createInput('');
        this.button = createButton("Next");
        this.text = createElement('h2');
        this.greeting = createElement('h1');
        this.text2 = createElement('h3');
        this.text3 = createElement('h3')
        this.logo = createElement('h1');
    }
    hide(){
        this.displayask.hide();
        this.displayname.hide();
        this.button.hide();
        this.text.hide();
        this.text2.hide();
        this.text3.hide();
        this.greeting.hide();
        this.logo.hide();
    
    }
    display(){
    //    this.displayask.html(" Enter your display name ");
     //   this.displayask.position(285,350);
      //  this.displayname.position(300,400);
      //  display = this.displayname.value();
       // user.name = display;
       // this.button.position(600,700);
     //   this.text.html("Please click next to continue")
      //  this.text.position(500,600);

      //  if(gameState === "display"){
       //     fill("red");
           
          //  answer1.hide();
        //    question1.hide();
          //  question2.hide();
          //   user.update();
           //  didbutton.hide();
           //  back.hide();
            // More1.hide();
            // viewPost.hide();
            // Post1.hide();
                 
            // rect(275,350,200,180);
          
               
               // didbutton.position(50,750);
               // didbutton.style("blue");
          
               
          
            
          
               // didbutton.mousePressed(()=>{
                 //    gameState = "did";
                  //   form.hide();
                //})
          
          
    //    }
       
       // this.button.mousePressed(()=>{
        //  //  console.log(display);
          ///  if(display != null && display != ''){
           if( gameState === "home"){
            this.displayask.hide();
            this.displayname.hide();
            this.text.hide();
            this.button.hide();
        
            didbutton.display();
            didbutton.show();

            More1.display();
            More1.show();
           

            question1.hide();
            question2.hide();
            explore = new Button("Explore",400,750,"explore");
            explore.display();
            explore.show();
            users = value; 
            viewPost.display();
            viewPost.show();

            rect(290,740,40,20);
            rect(300,750,20,20);

            var link;
            link = createA("Photo.html","posts","on_blank");
            link.style('background-color', 'red');
            link.position(300, 750); 
         

            //user.index = userCount;
           

            this.greeting.html("Hello"+  " " + name1);
            this.greeting.position(200,100);

            
           
            this.logo.html("welcome to our app") ;
            this.logo.position(300,300);
            
            this.text2.html("Dear User, this app is created to tell the people about our environment  and how to save it  ");
            this.text2.position(100,400);  

           this.text3.html(" and what is global warming and why we should not throw or dump garbage anywhere");
            this.text3.position(100,450);


            
           }
       
    }
    show(){
        this.logo.show();
        this.text2.show();
        this.text3.show();
    }
}
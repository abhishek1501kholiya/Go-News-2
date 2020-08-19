class question {
    constructor(){
        this.button = createButton('>');
        this.question  = createElement('h2');

    }
    hide(){
        this.button.hide();
        this.question.hide();
    }
    display(){
        this.button.position(400,400);
        this.question.html("What is environment and what is pollution and what are its causes ?");
        this.question.position(60,350);
        this.button.mousePressed(()=>{
            gameState = "question2";
            question1.hide();
            this.button.hide();
            this.question.hide();
          //  link.hide();
        })
    }
    show(){
        this.button.show();
        this.question.show()
    }
}
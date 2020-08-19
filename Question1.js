class Question {
    constructor(name,qx,qy){
        this.button = createButton('>');
        this.question = createElement('h2');
        this.name = name;
        this.x = qx;
        this.y = qy;
    }
    hide(){
        this.button.hide();
        this.question.hide();
    }
    display(){
        this.question.html(this.name);
        this.question.position(100,225);
        this.button.position(600,250);
        this.button.mousePressed(()=>{
            this.button.hide();
            this.question.hide();
            gameState = "question";
        })
    }
    show(){
        this.question.show();
        this.button.show();
    }
}

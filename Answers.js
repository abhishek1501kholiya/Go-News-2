class Answer {
    constructor(){
        this.headanswer = createElement('h1');
        this.answer = createElement('h2');
        this.back = createButton('Back');
    }
    hide(){
        this.headanswer.hide();
        this.answer.hide();
        this.back.hide();
    }
    display(){
        this.headanswer.html("Global Warming and its causes - ");
        this.answer.html("Global warming is bla bla bla and its causes are undefined");
        this.headanswer.position(100,225);
       this.answer.position(100,400);
       this.back.position(600,225);
       this.back.mousePressed(()=>{
        this.hide();

        gameState = "did2";

       })
    

    }
    show(){
        this.headanswer.show();
        this.answer.show();
        this.back.show();
    }
}
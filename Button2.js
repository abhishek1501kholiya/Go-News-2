class Button {
    constructor(name,buttonx,buttony,gamestate){
        this.name = name
        this.button = createButton(this.name);
        this.buttonx = buttonx;
        this.buttony = buttony;
        this.gamestate = gamestate;
    }
    hide(){
        this.button.hide();
    }
    display(){
        this.button.position(this.buttonx,this.buttony);
        this.button.mousePressed(()=>{
            gameState = this.gamestate;
            didbutton.hide();
            form.hide();
            this.button.hide();
        })
    }
    show(){
        this.button.show();
    }
}
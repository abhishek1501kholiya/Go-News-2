class Statement {
    constructor(type,name){
        this.body = createElement(type);
    
        this.name = name;
    }
    hide(){
        this.body.hide();
    }
    display(x,y){
        this.body.html(this.name);
        this.body.position(x,y);
    }
}
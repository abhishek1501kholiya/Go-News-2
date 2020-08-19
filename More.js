class More {
    constructor(name, namef){
        this.body = createElement('h1');
        this.feedback = createElement('h2');
        this.name = name;
        this.namef = namef;
    }
    hide(){
        this.body.hide();
        this.feedback.hide();
    }
    display(){
        this.body.html(this.name);
        this.body.position(50,100);
        this.feedback.html(this.namef);
        this.feedback.position(50,300);
        
    }
    show(){
        this.body.show();
        this.feedback.show();
        
    }
}
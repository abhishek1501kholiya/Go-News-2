class Explore {
    constructor(name){
        this.name = name;
     this.greeting = createElement('h2') ;
     this.tech1 = createElement('h3');
     this.tech2 = createElement('h3')
    this.tech3 = createElement('h3');
    this.tech4 = createElement('h3');
    }
    hide(){
        this.greeting.hide();
    }
    display(){
        this.greeting.html(this.name);
        this.greeting.position(25,100);

    }
    show(){
        this.greeting.show();
    }

}
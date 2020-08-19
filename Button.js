class Button {
    constructor(){
        this.text = createElement('h2');
        this.name = createInput('');
       // this.Password = createInput('Password');
        //this.Email = createInput('Email');
    }
    hide(){
        this.text.hide();
        this.name.hide();
        //this.Password.hide();
        //this.Email.hide();
    }
    display(){
        this.text.html('Enter Name')
        this.text.position(630,170);
        name1 = this.name.value();
        this.name.position(630,225);
        //this.Password.position(200,300);
        //this.Email.position(200,250);
    }
    show(){
        this.text.show();
        this.name.show();
    //    this.Password.show();
      //  this.Email.show();
    }
}
class Shape {
    constructor(text, textcolor, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
        
    }
    setText(data){
        this.text = data;
    }
    setTextColor(data){
        this.textcolor = data;
    }
    setShapeColor(data){
        this.shapecolor = data;
    }
}
class Square extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
    }
    draw(){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = this.shapecolor;
        square.style.color = this.textcolor;
        square.innerHTML = this.text;
        document.body.appendChild(square);
    }
}
class Circle extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
    }
    draw(){
        let circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.backgroundColor = this.shapecolor;
        circle.style.color = this.textcolor;
        circle.innerHTML = this.text;
        document.body.appendChild(circle);
    }
}
class Triangle extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
    }
    draw(){
        let triangle = document.createElement("div");
        triangle.classList.add("triangle");
        triangle.style.borderBottomColor = this.shapecolor;
        triangle.style.color = this.textcolor;
        triangle.innerHTML = this.text;
        document.body.appendChild(triangle);
    }
}
module.exports = {Shape, Square, Circle, Triangle}
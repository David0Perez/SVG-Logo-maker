const {Shape, Circle, Square, Triangle} = require('./shapes.js');
test('set text in circle constructor', () => {
    let logo = new Circle()
    console.log(logo)
    logo.setText('bob')
    logo.setTextColor('red')
    logo.setShapeColor('blue')
    console.log(logo)
    console.log(logo.render())
    expect(logo.text).toBe('bob');
});

test('set text in square constructor', () => {
    let logo = new Square()
    console.log(logo)
    logo.setText('bob')
    logo.setTextColor('red')
    logo.setShapeColor('blue')
    console.log(logo)
    console.log(logo.render())
    expect(logo.text).toBe('bob');
});

test('set text in triangle constructor', () => {
    let logo = new Triangle()
    console.log(logo)
    logo.setText('bob')
    logo.setTextColor('red')
    logo.setShapeColor('blue')
    console.log(logo)
    console.log(logo.render())
    expect(logo.text).toBe('bob');
});

test('set text in shape constructor', () => {
    let logo = new Shape()
    console.log(logo)
    logo.setText('bob')
    logo.setTextColor('red')
    logo.setShapeColor('blue')
    console.log(logo)
    console.log(logo.render())
    expect(logo.text).toBe('bob');
});
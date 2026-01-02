console.log('Hello World man');
let firstName = 'Szymon';
let lastName = 'Janiszewski';
console.log('Hello '+firstName+' '+lastName);
let x = 1;
x++;
const y = 0.3;
console.log(x+y)
let isApproved = false
let secondName = undefined
let selectedColor = null
let person = {
    name: "Szymon",
    age: 25
};


person.name = "John"
let selection = 'name'
person[selection] = "Mary"
console.log(person.name)
let colors = ['red', 'yellow']
colors[2] = 'green'
console.log(colors.length+' '+colors[1])
function greet(name, lastName){
    console.log('Hello '+name+' '+lastName);
}
greet("Marek", 'Grechuta')
function square(number){
    return number*number
}
console.log(square(5))


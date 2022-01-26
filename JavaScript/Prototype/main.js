//https://javascript.info/prototype-inheritance
let animal = {
    eats: true,
};

let rabbit = {
    __proto__: animal,
    jump: true
}

//jump
console.log(Object.keys(rabbit));

//jump,eats
for (let i in rabbit) {
    console.log(i);
}

// Use __proto__ to assign prototypes in a way that any property lookup 
// will follow the path: pockets → bed → table → head.For instance, pockets.pen 
// should be 3(found in table), and bed.glasses should be 1(found in head).

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(`pockets.pen is ${pockets.pen}`);
console.log(`bed.glasses is ${bed.glasses}`);

//hamster problem
let hamster = {
    stomach: [],
    eat(props) {
        this.stomach.push(props);
    }
}

let sleepy = {
    __proto__: hamster
}

let lazy = {
    __proto__: hamster
}

lazy.eat('grain');
console.log(sleepy.stomach);

let a = new String('sss');
console.log(a);

//prototype chain
function Super() {
    this.a = 11;
    this.arr = [1, 2, 3, 4];
}
Super.prototype = {
    b: 222,
    c: 333
}

function Sub() {
}
Sub.prototype = new Super();
let sub = new Sub();
let sub2 = new Sub();

console.log(sub.a); //11
console.log(sub.b); //222
console.log(sub.__proto__ === Sub.prototype); //222

sub.arr.push(5);
console.log(sub2.arr); //1,2,3,4,5

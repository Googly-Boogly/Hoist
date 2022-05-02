console.log(hello);                                   
var hello = 'world';                                 

// interpret
// var hello;
// console.log(hello);
// hello = 'world';

// output
// undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// interpret
// var needle = 'haystack';
// var needle - 'magnet';
// console.log(needle);

// output
// magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// interpret
// var brendan = 'super cool';

// output
// super cool


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// interpret
// var food = 'chicken'
// console.log(food)
// food = 'half-chicken
// console.log(food)
// var food = 'gone'

// output
// chicken
// half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// interpret
//  food = chicken
// console.log(food)
// var food = 'fish'
// console.log(food)
// console.log(food)
// console.log(food)


// output
// undefined
// fish
// undefined
// undefined

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// interpret
// var genre;
// console.log(genre)
// genre = 'disco'
// genre = 'rock'
// console.log(genre)
// var genre = 'r&b'
// console.log(genre)
// console.log(genre)

// output
// undefined
// undefined
// r&b
// disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// interpret
// var dojo = san jose
// conmsole.log(dojo)
// var dojo = seattle
// console.log(dojo)
// var dojo = burbank
// console.log(dojo)
// console.log(dojo)

// output
// sanjose
// seattle
// burbank
// san jose

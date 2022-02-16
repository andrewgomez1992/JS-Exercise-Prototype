/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// name and age are arguments, so you need to apply this to them, like this.name = name;
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = []; // here is your empty stomach array
}
Person.prototype.eat = function (someFood) { // giving them the ability to eat, someFood is passed as the argument for the function
  if (this.stomach.length < 10){ // fucking confusing, but here your making sure theres room in the stomach because you obviously have to have a cap and 10 food items sounds like a good one?
    this.stomach.push(someFood) // here you are pushing the edible(someFood) into the stomach.
  }
};
Person.prototype.poop = function () { // giving the ability to poop
  this.stomach = []; // when you poop you should have an empty array after
}
Person.prototype.toString = function () { // here is the method toString that is asked for
  return `${this.name}, ${this.age}` // returning the name and age here, again use 'this'
}

// const drew = new Person('Drew', 30)
// console.log(drew.toString());
// drew.eat('pizza');
// console.log(drew.stomach)
// drew.poop();
// console.log(drew.stomach)


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) { // here are your two arguments
  this.model = model; // need to make first argument with this.
  this.milesPerGallon = milesPerGallon; // need to make 2nd argument with this.
  this.tank = 0; // initializing the tank to be 0
  this.odometer = 0; // initializing odometer to be 0
}

Car.prototype.fill = function(gallons){ // creating the first ability .fill , gallons is passed into the function 
  this.tank = this.tank + gallons; // adding the gallons to tank
}

Car.prototype.drive = function(distance) { // giving the drive ability, distance is passed into the function for what were doing
  const driveableMiles = this.tank * this.milesPerGallon; // <---------------- ASK QUESTIONS HERE
  if (distance <= driveableMiles) { // <---------------- ASK QUESTIONS HERE
    this.odometer = this.odometer + distance; // <---------------- ASK QUESTIONS HERE
    this.tank = this.tank - (distance / this.milesPerGallon) // <---------------- ASK QUESTIONS HERE
  }else{
    this.odometer = this.odometer + driveableMiles; // <---------------- ASK QUESTIONS HERE
    this.tank = 0; // ASK QUESTIONS HERE
    return `I ran out of fuel at ${this.odometer} miles` // <---------------- ASK QUESTIONS HERE
  }
}



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) { // passing in the 3 arguments asked for 
 Person.call(this, name, age); // INHERITING ATTRIBUTES FROM PARENT CLASS, arguments are what you want the baby class to inherit. 
 this.favoriteToy = favoriteToy; // favoriteToy is the only one not inhereted from the parent class so you need to create it 
}
Baby.prototype = Object.create(Person.prototype); // this allows baby to inhereit the Persons methods
Baby.prototype.play = function(){ // creating the ability to play 
  return `Playing with ${this.favoriteToy}` // returning the string asked for 
}

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - these are all of the built in objects, this will bind to the global object 
  2. Implicit Binding - using "this." , which referes to the object on which the function is called
  3. Explicit Binding - if you use call, bind, or apply if you want "this." to point to a certain value
  4. New Binding - this is when you use the new keyword to make a new object, 'this.' will not point to the new object
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
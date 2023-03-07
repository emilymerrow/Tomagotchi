

let character;
let statsIncreaseInterval = 5000;
let hunger = 1;
let sleepiness = 1;
let boredom = 1;
let age = 0;
let isDead = false;


class Tomagotchi {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  let name = prompt("Please enter your pet's name.");
  character = new Tomagotchi(name);
  
  document.getElementById("character-name").innerHTML = character.name;
  document.getElementById("character-age").innerHTML = `(Age:${age})`;
  
  
  const displayUpdatedStats = () => {
    if(isDead) {
      return;
    }
    document.getElementById("hunger-stat").innerHTML = `(${hunger})`;
    document.getElementById("sleepiness-stat").innerHTML = `(${sleepiness})`;
    document.getElementById("boredom-stat").innerHTML = `(${boredom})`;
    if (hunger === 10 || sleepiness === 10 || boredom === 10) {
      isDead = true;
      drawDead();
    }
  }
  
  const decreaseHunger = () => {
    if (hunger >= 2) {
      hunger --;
      displayUpdatedStats();
    }
  }
  
  const decreaseSleepiness = () => {
    if (sleepiness >= 2) {
      sleepiness --;
      displayUpdatedStats();
    }
  }
  
  const decreaseBoredom = () => {
    if (boredom >= 2) {
      boredom --;
      displayUpdatedStats();
    }
  }
  
  const animateCharacter = () => {
    draw(Math.floor(Math.random() * 2));
  }
  





incrementAge() {
    this.age += 1; //increases by 1
    console.log(`${this.name} is now ${this.age} days old.`);
}
if(pet.hunger >=10 || pet.sleepiness >= 10 || pet.boredom >= 10 { //checks if T's hunger, sleep, OR boredom >=10
    document.getElementById("message").textContent = `${pet.name} has died!` //logs dead pet
}

let petName = prompt("Enter your Tomagotchi's name:");
let pet = new Tomagotchi(petName);


/* I defined a Tamagotchi class with constructor that set the initial values 
for the pet's name, hunger, happiness, energy, age, and sleeping state. 
//the startig values are 5 to give the player time to play before it dies
I also defined methods for feeding, playing, sleeping, and aging up the pet,
and function for when the pet dies if not cared for properly
The methods changes the pet's hunger, happiness, energy, and sleep  
based on certain conditions. */

//properties of the t class
//add a name to the prop.
//global var "is light on"
//create the class and set the properties inside of it



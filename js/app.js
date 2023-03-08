let characterTemplate = {
    0: [
      { x: 9, y: 9, color: '#fefcfc' },
      { x: 10, y: 9, color: '#fefcfc' },
      { x: 11, y: 9, color: '#fefcfc' },
      { x: 12, y: 10, color: '#fefcfc' },
      { x: 13, y: 11, color: '#fefcfc' },
      { x: 13, y: 12, color: '#fefcfc' },
      { x: 12, y: 13, color: '#fefcfc' },
      { x: 11, y: 14, color: '#fefcfc' },
      { x: 10, y: 14, color: '#fefcfc' },
      { x: 9, y: 14, color: '#fefcfc' },
      { x: 8, y: 13, color: '#fefcfc' },
      { x: 7, y: 12, color: '#fefcfc' },
      { x: 7, y: 11, color: '#fefcfc' },
      { x: 8, y: 10, color: '#fefcfc' },
      { x: 9, y: 9, color: '#fefcfc' },
      { x: 9, y: 11, color: '#fefcfc' },
      { x: 11, y: 11, color: '#fefcfc' },
    ],
    1: [
      { x: 9, y: 9, color: '#fefcfc' },
      { x: 10, y: 9, color: '#fefcfc' },
      { x: 11, y: 9, color: '#fefcfc' },
      { x: 12, y: 9, color: '#fefcfc' },
      { x: 13, y: 10, color: '#fefcfc' },
      { x: 14, y: 11, color: '#fefcfc' },
      { x: 14, y: 12, color: '#fefcfc' },
      { x: 13, y: 13, color: '#fefcfc' },
      { x: 11, y: 14, color: '#fefcfc' },
      { x: 12, y: 14, color: '#fefcfc' },
      { x: 10, y: 14, color: '#fefcfc' },
      { x: 9, y: 14, color: '#fefcfc' },
      { x: 8, y: 13, color: '#fefcfc' },
      { x: 7, y: 12, color: '#fefcfc' },
      { x: 7, y: 11, color: '#fefcfc' },
      { x: 8, y: 10, color: '#fefcfc' },
      { x: 9, y: 9, color: '#fefcfc' },
      { x: 9, y: 11, color: '#fefcfc' },
      { x: 12, y: 11, color: '#fefcfc' },
    ],
    2: [
        { x: 9, y: 9, color: '#fefcfc' },
        { x: 10, y: 9, color: '#fefcfc' },
        { x: 11, y: 9, color: '#fefcfc' },
        { x: 12, y: 9, color: '#fefcfc' },
        { x: 13, y: 10, color: '#fefcfc' },
        { x: 14, y: 11, color: '#fefcfc' },
        { x: 14, y: 12, color: '#fefcfc' },
        { x: 13, y: 13, color: '#fefcfc' },
        { x: 11, y: 14, color: '#fefcfc' },
        { x: 12, y: 14, color: '#fefcfc' },
        { x: 10, y: 14, color: '#fefcfc' },
        { x: 9, y: 14, color: '#fefcfc' },
        { x: 8, y: 13, color: '#fefcfc' },
        { x: 7, y: 12, color: '#fefcfc' },
        { x: 7, y: 11, color: '#fefcfc' },
        { x: 8, y: 10, color: '#fefcfc' },
        { x: 9, y: 9, color: '#fefcfc' },
        { x: 9, y: 11, color: '#fefcfc' },
        { x: 12, y: 11, color: '#fefcfc' },
      ]
  }
  
  let config = {
    width: 20,
    height: 20,
    color: 'white',
  }

let character; 
let statsIncreaseInterval = 5000;
let hunger = 1;
let sleepiness = 1;
let boredom = 1;
let age = 0;
let isDead = false;

//set the size of the T pixel art
document.getElementById('pixel-screen').style.width = `calc(${(0.825 * config.width)}rem + ${(config.height * 3)}px)`;
document.getElementById('pixel-screen').style.height = `calc(${(0.825 * config.height)}rem + ${(config.width * 3)}px)`;

//creates the grid of pixels to display the T pixel art
for(let i = 0; i < config.width; ++i) {
    for(let j = 0; j < config.height; ++j) {
      let createEl = document.createElement('div');
      createEl.classList.add('pixel');
      createEl.setAttribute('data-x-coordinate', j);
      createEl.setAttribute('data-y-coordinate', i);
      document.getElementById('pixel-screen').appendChild(createEl); //it appends the newly created div elem 
    }
  }
  //clears the pixel art display and start fresh
const clearScreen = () => {
    document.querySelectorAll('.pixel').forEach(function(item) {
      item.setAttribute('data-color', null)
      item.style.background = '#333333';
    });
  }

  //iterates through the characterTemplate array corresponding to the T's
  // current age & sets the background color of the div element with the
  // matching x and y coordinates
  const draw = (coefficient = 0) => {
    clearScreen();
    characterTemplate[age].forEach(function(i) {
      let getPixel = document.querySelector(`.pixel[data-x-coordinate="${i.x + coefficient}"][data-y-coordinate="${i.y + coefficient}"]`);
      if(getPixel !== null) {
        getPixel.setAttribute('data-color', i.color);
        getPixel.style.background = i.color;
      }
    });
  }
   // sets the background color of each pix to red when T is dead
  const drawDead = () => {
    clearScreen();
    characterTemplate[age].forEach(function(i) {
      let getPixel = document.querySelector(`.pixel[data-x-coordinate="${i.x}"][data-y-coordinate="${i.y}"]`);
      if(getPixel !== null) {
        getPixel.setAttribute('data-color', '#c52828');
        getPixel.style.background = '#c52828';
      }
    });
    }
   draw();

class Tomagotchi {  //T class with a property (name)

    constructor(name) {
      this.name = name;
    }
  
  }
  
  let name = prompt("Please enter your pet's name."); //sets up the initial state of the T game 
  character = new Tomagotchi(name);                  //and creates a new T object with user's pet name
  
  document.getElementById("character-name").innerHTML = character.name; //updates the text content of the HTML elem. with the ID attibutes
  document.getElementById("character-age").innerHTML = `(Age:${age})`;  // to show the name & age of the T the user created
  
  
  const displayUpdatedStats = () => { //this funct. updates the HTML content of hunger, sleepiness, boredom
    if(isDead) {                     //
      return;
    }
    document.getElementById("hunger-stat").innerHTML = `(${hunger})`; //getElementById() method is used to select the HTML elements
    document.getElementById("sleepiness-stat").innerHTML = `(${sleepiness})`; //.innerHTML property is used to update their content
    document.getElementById("boredom-stat").innerHTML = `(${boredom})`;
    if (hunger === 10 || sleepiness === 10 || boredom === 10) { //if any of the levels reached 10, isDead=true
    isDead = true; //prevent further updates ont the T stats after it died
      drawDead();
    }
  }
  
  const decreaseHunger = () => { //this funct. decreases hunger levels if T levels is >=2
    if (hunger >= 2) {
      hunger --;
      displayUpdatedStats(); //calls the funct. to update the HTML content of the Tamagotchi's stats
    }                        //after the hunger level is decreased
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
  //generates a random number between 0 and 1 using the Math.random() method, 
  // x2, rounds it down to the nearest integer using the Math.floor() method
  const animateCharacter = () => {
    draw(Math.floor(Math.random() * 2)); //creates the illusion of T moving or
  }                                      //changing direction on the screen
     //  This allows the user to interact with the T and help it stay healthy and happy.        
  const initializeGame = () => {
    displayUpdatedStats();
    document.getElementById("btnHunger").addEventListener("click", decreaseHunger);
    document.getElementById("btnSleepiness").addEventListener("click", decreaseSleepiness);
    document.getElementById("btnBoredom").addEventListener("click", decreaseBoredom);
// Increases stats
setInterval(() => {
    if (!isDead) {
      hunger ++;
      sleepiness ++;
      boredom ++;
      displayUpdatedStats();
    }
  }, statsIncreaseInterval);

  // Increases age
  setInterval(() => {
    if (!isDead) {
      if (age < 1) {
        age ++;
      }
      document.getElementById("character-age").innerHTML = `(Age:${age})`;
    }
   }, 10000);

   setInterval(() => {
    if (!isDead) {
      animateCharacter();
    }
  }, 1500);
}
initializeGame();



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



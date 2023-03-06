

class Tomagotchi {  //T class that creates a T object with 6 properties
    constructor(name) {
        this.name = name;
        this.age = 0; // measured in days
        this.hunger = 5; //1-10 scale, 10 hungriest
        this.happiness = 5;
        this.energy = 5;
        this.isSleeping = false;
    }
}
play() { //method in T class that checks if T has enough energy to play && if happiness <10
    if(this.energy >= 2 && this.happiness < 10) {
        this.happiness += 1;  
        this.energy -= 2;  //if both=true, T happines +1, energy -2 
        console.log(`${this.name} is happier now.`);
    } else if(this.energy < 2) {  //if not enough energy to play
        console.log(`${this.name} is too tired.`);
    } else { 
        console.log(`${this.name} doesn't feel like playing now.`); //T is happy already
    }

}

sleep() {
   if(!this.isSleeping) { //if T. is not sleeping
        this.isSleeping = true; //then this is true
        console.log(`${this.name} is now sleeping.`);
      setTimeout(() => {  // funct. is called 
        this.isSleeping = false;   //Sets the isSleeping back to 'false' and logs msg.
        console.log(`${this.name} woke up from a nap.`);
    }, 5000);  //how much time to wait before exec the funct (5,000 millisecons = 5sec)
   } else {
       console.log(`{$this.name} is already sleeping.`); //if T is sleeping, logs this msg.
   }
}
feed () { //method that simulates T eating
    if(this.hunger < 10) { //checks if T hungry or not
        this.hunger += 1;
        console.log(`${this.name} is less hungry now.`);
   } else {
        console.log(`${this.name} is not hungry.`); //if hunger !<10 , log this
    }
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
I also defined methods for feeding, playing, sleeping, and aging up the pet. 
The methods changes the pet's hunger, happiness, energy, and sleep  
based on certain conditions. */

//properties of the t class
//add a name to the prop.
//global var "is light on"
//create the class and set the properties inside of it



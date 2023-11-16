class Hamster {
    constructor(owner, name, price){
        this.owner = " ";
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log("squeak squek");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice() {return this.price;}
}
const hamsterOne = new Hamster();
hamsterOne.owner = "Mishelle";
hamsterOne.name = "Chunky";
hamsterOne.price = 10;
console.log(hamsterOne);
const hamsterTwo = new Hamster();
hamsterTwo.owner = "Anna";
hamsterTwo.name = "Cheeks";
hamsterTwo.price = 17;
console.log(hamsterTwo);


class Person {
 constructor( name, age, height, weight, mood, hamsters, bankAccount){
    this.name = " name";
    this.age = 0;
    this.height =0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
 }
 getName(){console.log( this.name)};
 getAge(){console.log(this.age)};
 getWeight(){console.log(this.weight)};
 greet(){console.log("Hi! My name is", this.name)};
 eat(){this.weight ++; 
     this.mood ++;
    console.log(this.weight, this.mood);}
 exercise(){this.weight--; console.log(this.weight);};
 ageUp(){this.age ++;
this.height ++; 
this.weight++; 
this.mood --;
this.bankAccount+=10; console.log(this.age, this.height, this.weight, this.mood, "$"+this.bankAccount);}
buyHamster(hamster){ this.hamsters.push(hamster.name);
    this.mood+=10;
    this.bankAccount -= hamster.getPrice();
    console.log(this.hamsters, this.mood, this.bankAccount );
}
}

const Anna = new Person();
Anna.name= "Anna";
Anna.weight = 120;
Anna.age = 30;
Anna.height = 5.1;
Anna.weight = 120;
Anna.mood = 7;
Anna.hamster = 'no';
Anna.bankAccount = 50;
console.log(Anna);
Anna.getName();
Anna.getAge();
Anna.getWeight();
Anna.greet();
Anna.eat();
Anna.exercise();
Anna.ageUp();
Anna.buyHamster(hamsterTwo);
Anna.buyHamster(hamsterOne);

const Timmy = new Person();
for (let i=0; i<5; i++){Timmy.ageUp()};
for (let i=0; i<5; i++){Timmy.eat()};
for (let i=0; i<5; i++){Timmy.exercise()};
for (let i=0; i<8; i++){Timmy.ageUp()}

const hamsterThree = new Hamster();
hamsterThree.owner = "Timmy";
hamsterThree.name = "Gus";
console.log(hamsterThree);
Timmy.buyHamster(hamsterThree);
for( let i=0; i<14; i++){Timmy.ageUp();}
for( let i=0; i<2; i++){Timmy.eat();}
for( let i=0; i<2; i++){Timmy.exercise();}

class Dinner{
    constructor(appetizer, entree, dessert){
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
  }}

class Chef {
    static makeDinner(appetizer, entree, dessert){return new Dinner(appetizer, entree, dessert)}}

const Dinner1 = Chef.makeDinner("Spinach with cheese", "Surf and turf", "Strawberry cheesecake");
const Dinner2 = Chef.makeDinner("Tater tots", "Burger", "Canolli");
const Dinner3 = Chef.makeDinner("Koren carrots", "Red peanut curry", "Mochi");

console.log(Dinner1);
console.log(Dinner2);
console.log(Dinner3);


//////////////////////////////////////////////yes
const body = document.querySelector('body');
body.style.backgroundColor = "teal";
body.style.color = "white";
body.style.textAlign = "center";
body.style.fontSize = "20px";

const header = document.createElement('header');
header.textContent = "Save the Universe";
header.style.fontSize = "40px";
body.appendChild(header);
 
const paragraph = document.createElement('p');
paragraph.style.color = "yellow"
body.appendChild(paragraph);

const p1 = document.createElement('p');
p1.style.color = "white"
body.appendChild(p1);


var btnStart = document.createElement("button");
btnStart.textContent = "Start the Game";
body.appendChild(btnStart);
btnStart.addEventListener('click', gameStart);

var btnReplay = document.createElement("button");
btnReplay.textContent = "Play Again?";
body.appendChild(btnReplay);
btnReplay.style.display="none";

//////////////////////////////////////////////
let alienIndex = 0;
class Ship {
  constructor(hull1, firepower1, accuracy1) {
    this.hull1 = 20;
    this.firepower1 = 5;
    this.accuracy1 = 0.7;
  }
  getHull1() { return this.hull1 };
  attackAliens(alien) {
    if (Math.random() > this.accuracy1) {
     alien.hull2-=this.firepower1;  
     p1.textContent=`Alien ship ${alienIndex} hull is at ${alien.hull2}`;
     return true;
    } else { 
return false;
    }
  }
}

class Alien {
  constructor(hull2, firepower2, accuracy2) {
    this.hull2 = Math.floor((Math.random() * 4) + 3);
    this.firepower2 = Math.floor((Math.random() * 3) + 2);
    this.accuracy2 = (Math.random() * (0.2) + 0.6).toFixed(1);
  }
  getHull2() { return this.hull2 };
  attack(ship) {   
    if (Math.random() > this.accuracy2) {
    ship.hull1 -= this.firepower2;
    p1.textContent=`User's hull is at ${ship.hull1}`;
    return true;
  } else { 
    return false;
        }
   }
}

const userShip = new Ship();
console.log(userShip);

const alienShips = [];
for (let i = 0; i < 6; i++) {
  const alien = new Alien();
  alienShips.push(alien);
};
console.log(alienShips);
for(let i=0; i < 6; i++){console.log(alienShips[i]);}

function gameStart(){
  btnStart.style.display = "none";
while (userShip.hull1 > 0) {
  if (userShip.attackAliens(alienShips[alienIndex]) === true) {
    if (alienShips[alienIndex].hull2 <= 0) {    
      if (alienIndex === alienShips.length-1) {
        p1.textContent="You won the game! All alien ships were destroyed.";
        btnReplay.style.display="initial";
        btnReplay.addEventListener('click', function(){location.reload()});
        break;
      }  
      let question = prompt("Type yes if you want to attack and no if you want to retreat")
        if (question.toLowerCase() === "no"){
          paragraph.textContent = "You let the aliens invade the earth :("
          btnReplay.style.display="initial";
          btnReplay.addEventListener('click', function(){location.reload()});
          break;}
      alienIndex++;}
        
      }
    if (alienShips[alienIndex].attack(userShip)===true) {
      if (userShip.hull1 <= 0) {
        p1.textContent="You lost. Aliens invaded the Earth!";
        btnReplay.style.display="initial";
         btnReplay.addEventListener('click', function(){location.reload()});
    }}}}
    

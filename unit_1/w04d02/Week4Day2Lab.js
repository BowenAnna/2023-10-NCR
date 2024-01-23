// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

        // let number = 5;
        // function monkeyInTheMiddle(){
        //     if(number <5){console.log('Little number')}
        //     else if (number > 10){console.log('Big number')}
        //     else{console.log("Monkey")}
        // }
        // monkeyInTheMiddle();

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

        // const kristynsCloset = [
        //     "left shoe",
        //     "cowboy boots",
        //     "right sock",
        //     "Per Scholas hoodie",
        //     "green pants",
        //     "yellow knit hat",
        //     "marshmallow peeps"
        // ];
        
        // // Thom's closet is more complicated. Check out this nested data structure!!
        // const thomsCloset = [
        //     [
        //     // These are Thom's shirts
        //     "grey button-up",
        //     "dark grey button-up",
        //     "light blue button-up",
        //     "blue button-up",
        //     ],[
        //     // These are Thom's pants
        //     "grey jeans",
        //     "jeans",
        //     "PJs"
        //     ],[
        //     // Thom's accessories
        //     "wool mittens",
        //     "wool scarf",
        //     "raybans"
        //     ]
        // ];
        // console.log(kristynsCloset);
        // console.log("Kristyn is rocking that"+" "+kristynsCloset[2]+" "+"today!");
        // kristynsCloset.splice(6,0, "raybans");
        // console.log(kristynsCloset);
        // kristynsCloset.splice(5,1, "stained knit hat")
        // console.log(kristynsCloset);
        // console.log(thomsCloset[0][0]);
        // console.log(thomsCloset[1][0]);
        // console.log(thomsCloset[2][1]);
        // console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);
        // // ? ? ? console.log(thomsCloset.splice([1][2],1,"Footie Pajamas"));
        // console.log(thomsCloset[1]);

//Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
        
// function printGreeting(name){
//     return `Hello there, ${name}!`;
//     }
// console.log(printGreeting("Slimer"));

// function printCool(name){
//     return name +" is cool";
// }
// console.log(printCool("Captain Relnolds"));

// function calculateCube(num){
//     return num*=num*num;
// }
// console.log(calculateCube(5));

function isVowel(char){
    if((char = 'a'||'A') || (char = 'e'||'E') || (char = 'i'||'I') || (char = 'o'||'O') || (char = 'u'||'U')){
        console.log("Letter",char,"is a vowel")
    }
    else {console.log("Letter ",char,"is not a vowel")}
}
isVowel('b');


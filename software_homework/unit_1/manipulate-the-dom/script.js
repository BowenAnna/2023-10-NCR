let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
 //document.querySelector('#main-title').innerHTML = "Welcome to DOM Torretos Homepage!";
var mainTitle = document.getElementById('main-title');
mainTitle.textContent ='Welcome to DOM Torretos Homepage!' 

  // Part 2
 document.querySelector('body').style.backgroundColor = "yellow";

  // Part 3
  var favThings = document.getElementById('favorite-things');
  favThings.removeChild(favThings.lastElementChild);

  // Part 4
const specTitle = document.getElementsByClassName('special-title');
for(let i=0; i<specTitle.length; i++){
  const newSpecTitle = specTitle[i];
  newSpecTitle.style.fontSize ='2rem';}

  // Part 5
let chicagoRace = document.getElementById('past-races').querySelector('li:nth-child(4)');
chicagoRace.remove();

  // Part 6
const newCity = document.createElement('li');
newCity.textContent = "Washington D.C.";
document.getElementById('past-races').appendChild(newCity);

  // Part 7
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add("blog-post", "purple");
  const newH = document.createElement('h1');
  newH.textContent = "Wasington D.C."
  const newP = document.createElement('p');
  newP.textContent = "I PARKED MY CAR AT THE WHITE HOUSE!";
  newBlogPost.appendChild(newH);
  newBlogPost.appendChild(newP);
  document.querySelector('.main').appendChild(newBlogPost);

  // Part 8
document.querySelector('#quote-title').addEventListener('click', randomQuote);

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post');
blogPosts.forEach(function (post) {
  post.addEventListener('mouseout', function() {
    post.classList.toggle('purple');
  });
  post.addEventListener('mouseenter', function() {
    post.classList.toggle('red');
  });
});

});

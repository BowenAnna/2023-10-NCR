// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//   (menuLinks)=>{for( let i=0; i<menuLinks.length; i++){const a = document.createElement('a');
//   a.href = menuLinks[i].href;
//   a.textContent = menuLinks[i].textContent;
//  topMenuEl.appendChild(a) }}



// Task 1.0 Select and cache the <main> element in a variable named mainEl.
var mainEl = document.querySelector('main');

// Task 1.1 Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2 Set the content of mainElto <h1>SEI Rocks!</h1>
const h1 = document.createElement('h1');
h1.textContent = "SEI Rocks!"
// const node = document.createTextNode("SEI Rocks!");
// h1.appendChild(node);
mainEl.appendChild(h1);

// Task 1.3 Add a class of flex-ctrto mainEl.
mainEl.classList.add("flex-ctr");

// Task 2.0 Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');

// Task 2.1 Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";

// Task 2.2 Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3 Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add("flex-around");

menuLinks.forEach(function(link) {
    var a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    topMenuEl.appendChild(a);
  });



// Task 3.0 
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Task 1
const mainEl = document.querySelector('main');
//1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//1.2
mainEl.innerHTML = '<h1>WISE Rocks!</h1>';
//1.3
mainEl.classList.add('flex-ctr');

//Task 2 
const topMenuEl = document.getElementById('top-menu');
//2.1
topMenuEl.style.height = '100%';
//2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//2.3
topMenuEl.classList.add('flex-around');

//Task 3 copy elements to the top
//3.1
for (let link of menuLinks){const tempEl = document.createElement('a');
tempEl.setAttribute('href', link.href);
tempEl.textContent = link.text;
topMenuEl.appendChild(tempEL);}
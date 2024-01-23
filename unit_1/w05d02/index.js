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
for (let link of menuLinks) {
  const tempEl = document.createElement('a');
  tempEl.setAttribute('href', link.href)
  tempEl.textContent = link.text
  topMenuEl.appendChild(tempEl)
}

//Task 4.0
const subMenuEl = document.getElementById('sub-menu');

//Task 4.1
subMenuEl.style.height = '100%';

//Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Task 4.3
subMenuEl.classList.add('flex-around');

//Task 4.4
subMenuEl.style.position = 'absolute';

//Task 4.5
subMenuEl.style.top = 0;

//Task 5.0
// updated MenuLinks at top

//Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return;
  }

//Task 5.3
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return
  }

//Task 5.4
  for (let link of topMenuLinks) {
    link.classList.remove('active');
  }

//Task 5.5
  event.target.classList.add('active')

//Task 5.6
  let currentLink
  for (let link of menuLinks) {
    if (link.text === event.target.textContent) {
      if (link.subLinks) {
        showingSubMenu = true;
      } else {
        showingSubMenu = false;
        //Task (6.4)
        mainEl.innerHTML = `<h1>${link.text}</h1>`;
      }
      currentLink = link;
    }
  }

//Task 5.8
  const buildSubMenu = (subLinks) => {
    subMenuEl.textContent = ''
    for (let link of subLinks) {
      const tempEl = document.createElement('a');
      tempEl.setAttribute('href', link.href);
      tempEl.textContent = link.text;
      subMenuEl.appendChild(tempEl);
    }
  }

//Task 5.7
  if (showingSubMenu) {
    buildSubMenu(currentLink.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = 0;
  }

})

//Task 6.0
subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return;
  }

//Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = 0;

//Task 6.2
  for (let link of topMenuLinks) {
    link.classList.remove('active');
  }

//Task 6.3
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`

})
     

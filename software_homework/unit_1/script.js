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

//Task 4
const subMenuEl = document.getElementById('sub-menu');
//4.1
subMenuEl.style.height = '100%';
//4.2
subMenuEl.style.backgroundColor = 'var(--menu-bg)';
//4.3
subMenuEl.classList.add('flex-around');
//4.4
subMenuEl.style.position = 'absolute';
//4.5
subMenuEl.style.top = 0;


//Task 5 update the menuLink on th etop of js
//5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;
//5.2
topMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.tagName !== 'a'){return}
    console.log(event.target.textContent);
    //5.3
    if (event.target.classList.contains('active')){
        event.target.classList.remove('active');
        showingSubMenu = 'false';
        subMenuEl.style.top = 0;
        return;
    }
//5.4
 for(let link of topMenuLinks){
    link.classList.remove('active');
 }
     //5.5
     event.target.classList.add('active');
     //5.6
     let currentLink
     for(let link of menuLinks){
        if (link.text === event.target.textContent){
            if(link.subLinks){
                showingSubMenu = 'true'}
                else{showingSubMenu = "false";
               //6.4
                mainEl.innerHTML = `<h1>${link.text}</h1>`;
            }
            currentLink=link;
            }
        }
        //5.8
        const buildSubMenu = (subLinks) => {
            subMenuEl.textContent = "";
            for(let link of subLinks){
            const tempEl = document.createElement('a');
            tempEl.setAttribute('href', link.href);
            tempEl.textContent = link.text;
            subMenuEl.appendChild(tempEl);
        }}
        //5.7
        if(showingSubMenu){buildSubMenu(currentLink.subLinks)
        subMenuEl.style.lop = '100%';}
    else{subMenuEl.style.top=0;}
     })

     //6.0
     subMenuEl.addEventListener('click', function(event){
        event.preventDefault();
        if(event.target.tagName !== 'A'){return;}
        console.log(event.target.textContent)
        //6.1
        showingSubMenu='false';
        subMenuEl.style.top = 0;
        //6.2
        for(let link of topMenuLinks){link.classList.remove('active');}
        //6.3
        mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
        //6.4 

     })

     








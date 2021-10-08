console.log('Hello world !');

const comp_btn = document.querySelector('#competences_btn');
const portefolio_btn = document.querySelector('#portefolio_btn');

const sideBar = document.querySelector('.sidebar_before');
const comp = document.querySelector('.competence');
const portefolio = document.querySelector('.portefolio');

console.log(sideBar);
console.log(comp);
console.log(portefolio);

if (window.matchMedia("(min-width: 1024px)").matches) {
    
    console.log('Media Query Matched!');

    comp_btn.addEventListener('click',()=>{
        console.log('Click comp !!');
        
        sideBar.classList.add('sidebar_after');
        comp.style.transform = 'translateY(-101%)';
        portefolio.style.transform = 'translateY(110%)';
    });

     portefolio_btn.addEventListener('click',()=>{
        console.log('click prtfl !!');

        sideBar.classList.add('sidebar_after');
        comp.style.transform = 'translateY(110%)';
        portefolio.style.transform = 'translateY(-101%)';
     })
}
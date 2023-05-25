import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
const header1 = document.querySelector('h1');
const navA = document.querySelectorAll('nav a');
const images = document.querySelectorAll('img');
const text = document.querySelectorAll('p');
const button = document.querySelectorAll('.btn');

header1.addEventListener('mouseover',(e)=>{
   e.target.style.color = "purple";
})
header1.addEventListener('mouseout',(e)=>{
    e.target.style.color = "grey";
 })
 navA.forEach( a =>{
    a.addEventListener('focus',(e)=>{
        e.target.style.background = "purple";
        e.target.style.fontSize = "20px";
        e.target.style.color = "white";
        e.target.style.marginLeft = "5px";
     })
     a.addEventListener("blur", (e) => {
        e.target.style.background = ""; 
    })
 })

 images.forEach( image =>{
    image.addEventListener('click',(e)=>{
        e.target.style.width= "50%";
     })
     image.addEventListener('dblclick',(e) => {
        e.target.style.width= "100%";
     })
     
 })
 
 text.forEach( paragraf =>{
    paragraf.addEventListener('wheel',(e)=>{
        e.target.style.fontSize= "20px";
        e.target.style.color= "purple";
     })
     
 })
 window.addEventListener('load',(e)=>{
    setTimeout(()=>{
        document.querySelector('body').style.background = "black";
        document.querySelector('header').style.background = "black";
        document.querySelector('body').style.color = "white";
        document.querySelector('header').style.color = "white";
    }, '3000')
     }) 
     
     button.forEach( btn =>{
        btn.addEventListener('click',(e)=>{
            alert("are you sure?!")
         })
     })
     window.addEventListener('scroll',(e)=>{
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor = `rgb(
                ${Math.random() * 200},
                ${Math.random() * 200},
                ${Math.random() * 200}
              )`;
        }, '8000')
        setTimeout(()=>{
            document.querySelector('header').style.background = `rgb(
                ${Math.random() * 200},
                ${Math.random() * 200},
                ${Math.random() * 200}
              )`;
        }, '8000')
         
        });
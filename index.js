let btnVideo = document.querySelector('.button');
let video = document.querySelector('.video');

btnVideo.addEventListener('click', func);

function func(){
    video.play();
    btnVideo.style.display = 'none';
    video.controls = 'true';
}

let menuBtn = document.querySelector('.vector2');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    console.log(menu.style.display);
    menu.classList.toggle('menu-active');
    console.log(menu.style.display);
});

let menuLi = document.querySelectorAll('.menu-li');

for(let i = 0; i < menuLi.length; i++){
    menuLi[i].addEventListener('click', function(){
        menuLi[i].style.color = '#252B42';
    });
}


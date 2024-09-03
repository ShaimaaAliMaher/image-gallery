let slider = document.querySelectorAll(".slider .list .item")
let before =document.getElementById("before")
let after = document.getElementById("after")
let thumbnails =document.querySelectorAll(".thumbnails .item")

let countItem = slider.length;
let itemActive =0;

let autumaticallyRun = setInterval(() => { after.onclick() }, 3000)

after.onclick =function (){
    itemActive =itemActive+1;
    if(itemActive >= countItem){
        itemActive=0;
    }
    slideShow()
}
before.onclick = function(){
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem -1;
    }
    slideShow()
}
thumbnails.forEach((thumbnail , index)=>{
    thumbnail.addEventListener('click' ,()=>{
        itemActive =index;
        slideShow()
    })
})
function slideShow(){
    let itemActiveOld = document.querySelector(".slider .list .item.active")
    let thumbnailsActiveOld =document.querySelector(".thumbnails .item.active")
    itemActiveOld.classList.remove('active');
    thumbnailsActiveOld.classList.remove('active')

    slider[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active')

    clearInterval(autumaticallyRun)
    autumaticallyRun = setInterval(() => { after.onclick() }, 3000)
}


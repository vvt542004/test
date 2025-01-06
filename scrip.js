const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log(adressbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"

})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"

})
//slide
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
let index = 0
rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
leftbtn.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNuberLi.forEach(function(image,index){
    image.addEventListener("click", function(){
        document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
    })
})
//----slide-product--one--
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNubertwo = document.querySelectorAll('.slide-product-one-content-items')
rightbtntwo.addEventListener("click", function(){
    index = index + 1
    if(index>imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slide-product-one-content-items-content").style.right = index * 100+"%"
})
leftbtntwo.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNubertwo.length-1
    }
    document.querySelector(".slide-product-one-content-items-content").style.right = index * 100+"%"
})
//slide-product-two--
const rightbtnthree = document.querySelector('.fa-chevron-right-three')
const leftbtnthree = document.querySelector('.fa-chevron-left-three')
const imgNuberthree = document.querySelectorAll('.slide-product-two-content-items')
rightbtnthree.addEventListener("click", function(){
    index = index + 1
    if(index>imgNuberthree.length-1){
        index=0
    }
    document.querySelector(".slide-product-two-content-items-content").style.right = index * 100+"%"
})
leftbtnthree.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuberthree.length-1
    }
    document.querySelector(".slide-product-two-content-items-content").style.right = index * 100+"%"
})
//slide-product-three--
const rightbtnfour = document.querySelector('.fa-chevron-right-four')
const leftbtnfour = document.querySelector('.fa-chevron-left-four')
const imgNuberfour = document.querySelectorAll('.slide-product-three-content-items')
rightbtnfour.addEventListener("click", function(){
    index = index + 1
    if(index>imgNuberfour.length-1){
        index=0
    }
    document.querySelector(".slide-product-three-content-items-content").style.right = index * 100+"%"
})
leftbtnfour.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuberfour.length-1
    }
    document.querySelector(".slide-product-three-content-items-content").style.right = index * 100+"%"
})


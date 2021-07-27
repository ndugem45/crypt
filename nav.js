function toggleMobileMenu(p){
    document.querySelector('#wrapper-mobile-menu').classList.toggle("show")
    document.querySelector('body').classList.toggle("fixScroll")
    p.classList.toggle("on")
}

function togglePanel(e){

    e.classList.toggle("show")
    e.nextElementSibling.classList.toggle("show")

    if(e.nextElementSibling.style.maxHeight){
        e.nextElementSibling.style.maxHeight = null
    }else{
        e.nextElementSibling.style.maxHeight = `${e.nextElementSibling.scrollHeight+32}px`
    }
}
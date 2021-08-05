function toggleMobileMenu(p){
    document.querySelector('body').classList.toggle("fixScroll")
    p.classList.toggle("on")
    $("#wrapper-mobile-menu").slideToggle('fast')
}

function toggleDropdown(e){
    $(".dropdown-wrapper").slideToggle()
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

function detectMob() {
    return window.innerWidth <= 800 && window.innerWidth <= 600 ? true : false
}

function dayNight(){
    var root = document.documentElement;
    var body = document.querySelector("body");
    var dn = body.className.search('dayNight') > -1 ? false : true

    // by var 
    // global 
    root.style.setProperty('--background', dn ? "var(--day-bg-color)" : "var(--night-bg-color)");
    root.style.setProperty('--text-day-night', dn ? "var(--text-day-color)" : "var(--text-night-color)");
    root.style.setProperty('--footer-bg', dn ? "var(--footer-day-color)" : "var(--footer-night-color)");
    root.style.setProperty('--grain-a', dn ? "var(--grain-day)" : "var(--grain-night)");
    root.style.setProperty('--day-elem', dn ? "block" : "none");
    root.style.setProperty('--night-elem', dn ? "none" : "block");
    root.style.setProperty('--invert', dn ? "invert(1) saturate(0)" : "invert(0) saturate(1)");
    

    setTimeout(()=>{
        // home 
        root.style.setProperty('--market-bg', dn ? "var(--day-market)" : "var(--night-market)");
        root.style.setProperty('--slider-itm-bg', dn ? "var(--day-bg-color)" : "var(--footer-night-color)");
        root.style.setProperty('--start-bg', dn ? "var(--start-day)" : "var(--start-night)");
        // direct elem 
        document.querySelector('.active-slider-block > .active').style.background = dn ? '#ffff' : 'transparent';
        document.querySelector('.guide-slide-item.slick-active').style.background = dn ? '#ffff' : 'transparent';
    },200)
    
    body.classList.toggle("dayNight")
}
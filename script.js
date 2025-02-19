
const horizonScroll = document.querySelector(`.carusel`);
const btleft = document.querySelector(`.divleft`);
const btright = document.querySelector(`.divright`);
const btleft2 = document.querySelector(`.btleft`);
const btright2 = document.querySelector(`.btright`);
const horizscroll = document.querySelector(`.carusel2`);

btright.addEventListener(`click`, function() {
    horizonScroll.style.scrollBehavior = `smooth`
    horizonScroll.scrollLeft += 1350;

});

btleft.addEventListener(`click`, function() {
    horizonScroll.style.scrollBehavior = `smooth`
    horizonScroll.scrollLeft -= 1350;

});

                    //    Carusel-2

btright2.addEventListener(`click`, function() {
    horizscroll.style.scrollBehavior = `smooth`
    horizscroll.scrollLeft += 2281;
});

btleft2.addEventListener(`click`, function() {
    horizscroll.style.scrollBehavior = `smooth`
    horizscroll.scrollLeft -= 2281;
});

                    // Po-Up

const btopen = document.querySelector(`.btopen`);
const popupbg = document.querySelector(`.popupbg`);
const closedpoUp = document.querySelector(`.but`);
const popupopen = document.querySelector(`.btopens`);
const popubg = document.querySelector(`.popubg`);
const closepoUp = document.querySelector(`.butt`);
const popopen = document.querySelector(`.btope`);
const popbg = document.querySelector(`.popubg3`);
const clospoUp = document.querySelector(`.butt3`);
const poopen = document.querySelector(`.btop`);
const popbgraind = document.querySelector(`.popubg4`);
const closzedpoUp = document.querySelector(`.butt4`);
const btopens = document.querySelector(`.opens`);
const popupbgroud = document.querySelector(`.popubg5`);
const closed = document.querySelector(`.butt5`);
const bopen = document.querySelector(`.open`);
const popupbgrou = document.querySelector(`.popubg6`);
const clos = document.querySelector(`.butt6`);

btopen.addEventListener(`click`, function() {
    popupbg.style.display = `flex`
});

closedpoUp.addEventListener(`click`, function() {
    popupbg.style.display = `none`
});

popupopen.addEventListener(`click`, function() {
    popubg.style.display = `flex`
});

closepoUp.addEventListener(`click`, function() {
    popubg.style.display = `none`
});

popopen.addEventListener(`click`, function() {
    popbg.style.display = `flex`
});

clospoUp.addEventListener(`click`, function() {
    popbg.style.display = `none`
});

poopen.addEventListener(`click`, function() {
    popbgraind.style.display = `flex`
});

closzedpoUp.addEventListener(`click`, function() {
    popbgraind.style.display = `none`
});

btopens.addEventListener(`click`, function() {
    popupbgroud.style.display = `flex`
});

closed.addEventListener(`click`, function() {
    popupbgroud.style.display = `none`
});

bopen.addEventListener(`click`, function() {
    popupbgrou.style.display = `flex`
});

clos.addEventListener(`click`, function() {
    popupbgrou.style.display = `none`
});

                    // Go-Up

const btgoTop = document.querySelector(".goTop");
btgoTop.addEventListener("click", gotop);
window.addEventListener("scroll", trackscroll);

function trackscroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if(offset > coords) {
        btgoTop.classList.add("gotop-show");
    }
    else {
        btgoTop.classList.remove("gotop-show");
    }
};

function gotop() {
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -77);
        setTimeout(gotop, 0)
    }
};

                    //    Animation


let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

let observer = new IntersectionObserver(callback);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target);
});


                    // Поиск

const openserch = document.querySelector(`.imgserch`);                
const divserch = document.querySelector(`.divserch`);
const closedserch = document.querySelector(`.closedserch`);
const liend = document.querySelector(`.liend`);

openserch.addEventListener(`click`, function() {

    let style = getComputedStyle(divserch);
    if(style.display === `none`) {
        divserch.style.display = `grid`
        divserch.style.opacity = `1`
        divserch.style.right = `-30px`
        liend.style.marginRight = `170px`
    }
});

closedserch.addEventListener(`click`, function() {

    let style = getComputedStyle(divserch);
    if(style.display === `grid`) {
        divserch.style.display = `none`
        divserch.style.opacity = `0`
        divserch.style.right = `-130px`
        liend.style.marginRight = `20px`
    }

});

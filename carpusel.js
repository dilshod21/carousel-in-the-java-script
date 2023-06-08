let slides = document.querySelectorAll(".slide-image"),
    prevBtn =document.querySelector(".prev"),
    next = document.querySelector(".next"),
    slideHome = document.querySelector(".slide-home");


let parentPaginations = document.querySelector(".indicators-parent");
let indicators = document.querySelectorAll(".slider-indicator");






let idx = 0;



function nextSlide(){
    if(idx > slides.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = slides.length - 1;
    };
    
    indicators.forEach((item) => {
        item.classList.remove("active");
    });
    indicators[idx].classList.add("active");
    slideHome.style.transform = `translateX(${-idx * 100}%)`;
};



next.addEventListener("click", () =>{
    idx++;
    nextSlide();
});



prevBtn.addEventListener("click", () =>{
    idx--;
    nextSlide();
});



parentPaginations.addEventListener("click", (e) => {
    let eTarget = e.target;

    if(eTarget && eTarget.classList.contains("slider-indicator")){
        indicators.forEach((item, index) => {
            if(item == eTarget){
                idx = index;
                nextSlide();
            }
        });
    }
});

nextSlide();
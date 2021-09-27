const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const slidesNum = slides.length;
var current = 0;
nextBtn.addEventListener('click', function(){
    for(var idx = 0; idx < slidesNum; idx++){
        slides[idx].classList.remove('active');
        slideIcons[idx].classList.remove('active');
    }
    current ++;

    if (current > (slidesNum - 1)){
        current = 0 ;
    }
    slides[current].classList.add('active');
    slideIcons[current].classList.add('active');
});
prevBtn.addEventListener('click', function(){
    for(var idx = 0; idx < slidesNum; idx++){
        slides[idx].classList.remove('active');
        slideIcons[idx].classList.remove('active');
    }
    current --;
    if (current < 0){
        current = slidesNum - 1;
    }
    slides[current].classList.add('active');
    slideIcons[current].classList.add('active');
});
var playSlider;
function repeater(){
    playSlider = setInterval(function(){
        for(var idx = 0; idx < slidesNum; idx++){
            slides[idx].classList.remove('active');
            slideIcons[idx].classList.remove('active');
        }
        current ++;
    
        if (current > (slidesNum - 1)){
            current = 0 ;
        }
        slides[current].classList.add('active');
        slideIcons[current].classList.add('active');
    },3500)
}
repeater();

slider.addEventListener('mouseover', function(){
    clearInterval(playSlider)
})

slider.addEventListener('mouseout', function(){
    repeater();

})
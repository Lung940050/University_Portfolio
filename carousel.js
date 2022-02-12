let carousel = document.querySelector('.carousel');

let carouselInner = document.querySelector('.carousel-inner');

let prev = document.querySelector('.carousel-controls .prev');

let next = document.querySelector('.carousel-controls .next');

let slides =  document.querySelectorAll('.carousel-inner .carousel-item');

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000;

let time;


console.log(slides);
//Init carousel
carouselInner.style.minWidth = (totalSlides * 100) + '%';
loadIndicators();
loop(true);


//Carousel events

next.addEventListener('click',()=>{
    slideToNext();
});

prev.addEventListener('click',()=>{
    slideToPrev();
});

carouselInner.addEventListener('transitionend',()=>{
    if(direction === -1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide++;
                carouselInner.append(carouselInner.firstElementChild);
            }
        }else{
            activeSlide++;
            carouselInner.append(carouselInner.firstElementChild);
        }
    }else if(direction === 1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide--;
                carouselInner.prepend(carouselInner.lastElementChild);
            }
        }else{
            activeSlide--;
            carouselInner.prepend(carouselInner.lastElementChild);
        }
    };

    carouselInner.style.transition = 'none';
    carouselInner.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump = 1;
        carouselInner.style.transition = 'all ease .5s';
    });
    updateIndicators();
});

document.querySelectorAll('.carousel-indicators span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators = document.querySelectorAll('.carousel-indicators span');

        indicators.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator = index
            }
        })

        if(slideTo - activeIndicator > 1){
            jump = slideTo - activeIndicator;
            step = jump * step;
            slideToNext();
        }else if(slideTo - activeIndicator === 1){
            slideToNext();
        }else if(slideTo - activeIndicator < 0){

            if(Math.abs(slideTo - activeIndicator) > 1){
                jump = Math.abs(slideTo - activeIndicator);
                step = jump * step;
                slideToPrev();
            }
                slideToPrev();
        }
        step = 100 / totalSlides; 
    })
});

carousel.addEventListener('mouseover',()=>{
    loop(false);
})

carousel.addEventListener('mouseout',()=>{
    loop(true);
})

//Carousel functions

function loadIndicators(){
    slides.forEach((slide,index)=>{
        if(index === 0){
         
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators(){
    if(activeSlide > (totalSlides - 1)){
        activeSlide = 0;
    }else if(activeSlide < 0){
        activeSlide = (totalSlides - 1);
    }
    document.querySelector('.carousel-indicators span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators span')[activeSlide].classList.add('active');
};

function slideToNext(){
    if(direction === 1){
        direction = -1;
        carouselInner.prepend(carouselInner.lastElementChild);
    };
    console.log ('up',direction);
    carousel.style.justifyContent = 'flex-start';
    carouselInner.style.transform = `translateX(-${step}%)`;
};

function slideToPrev(){
    if(direction === -1){
        direction = 1;
        carouselInner.append(carouselInner.firstElementChild);
    };
    carousel.style.justifyContent = 'flex-end'
    carouselInner.style.transform = `translateX(${step}%)`;
};

function loop(status){
    if(status === true){
        time = setInterval(()=>{
            console.log(status)
            slideToNext();
        },interval);
    }else{
        clearInterval(time);
    }
}



let carousel2 = document.querySelector('.carousel2');

let carouselInner2 = document.querySelector('.carousel-inner2');

let prev2 = document.querySelector('.carousel-controls2 .prev2');

let next2 = document.querySelector('.carousel-controls2 .next2');

let slides2 =  document.querySelectorAll('.carousel-inner2 .carousel-item2');

let totalSlides2 = slides2.length;

let step2 = 100 / totalSlides2;

let activeSlide2 = 0;

let activeIndicator2 = 0;

let direction2 = -1;

let jump2 = 1;

let interval2 = 5000;

let time2;



//Init carousel
carouselInner2.style.minWidth = (totalSlides2 * 100) + '%';
loadIndicators2();
loop2(true);


//Carousel events

next2.addEventListener('click',()=>{
    slideToNext2();
});

prev2.addEventListener('click',()=>{
    slideToPrev2();
});

carouselInner2.addEventListener('transitionend',()=>{
    if(direction2 === -1){
        if(jump2 > 1){
            for(let i = 0; i < jump2; i++){
                activeSlide2++;
                carouselInner2.append(carouselInner2.firstElementChild);
            }
        }else{
            activeSlide2++;
            carouselInner2.append(carouselInner2.firstElementChild);
        }
    }else if(direction2 === 1){
        if(jump2 > 1){
            for(let i = 0; i < jump2; i++){
                activeSlide2--;
                carouselInner2.prepend(carouselInner2.lastElementChild);
            }
        }else{
            activeSlide2--;
            carouselInner2.prepend(carouselInner2.lastElementChild);
        }
    };

    carouselInner2.style.transition = 'none';
    carouselInner2.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump2 = 1;
        carouselInner2.style.transition = 'all ease .5s';
    });
    updateIndicators2();
});

document.querySelectorAll('.carousel-indicators2 span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators2 = document.querySelectorAll('.carousel-indicators2 span');

        indicators2.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator2 = index
            }
        })

        if(slideTo - activeIndicator2 > 1){
            jump2 = slideTo - activeIndicator2;
            step2 = jump2 * step2;
            slideToNext2();
        }else if(slideTo - activeIndicator2 === 1){
            slideToNext2();
        }else if(slideTo - activeIndicator2 < 0){

            if(Math.abs(slideTo - activeIndicator2) > 1){
                jump2 = Math.abs(slideTo - activeIndicator2);
                step2 = jump2 * step2;
                slideToPrev2();
            }
                slideToPrev2();
        }
        step2 = 100 / totalSlides2; 
    })
});

carousel2.addEventListener('mouseover',()=>{
    loop2(false);
})

carousel2.addEventListener('mouseout',()=>{
    loop2(true);
})

//Carousel functions

function loadIndicators2(){
    slides2.forEach((slide,index)=>{
        if(index === 0){
         
            document.querySelector('.carousel-indicators2').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators2').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators2(){
    if(activeSlide2 > (totalSlides2 - 1)){
        activeSlide2 = 0;
    }else if(activeSlide2 < 0){
        activeSlide2 = (totalSlides2 - 1);
    }
    document.querySelector('.carousel-indicators2 span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators2 span')[activeSlide2].classList.add('active');
};

function slideToNext2(){
    if(direction2 === 1){
        direction2 = -1;
        carouselInner2.prepend(carouselInner2.lastElementChild);
    };
    carousel2.style.justifyContent = 'flex-start';
    carouselInner2.style.transform = `translateX(-${step2}%)`;
};

function slideToPrev2(){
    if(direction2 === -1){
        direction2 = 1;
        carouselInner2.append(carouselInner2.firstElementChild);
    };
    carousel2.style.justifyContent = 'flex-end'
    carouselInner2.style.transform = `translateX(${step2}%)`;
};

function loop2(status){
    if(status === true){
        time2 = setInterval(()=>{
  
            slideToNext2();
        },interval2);
    }else{
        clearInterval(time2);
    }
}




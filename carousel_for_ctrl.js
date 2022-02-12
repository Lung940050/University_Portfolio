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


let carousel3 = document.querySelector('.carousel3');

let carouselInner3 = document.querySelector('.carousel-inner3');

let prev3 = document.querySelector('.carousel-controls3 .prev3');

let next3 = document.querySelector('.carousel-controls3 .next3');

let slides3 =  document.querySelectorAll('.carousel-inner3 .carousel-item3');

let totalSlides3 = slides3.length;

let step3 = 100 / totalSlides3;

let activeSlide3 = 0;

let activeIndicator3 = 0;

let direction3 = -1;

let jump3 = 1;

let interval3 = 5000;

let time3;



//Init carousel
carouselInner3.style.minWidth = (totalSlides3 * 100) + '%';
loadIndicators3();
loop3(true);


//Carousel events

next3.addEventListener('click',()=>{
    slideToNext3();
});

prev3.addEventListener('click',()=>{
    slideToPrev3();
});

carouselInner3.addEventListener('transitionend',()=>{
    if(direction3 === -1){
        if(jump3 > 1){
            for(let i = 0; i < jump3; i++){
                activeSlide3++;
                carouselInner3.append(carouselInner3.firstElementChild);
            }
        }else{
            activeSlide3++;
            carouselInner3.append(carouselInner3.firstElementChild);
        }
    }else if(direction3 === 1){
        if(jump3 > 1){
            for(let i = 0; i < jump3; i++){
                activeSlide3--;
                carouselInner3.prepend(carouselInner3.lastElementChild);
            }
        }else{
            activeSlide3--;
            carouselInner3.prepend(carouselInner3.lastElementChild);
        }
    };

    carouselInner3.style.transition = 'none';
    carouselInner3.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump3 = 1;
        carouselInner3.style.transition = 'all ease .5s';
    });
    updateIndicators3();
});

document.querySelectorAll('.carousel-indicators3 span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators3 = document.querySelectorAll('.carousel-indicators3 span');

        indicators3.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator3 = index
            }
        })

        if(slideTo - activeIndicator3 > 1){
            jump3 = slideTo - activeIndicator3;
            step3 = jump3 * step3;
            slideToNext3();
        }else if(slideTo - activeIndicator3 === 1){
            slideToNext3();
        }else if(slideTo - activeIndicator3 < 0){

            if(Math.abs(slideTo - activeIndicator3) > 1){
                jump3 = Math.abs(slideTo - activeIndicator3);
                step3 = jump3 * step3;
                slideToPrev3();
            }
                slideToPrev3();
        }
        step3 = 100 / totalSlides3; 
    })
});

carousel3.addEventListener('mouseover',()=>{
    loop3(false);
})

carousel3.addEventListener('mouseout',()=>{
    loop3(true);
})

//Carousel functions

function loadIndicators3(){
    slides3.forEach((slide,index)=>{
        if(index === 0){
         
            document.querySelector('.carousel-indicators3').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators3').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators3(){
    if(activeSlide3 > (totalSlides3 - 1)){
        activeSlide3 = 0;
    }else if(activeSlide3 < 0){
        activeSlide3 = (totalSlides3 - 1);
    }
    document.querySelector('.carousel-indicators3 span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators3 span')[activeSlide3].classList.add('active');
};

function slideToNext3(){
    if(direction3 === 1){
        direction3 = -1;
        carouselInner3.prepend(carouselInner3.lastElementChild);
    };
    carousel3.style.justifyContent = 'flex-start';
    carouselInner3.style.transform = `translateX(-${step3}%)`;
};

function slideToPrev3(){
    if(direction3 === -1){
        direction3 = 1;
        carouselInner3.append(carouselInner3.firstElementChild);
    };
    carousel3.style.justifyContent = 'flex-end'
    carouselInner3.style.transform = `translateX(${step3}%)`;
};

function loop3(status){
    if(status === true){
        time3 = setInterval(()=>{
  
            slideToNext3();
        },interval3);
    }else{
        clearInterval(time3);
    }
}


let carousel4 = document.querySelector('.carousel4');

let carouselInner4 = document.querySelector('.carousel-inner4');

let prev4 = document.querySelector('.carousel-controls4 .prev4');

let next4 = document.querySelector('.carousel-controls4 .next4');

let slides4 =  document.querySelectorAll('.carousel-inner4 .carousel-item4');

let totalSlides4 = slides4.length;

let step4 = 100 / totalSlides4;

let activeSlide4 = 0;

let activeIndicator4 = 0;

let direction4 = -1;

let jump4 = 1;

let interval4 = 5000;

let time4;



//Init carousel
carouselInner4.style.minWidth = (totalSlides4 * 100) + '%';
loadIndicators4();
loop4(true);


//Carousel events

next4.addEventListener('click',()=>{
    slideToNext4();
});

prev4.addEventListener('click',()=>{
    slideToPrev4();
});

carouselInner4.addEventListener('transitionend',()=>{
    if(direction4 === -1){
        if(jump4 > 1){
            for(let i = 0; i < jump4; i++){
                activeSlide4++;
                carouselInner4.append(carouselInner4.firstElementChild);
            }
        }else{
            activeSlide4++;
            carouselInner4.append(carouselInner4.firstElementChild);
        }
    }else if(direction4 === 1){
        if(jump4 > 1){
            for(let i = 0; i < jump4; i++){
                activeSlide4--;
                carouselInner4.prepend(carouselInner4.lastElementChild);
            }
        }else{
            activeSlide4--;
            carouselInner4.prepend(carouselInner4.lastElementChild);
        }
    };

    carouselInner4.style.transition = 'none';
    carouselInner4.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump4 = 1;
        carouselInner4.style.transition = 'all ease .5s';
    });
    updateIndicators4();
});

document.querySelectorAll('.carousel-indicators4 span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators4 = document.querySelectorAll('.carousel-indicators4 span');

        indicators4.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator4 = index
            }
        })

        if(slideTo - activeIndicator4 > 1){
            jump4 = slideTo - activeIndicator4;
            step4 = jump4 * step4;
            slideToNext4();
        }else if(slideTo - activeIndicator4 === 1){
            slideToNext4();
        }else if(slideTo - activeIndicator4 < 0){

            if(Math.abs(slideTo - activeIndicator4) > 1){
                jump4 = Math.abs(slideTo - activeIndicator4);
                step4 = jump4 * step4;
                slideToPrev4();
            }
                slideToPrev4();
        }
        step4 = 100 / totalSlides4; 
    })
});

carousel4.addEventListener('mouseover',()=>{
    loop4(false);
})

carousel4.addEventListener('mouseout',()=>{
    loop4(true);
})

//Carousel functions

function loadIndicators4(){
    slides4.forEach((slide,index)=>{
        if(index === 0){
         
            document.querySelector('.carousel-indicators4').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators4').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators4(){
    if(activeSlide4 > (totalSlides4 - 1)){
        activeSlide4 = 0;
    }else if(activeSlide4 < 0){
        activeSlide4 = (totalSlides4 - 1);
    }
    document.querySelector('.carousel-indicators4 span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators4 span')[activeSlide4].classList.add('active');
};

function slideToNext4(){
    if(direction4 === 1){
        direction4 = -1;
        carouselInner4.prepend(carouselInner4.lastElementChild);
    };
    carousel4.style.justifyContent = 'flex-start';
    carouselInner4.style.transform = `translateX(-${step4}%)`;
};

function slideToPrev4(){
    if(direction4 === -1){
        direction4 = 1;
        carouselInner4.append(carouselInner4.firstElementChild);
    };
    carousel4.style.justifyContent = 'flex-end'
    carouselInner4.style.transform = `translateX(${step4}%)`;
};

function loop4(status){
    if(status === true){
        time4 = setInterval(()=>{
  
            slideToNext4();
        },interval4);
    }else{
        clearInterval(time4);
    }
}


let carousel5 = document.querySelector('.carousel5');

let carouselInner5 = document.querySelector('.carousel-inner5');

let prev5 = document.querySelector('.carousel-controls5 .prev5');

let next5 = document.querySelector('.carousel-controls5 .next5');

let slides5 =  document.querySelectorAll('.carousel-inner5 .carousel-item5');

let totalSlides5 = slides5.length;

let step5 = 100 / totalSlides5;

let activeSlide5 = 0;

let activeIndicator5 = 0;

let direction5 = -1;

let jump5 = 1;

let interval5 = 5000;

let time5;



//Init carousel
carouselInner5.style.minWidth = (totalSlides5 * 100) + '%';
loadIndicators5();
loop5(true);


//Carousel events

next5.addEventListener('click',()=>{
    slideToNext5();
});

prev5.addEventListener('click',()=>{
    slideToPrev5();
});

carouselInner5.addEventListener('transitionend',()=>{
    if(direction5 === -1){
        if(jump5 > 1){
            for(let i = 0; i < jump5; i++){
                activeSlide5++;
                carouselInner5.append(carouselInner5.firstElementChild);
            }
        }else{
            activeSlide5++;
            carouselInner5.append(carouselInner5.firstElementChild);
        }
    }else if(direction5 === 1){
        if(jump5 > 1){
            for(let i = 0; i < jump5; i++){
                activeSlide5--;
                carouselInner5.prepend(carouselInner5.lastElementChild);
            }
        }else{
            activeSlide5--;
            carouselInner5.prepend(carouselInner5.lastElementChild);
        }
    };

    carouselInner5.style.transition = 'none';
    carouselInner5.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump5 = 1;
        carouselInner5.style.transition = 'all ease .5s';
    });
    updateIndicators5();
});

document.querySelectorAll('.carousel-indicators5 span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators5 = document.querySelectorAll('.carousel-indicators5 span');

        indicators5.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator5 = index
            }
        })

        if(slideTo - activeIndicator5 > 1){
            jump5 = slideTo - activeIndicator5;
            step5 = jump5 * step5;
            slideToNext5();
        }else if(slideTo - activeIndicator5 === 1){
            slideToNext5();
        }else if(slideTo - activeIndicator5 < 0){

            if(Math.abs(slideTo - activeIndicator5) > 1){
                jump5 = Math.abs(slideTo - activeIndicator5);
                step5 = jump5 * step5;
                slideToPrev5();
            }
                slideToPrev5();
        }
        step5 = 100 / totalSlides5; 
    })
});

carousel5.addEventListener('mouseover',()=>{
    loop5(false);
})

carousel5.addEventListener('mouseout',()=>{
    loop5(true);
})

//Carousel functions

function loadIndicators5(){
    slides5.forEach((slide,index)=>{
        if(index === 0){
         
            document.querySelector('.carousel-indicators5').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators5').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators5(){
    if(activeSlide5 > (totalSlides5 - 1)){
        activeSlide5 = 0;
    }else if(activeSlide5 < 0){
        activeSlide5 = (totalSlides5 - 1);
    }
    document.querySelector('.carousel-indicators5 span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators5 span')[activeSlide5].classList.add('active');
};

function slideToNext5(){
    if(direction5 === 1){
        direction5 = -1;
        carouselInner5.prepend(carouselInner5.lastElementChild);
    };
    carousel5.style.justifyContent = 'flex-start';
    carouselInner5.style.transform = `translateX(-${step5}%)`;
};

function slideToPrev5(){
    if(direction5 === -1){
        direction5 = 1;
        carouselInner5.append(carouselInner5.firstElementChild);
    };
    carousel5.style.justifyContent = 'flex-end'
    carouselInner5.style.transform = `translateX(${step5}%)`;
};

function loop5(status){
    if(status === true){
        time5 = setInterval(()=>{
  
            slideToNext5();
        },interval5);
    }else{
        clearInterval(time5);
    }
}



let carousel6 = document.querySelector('.carousel6');

let carouselInner6 = document.querySelector('.carousel-inner6');

let prev6 = document.querySelector('.carousel-controls6 .prev6');

let next6 = document.querySelector('.carousel-controls6 .next6');

let slides6 =  document.querySelectorAll('.carousel-inner6 .carousel-item6');

let totalSlides6 = slides6.length;

let step6 = 100 / totalSlides6;

let activeSlide6 = 0;

let activeIndicator6 = 0;

let direction6 = -1;

let jump6 = 1;

let interval6 = 5000;

let time6;



//Init carousel
carouselInner6.style.minWidth = (totalSlides6 * 100) + '%';
loadIndicators6();
loop6(true);


//Carousel events

next6.addEventListener('click',()=>{
    slideToNext6();
});

prev6.addEventListener('click',()=>{
    slideToPrev6();
});

carouselInner6.addEventListener('transitionend',()=>{
    if(direction6 === -1){
        if(jump6 > 1){
            for(let i = 0; i < jump6; i++){
                activeSlide6++;
                carouselInner6.append(carouselInner6.firstElementChild);
            }
        }else{
            activeSlide6++;
            carouselInner6.append(carouselInner6.firstElementChild);
        }
    }else if(direction6 === 1){
        if(jump6 > 1){
            for(let i = 0; i < jump6; i++){
                activeSlide6--;
                carouselInner6.prepend(carouselInner6.lastElementChild);
            }
        }else{
            activeSlide6--;
            carouselInner6.prepend(carouselInner6.lastElementChild);
        }
    };

    carouselInner6.style.transition = 'none';
    carouselInner6.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump6 = 1;
        carouselInner6.style.transition = 'all ease .5s';
    });
    updateIndicators6();
});

document.querySelectorAll('.carousel-indicators6 span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators6 = document.querySelectorAll('.carousel-indicators6 span');

        indicators6.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator6 = index
            }
        })

        if(slideTo - activeIndicator6 > 1){
            jump6 = slideTo - activeIndicator6;
            step6 = jump6 * step6;
            slideToNext6();
        }else if(slideTo - activeIndicator6 === 1){
            slideToNext6();
        }else if(slideTo - activeIndicator6 < 0){

            if(Math.abs(slideTo - activeIndicator6) > 1){
                jump6 = Math.abs(slideTo - activeIndicator6);
                step6 = jump6 * step6;
                slideToPrev6();
            }
                slideToPrev6();
        }
        step6 = 100 / totalSlides6; 
    })
});

carousel6.addEventListener('mouseover',()=>{
    loop6(false);
})

carousel6.addEventListener('mouseout',()=>{
    loop6(true);
})

//Carousel functions

function loadIndicators6(){
    slides6.forEach((slide,index)=>{
        if(index === 0){
         
            document.querySelector('.carousel-indicators6').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators6').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators6(){
    if(activeSlide6 > (totalSlides6 - 1)){
        activeSlide6 = 0;
    }else if(activeSlide6 < 0){
        activeSlide6 = (totalSlides6 - 1);
    }
    document.querySelector('.carousel-indicators6 span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators6 span')[activeSlide6].classList.add('active');
};

function slideToNext6(){
    if(direction6 === 1){
        direction6 = -1;
        carouselInner6.prepend(carouselInner6.lastElementChild);
    };
    carousel6.style.justifyContent = 'flex-start';
    carouselInner6.style.transform = `translateX(-${step6}%)`;
};

function slideToPrev6(){
    if(direction6 === -1){
        direction6 = 1;
        carouselInner6.append(carouselInner6.firstElementChild);
    };
    carousel6.style.justifyContent = 'flex-end'
    carouselInner6.style.transform = `translateX(${step6}%)`;
};

function loop6(status){
    if(status === true){
        time6 = setInterval(()=>{
  
            slideToNext6();
        },interval6);
    }else{
        clearInterval(time6);
    }
}
const cardBtn = document.querySelectorAll('.price__button')
const priceCards = document.querySelectorAll('.price__card');


cardBtn.forEach(e => {
    e.addEventListener('click', (event)=>{
        if (!event.target.classList.contains('.price__button')) {
            
            if (event.target.parentNode.classList.contains('price__card--selected')) {
                event.target.parentNode.classList.remove('price__card--selected')
            } else {
                for (let i = 0; i < priceCards.length; i++) {
                    if(priceCards[i].classList.contains('price__card--selected')){
                        priceCards[i].classList.remove('price__card--selected')
                    }            
                }
                event.target.parentNode.classList.add('price__card--selected')
            }
        }
    })
});
$(function(){
    $('.review__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 760,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
          ]
    })
    if ($(window).width() < 1000) {
        $('.footer__services-title').on('click', function() {
            $('.footer__services-title').toggleClass('active').next().slideToggle(300)
        })
        $('.footer__about-title').on('click', function() {
            $('.footer__about-title').toggleClass('active').next().slideToggle(300)
        })
    }
    $('.reasons__sentense-01').on('click', function(){
        $('.reasons__article').removeClass('reasons__article--active')
        $('.reasons__article-01').toggleClass('reasons__article--active')
    })
    $('.reasons__sentense-02').on('click', function(){
        $('.reasons__article').removeClass('reasons__article--active')
        $('.reasons__article-02').toggleClass('reasons__article--active')
    })
    $('.reasons__sentense-03').on('click', function(){
        $('.reasons__article').removeClass('reasons__article--active')
        $('.reasons__article-03').toggleClass('reasons__article--active')
    })
    $('.reasons__sentense-04').on('click', function(){
        $('.reasons__article').removeClass('reasons__article--active')
        $('.reasons__article-04').toggleClass('reasons__article--active')
    })
    $('.reasons__sentense-05').on('click', function(){
        $('.reasons__article').removeClass('reasons__article--active')
        $('.reasons__article-05').toggleClass('reasons__article--active')
    })
   
})
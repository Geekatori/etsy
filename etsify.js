const imageCarousel = document.querySelectorAll('#image-carousel li');

Array.prototype.forEach.call(imageCarousel, function(el, i){
    for(let i = 0; i < imageCarousel.length; i++) {
        let imageurl = el.getAttribute('data-full-image-href');
        el.querySelector('img').src = imageurl;
        el.querySelector('img').removeAttribute('srcset');
    }
});

const imageCarouselPane = document.querySelectorAll('.carousel-pane-list li img');

Array.prototype.forEach.call(imageCarouselPane, function(el, i){
    for(let i = 0; i < imageCarouselPane.length; i++) {
        let imageurl = el.getAttribute('data-src-zoom-image');
        el.src = imageurl;
        el.removeAttribute('srcset');
        el.removeAttribute('data-srcset');
        el.removeAttribute('data-src');
    }
});

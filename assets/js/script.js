$(document).ready(function() {
    AOS.init();

    $('.carousel').slick({
        slidesToShow: 2,
        slidesToShow: 5,
        dots: false,
        infinite: true,
        centerMode: true,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

// Slick version 1.5.8

(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
$(document).ready(function(){

    $('a[href^="#"]').on('click',function (e) {
        var target = this.hash
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 0
        }, 1000, 'swing', function () {
            window.location.hash = target;   
        });
    });
}); 
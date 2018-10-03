$(document).ready(function() {
    // Pricing Boxes
    var option = $(".option");

    option.on("mouseover", function(){
        option.removeClass("option--active");
        $(this).addClass("option--active");
    });

    var included = $(".included");

    included.on("mouseover", function(){
        included.find(".included__bullet").removeClass("included__bullet--active");
        $(this).find(".included__bullet").addClass("included__bullet--active");
    });
    
    // Smooth Scroll
    $("nav a, .to-contact").click(function(event) {
        event.preventDefault();

        if(this.hash !== "")  {
            $('html, body').stop(true).animate({
                scrollTop: $(this.hash).offset().top
            },400);   
        } 
    });
});

$(window).on('load', function() {

    var mobileCarousels = [
        $('.portfolio')
    ],
    owlOptions = {
        loop: false,
        margin: 10,
        responsive: {
            0: {
                loop: true,
                stagePadding: 40,
                items: 1
            }
        }
    };

    if ( $(window).width() < 768 ) {
        for(i=0; i < mobileCarousels.length; i++) {
            var owlActive = mobileCarousels[i];
            owlActive.owlCarousel(owlOptions);
        }
    } else {
        for(i=0; i < mobileCarousels.length; i++) {
            var owlActive = mobileCarousels[i];
            owlActive.addClass('off');
        }
    }

    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                for(i=0; i < mobileCarousels.length; i++) {
                    var owlActive = mobileCarousels[i];
                    owlActive.owlCarousel(owlOptions);
                    owlActive.removeClass('off');
                }
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                for(i=0; i < mobileCarousels.length; i++) {
                    var owlActive = mobileCarousels[i];
                    owlActive.addClass('off').trigger('destroy.owl.carousel');
                    owlActive.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        }
    });

    $(".owl-item").addClass("col");
});
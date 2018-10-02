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
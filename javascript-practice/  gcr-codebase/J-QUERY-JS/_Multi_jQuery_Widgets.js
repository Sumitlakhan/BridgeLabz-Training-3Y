
// Version 2 handles modal and tooltips
$(document).ready(function () {

    // 2. Show modal
    $("#showModal").click(function () {
        $("#modal").fadeIn();
    });

    // Close modal
    $("#closeModal").click(function () {
        $("#modal").fadeOut();
    });

    // 4. Tooltip on hover
    $(".widget").hover(
        function () {
            $(this).append(
                "<p class='tooltip'>" + $(this).attr("title") + "</p>"
            );
        },
        function () {
            $(this).find(".tooltip").remove();
        }
    );

});

// Version 1 handles carousel and active widgets
jq1(document).ready(function () {

    // 1. Carousel rotation
    let slides = jq1(".slide");
    let index = 0;

    slides.hide();
    slides.eq(0).show();

    setInterval(function () {

        slides.eq(index).fadeOut(300);

        index = (index + 1) % slides.length;

        slides.eq(index).fadeIn(300);

    }, 3000);

    // 3. Highlight active widget
    jq1(".widget").click(function () {

        jq1(".widget").removeClass("active");

        jq1(this).addClass("active");

    });

});

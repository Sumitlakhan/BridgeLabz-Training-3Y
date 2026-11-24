
$(document).ready(function () {

    // 1. Toggle answer
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // 2. Hover changes question color
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // 3. Double click closes all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // 4. Focus highlights parent question
    $(".answer input").focus(function () {
        $(this).closest(".faq").find(".question")
            .css("background", "yellow");
    });

    // 5. Blur resets background
    $(".answer input").blur(function () {
        $(this).closest(".faq").find(".question")
            .css("background", "");
    });

});

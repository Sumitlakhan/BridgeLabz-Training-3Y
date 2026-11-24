
$(document).ready(function () {

    // 1. Hide specific banner
    $("#hide").click(function () {
        $(".banner").first().hide();
    });

    // 2. Show all banners
    $("#show").click(function () {
        $(".banner").show();
    });

    // 3. Slide up
    $("#slideUp").click(function () {
        $(".banner").slideUp();
    });

    // 3. Slide down
    $("#slideDown").click(function () {
        $(".banner").slideDown();
    });

    // 4. Fade out
    $("#fadeOut").click(function () {
        $(".banner").fadeOut(500);
    });

    // 4. Fade in
    $("#fadeIn").click(function () {
        $(".banner").fadeIn(500);
    });

    // 5. Automatic rotation every 5 seconds
    let index = 0;
    let banners = $(".banner");

    banners.hide().eq(0).show();

    setInterval(function () {
        banners.eq(index).fadeOut(400);

        index = (index + 1) % banners.length;

        banners.eq(index).fadeIn(400);
    }, 5000);

});

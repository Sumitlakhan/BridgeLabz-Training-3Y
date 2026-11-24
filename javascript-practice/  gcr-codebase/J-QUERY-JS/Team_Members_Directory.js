
$(document).ready(function () {

    // 1. Click manager to highlight direct reports
    $(".manager").click(function () {
        $(this).siblings(".reports")
            .children(".employee")
            .toggleClass("highlight");
    });

    // 2. Hover employee to show contact using next()
    $(".employee").hover(
        function () {
            $(this).find(".contact").show();
        },
        function () {
            $(this).find(".contact").hide();
        }
    );

    // 3. Click department to change member background
    $(".department-title").click(function () {
        $(this).parent().children(".team")
            .find(".member")
            .css("background", "lightblue");
    });

    // 4. Select random employee and highlight siblings
    $("#randomEmployee").click(function () {
        let employees = $(".employee");

        employees.removeClass("highlight");

        let random = Math.floor(Math.random() * employees.length);

        let selected = employees.eq(random);

        selected.addClass("highlight");
        selected.siblings(".employee").addClass("highlight");
    });

    // 5. Collapse and expand team using parent() and find()
    $("#collapseTeam").click(function () {
        $(".department-title").parent()
            .find(".team").toggle();
    });

});

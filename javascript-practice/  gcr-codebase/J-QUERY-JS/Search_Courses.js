
$(document).ready(function () {

    // 1. Search courses using keyup()
    $("#search").keyup(function () {

        let value = $(this).val().toLowerCase();
        let count = 0;

        $("#courseList li").each(function () {

            let text = $(this).text();

            // 3. Show matching courses and hide others
            if (text.toLowerCase().includes(value)) {

                $(this).show();
                count++;

                // 2. Highlight matched text using css()
                if (value !== "") {
                    $(this).css({
                        "background": "yellow",
                        "font-weight": "bold"
                    });
                } else {
                    $(this).css({
                        "background": "",
                        "font-weight": ""
                    });
                }

            } else {
                $(this).hide();
            }

        });

        // 4. Display matched course count
        $("#count").text("Matched Courses: " + count);

    });

    // 5. Clear search and show all courses
    $("#clear").click(function () {

        $("#search").val("");

        $("#courseList li").show();

        $("#courseList li").css({
            "background": "",
            "font-weight": ""
        });

        $("#count").text("Total Courses: 5");

    });

});

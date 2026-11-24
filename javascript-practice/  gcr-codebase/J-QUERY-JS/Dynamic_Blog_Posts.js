
$(document).ready(function () {

    // 1. Append new post at the end
    $("#addPost").click(function () {

        let title = $("#postTitle").val().trim();

        if (title === "") {
            alert("Enter post title");
            return;
        }

        $("#posts").append(
            $("<article>").append(
                $("<h2>").text(title),
                $("<p>").text("This is a new blog post.")
            )
        );

        $("#postTitle").val("");
        highlightPosts();
    });

    // 2. Prepend featured post at the beginning
    $("#featuredPost").click(function () {

        $("#posts").prepend(
            '<article class="featured">' +
            '<h2>Featured Post</h2>' +
            '<p>This is our special post.</p>' +
            '</article>'
        );

    });

    // 3. Remove last post
    $("#removePost").click(function () {
        $("#posts article").last().remove();
    });

    // 4. Add tags using before() and after()
    $("#addTag").click(function () {

        let firstPost = $("#posts article").first();

        firstPost.before('<p class="tag">Latest Post</p>');

        firstPost.after('<p class="tag">Read More</p>');

    });

    // 5. Highlight posts containing keywords
    function highlightPosts() {

        $("#posts article").each(function () {

            let text = $(this).text().toLowerCase();

            if (text.includes("javascript") ||
                text.includes("jquery")) {

                $(this).addClass("featured");

            }

        });

    }

    highlightPosts();

});

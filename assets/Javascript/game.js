
function createButtons() {
    for (var i = 0; i < 4; i++) {
        var button = $("<button>");
        button.text("button #" + (i + 1));
        button.addClass("number");
        button.attr("id", i + 1);
        $("#buttons").append(button);
    }
}

createButtons();







$(".number").on("click", function() {
    var id = $(this).attr("id");
    alert("You clicked the button with id " + id);
});


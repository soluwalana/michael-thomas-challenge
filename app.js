/* Main Function */
var main = function() {
    console.log("I do stuff")
    $('.nav-button').click(function() {
        $('.main-content').text($(this).text());
    });
}

$(document).ready(main);

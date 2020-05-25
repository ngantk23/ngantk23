$(document).ready(
    function () {
        alert("kjflkfj");
        $(".about-section").scroll(
            function (direction) {
                if (direction == "down") {
                    $("div.ngan").addClass('sticky');
                }
                else {
                    $("div.ngan").removeClass('sticky');
                }
                
            }, {
                offset: '700px';
            }
        )
    }
)
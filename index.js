var clicked = false
$(document).ready(function () {
    $("#ham").click(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (clicked) {
                $('html').css({ 'scroll-behavior': 'smooth' });
                $("#nav").removeClass("col-12")
                $("#navItem").addClass("fixed-content")
                window.scrollTo(0, 0)
                clicked = false
            } else {
                $('html').css({ 'scroll-behavior': 'initial' });
                setTimeout(() => {
                    $("#nav").addClass("col-12")
                    $("#navItem").removeClass("fixed-content")
                    window.scrollTo(0, 0)
                    clicked = true
                }, 0)
            }
        }
    })

    $("#navItem ul li a").click(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('html').css({ 'scroll-behavior': 'smooth' });
            $("#nav").removeClass("col-12")
            $("#navItem").addClass("fixed-content")
            clicked = false
        }
    });


})


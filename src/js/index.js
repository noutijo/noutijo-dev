window.$(document).ready(function () {

    window.$("#show-portfolio-design").on('click', function () {


        window.$('.portfolio-web-block').hide();
        window.$('.portfolio-design-block').show();


        window.$('#show-portfolio-design').removeClass('make-gray-bg');
        window.$('#show-portfolio-design').addClass('make-green-bg');
        window.$('#show-portfolio-web').removeClass('make-green-bg');
        window.$('#show-portfolio-web').addClass('make-gray-bg');
    })


    window.$("#show-portfolio-web").on('click', function () {


        window.$('.portfolio-web-block').show();
        window.$('.portfolio-design-block').hide();

        window.$('#show-portfolio-design').removeClass('make-green-bg');
        window.$('#show-portfolio-design').addClass('make-gray-bg');
        window.$('#show-portfolio-web').removeClass('make-gray-bg');
        window.$('#show-portfolio-web').addClass('make-green-bg');
    })

    window.$("#closeToast").on('click', function () {

        window.$('.toastmain').hide();
    })

});


window.$(window).scroll(function () {
    if (window.$(this).scrollTop() > 40) {
        window.$('#navbar_top').addClass("fixed-top");
        window.$('#navbar_top').addClass("make-navbar-bg");
    } else {
        window.$('#navbar_top').removeClass("fixed-top");
        window.$('#navbar_top').removeClass("make-navbar-bg");
    }
});


window.$('.toast').toast('show');

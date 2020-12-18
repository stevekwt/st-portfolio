const skwtApp = {};

skwtApp.scrollToSections = () => {
    $introLink = $('nav ul li:nth-of-type(1) a')
    $introSection = $('#intro')
    $aboutLink = $('nav ul li:nth-of-type(2) a')
    $aboutSection = $('#aboutme')
    $skillsLink = $('nav ul li:nth-of-type(3) a')
    $skillsSection = $('#skills')
    $projectsLink = $('nav ul li:nth-of-type(4) a')
    $projectsSection = $('#projects')
    $contactLink = $('nav ul li:nth-of-type(5) a')
    $contactSection = $('#contact')

    $backToTopLink = $('p.backtop a')

    $($introLink).on('click', function (e) {
        $('html, body').animate({
            scrollTop: $($introSection).offset().top
        }, 200);
    });
    $($aboutLink).on('click', function (e) {
        $('html, body').animate({
            scrollTop: $($aboutSection).offset().top
        }, 200);
    });
    $($skillsLink).on('click', function (e) {
        $('html, body').animate({
            scrollTop: $($skillsSection).offset().top
        }, 200);
    });
    $($projectsLink).on('click', function (e) {
        $('html, body').animate({
            scrollTop: $($projectsSection).offset().top
        }, 200);
    });
    $($contactLink).on('click', function (e) {
        $('html, body').animate({
            scrollTop: $($contactSection).offset().top
        }, 200);
    });

    $($backToTopLink).on('click', function (e) {
        $('html, body').animate({
            scrollTop: $($introSection).offset().top
        }, 200);
    });
    
}

// after mobile nav is clicked, it automatically hides
skwtApp.pushMobileNavBackIn = () => {
    $('#menuToggle a').on('click', function () {
        $('#menuToggle input').prop('checked', false); 
    });
}



document.addEventListener("DOMContentLoaded", function() {

    skwtApp.scrollToSections();

    skwtApp.pushMobileNavBackIn();

    let mainNavLinks = document.querySelectorAll("nav ul li a");
    let mainSections = document.querySelectorAll("main section");
    
    // ADVICE FROM CODEPEN, for future update (credit in index.html):
    // This should probably be throttled.
    // Especially because it triggers during smooth scrolling.
    // https://lodash.com/docs/4.17.10#throttle
    // You could do like...
    // window.addEventListener("scroll", () => {
    //    _.throttle(doThatStuff, 100);
    // });
    // Only not doing it here to keep this Pen dependency-free.
    
    // NAVBAR SENSE-AREA-HIGHLIGHT
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= (fromTop + 100) &&
          section.offsetTop + section.offsetHeight > (fromTop + 100)
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    });

});

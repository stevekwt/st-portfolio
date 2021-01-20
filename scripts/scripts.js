const skwtApp = {};

skwtApp.textillate = () => {
    $('.tlt1').textillate({});
    $('.tlt2').textillate({
        initialDelay: 800,
    });
     $('.tlt3').textillate({
        initialDelay: 1100,
    });
     $('.tlt4').textillate({
        initialDelay: 1400,
    });

    // $('.tlt-test').textillate({
    //     initialDelay: 500,
    //     in: {
    //         effect: 'fadeInDown',
    //         sync: true,
    //         callback: function() {
    //             setTimeout(function(){ 
    //                 $('.tlt-test').textillate('out');
    //             }, 500);
    //         }
    //     },
    //     out: {
    //         effect: 'hinge',
    //         shuffle: true,
    //     }
    // });

    $('.psst1').textillate({
        initialDelay: 4500,
        in: {
            effect: 'fadeInDown',
            sync: true,
            callback: function() {
                setTimeout(function(){ 
                    $('.psst1').textillate('out');
                }, 5000);
            }
        },
        out: {
            effect: 'hinge',
            shuffle: true,
        },
    });
    $('.psst2').textillate({
        initialDelay: 5300,
        in: {
            effect: 'fadeInDown',
            sync: true,
            callback: function() {
                setTimeout(function(){ 
                    $('.psst2').textillate('out');
                }, 4200);
            }
        },
        out: {
            effect: 'hinge',
            shuffle: true,
        },
    });
}

skwtApp.allLinksToNewPage = () => {
    // adapted from https://html.com/attributes/a-target/
    function externalLinks() { 
        for(var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) { 
                var b = c[a]; 
                if (/#([a-z])*/ig.test(b.getAttribute("href")) === false) {
                    // console.log(b.getAttribute("href"));
                    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank") 
                } else {
                    // console.log(`${b.getAttribute("href")} (which is a # link)`);
                }
            } 
    }; 
    externalLinks();
}

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

// after mobile nav is clicked, it automatically hides (OLD VERSION)
// skwtApp.pushMobileNavBackIn = () => {
//     $('#menuToggle a').on('click', function () {
//         $('#menuToggle input').prop('checked', false); 
//     });
// }

// after mobile nav is clicked, it automatically hides (NEW VERSION)
// skwtApp.pushMobileNavBackIn = () => {
//     $('.mobile-nav a').on('click', function () {
//         $('.open').removeClass('oppenned');
//         console.log(`mobile link clicked`);
//     });
// }


document.addEventListener("DOMContentLoaded", function() {

    skwtApp.scrollToSections();

    // skwtApp.pushMobileNavBackIn();

    skwtApp.allLinksToNewPage();

    skwtApp.textillate();

    let mainNavLinks = document.querySelectorAll(".side-nav ul li a");
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

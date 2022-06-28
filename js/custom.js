// $(window).on('load', function() {
//     $('#popup-modal').modal('show')
// })

$('.testimonial .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: true,
    autoplayHoverPause: true,
    autoplaySpeed: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.activities .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    autoplaySpeed: 5000,
    navText: ['<i class="fa fa-chevron-left"></i>', "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


$(window).scroll(function() {
    var top = $(window).scrollTop();

    if (top > 200) {
        $('.to-top').fadeIn();
    } else {
        $('.to-top').fadeOut();
    }
})

$(document).ready(function() {
    $('select').niceSelect();

    setTimeout(function(){
        $('#banner-video').addClass('d-none')
    }, 75000)
});


if (window.matchMedia('(max-width: 768px)').matches) {
    $('.home-slider').camera({
        height: '200%',
        loader: false,
        navigation: false,
        autoPlay: true,
        time: 4000,
        playPause: false,
        pagination: false,
        thumbnails: false,
        overlayer: true,
        opacityOnGrid: true,
        hover: false,

    });
} else {
    $('.home-slider').camera({
        loader: false,
        navigation: false,
        autoPlay: true,
        time: 4000,
        playPause: false,
        pagination: false,
        thumbnails: false,
        overlayer: true,
        opacityOnGrid: true,
        hover: false,

    });
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

$(document).ready(function() {
    var modals = ['#applyNow', '#anotherModal'];
    if (window.location.hash && ~modals.indexOf(window.location.hash)) {
        $(window.location.hash).modal();
    }

    var url = window.location.href;

    var activeTab = url.substring(url.indexOf("#") + 1);

    if (window.location.hash) {
        $(".admission-detail-tab .tab-pane").removeClass("active show");

        $(".nav-tabs .nav-link").removeClass("active");

        $("#" + activeTab).addClass("active show");
        $("#" + activeTab + "-tab").addClass("active");

        disableScroll()

        setTimeout(function() {
            enableScroll()
        }, 100)
    }

    $('.nav-tabs').on('click',function(){
        setTimeout(function(){
            $('.filter-nav .active').click()
        },200)
    })
})

$('#close-btn').on('click',function(){
    $('.mobile-menu').fadeOut();
    $('body').removeClass('modal-open')
})

$('#hamburger').on('click',function(){
    $('.mobile-menu').fadeIn();
    $('body').addClass('modal-open')
})

$('.has-dropdown a').on('click',function(){
    $(this).toggleClass('arrow-rotate');
    $(this).parent('.has-dropdown').find('.dropdown-content:not(.dropdown-content .dropdown-content)').slideToggle()
})

$('.has-dropdown p').on('click',function(){
    $(this).toggleClass('arrow-rotate');
    $(this).parent('.has-dropdown').find('.dropdown-content').slideToggle()
})

$(window).on('load', function () {
      
    var $container = $('.filter-bachelor-div');
      $container.isotope({
          filter: '.bbm',
          layoutMode: 'masonry',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: true,
              layoutMode: 'fitRows'
          }
      });
      $('.filter-bachelor-nav a').on('click' , function () {
          $('.filter-bachelor-nav .active').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');

          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  queue: true
              }
          });

          return false;
      });

      var $container1 = $('.filter-class11-div');
      $container1.isotope({
          filter: '.management',
          layoutMode: 'masonry',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: true,
              layoutMode: 'fitRows'
          }
      });
      $('.filter-class11-nav a').on('click' , function () {
          $('.filter-class11-nav .active').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');

          $container1.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  queue: true
              }
          });

          return false;
      });

      var $container2 = $('.filter-class12-div');
      $container2.isotope({
          filter: '.management',
          layoutMode: 'masonry',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: true,
              layoutMode: 'fitRows'
          }
      });
      $('.filter-class12-nav a').on('click' , function () {
          $('.filter-class12-nav .active').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');

          $container2.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  queue: true
              }
          });

          return false;
      });

      var $container3 = $('.filter-master-div');
      $container3.isotope({
          filter: '.management',
          layoutMode: 'masonry',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: true,
              layoutMode: 'fitRows'
          }
      });
      $('.filter-master-nav a').on('click' , function () {
          $('.filter-master-nav .active').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');

          $container3.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  queue: true
              }
          });

          return false;
      });

  });


  var ctx = document.getElementById('pieChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['+2 Science', '+2 Management & Law', 'BBM', 'BBS', 'MBS'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 13, 5, 3],
            backgroundColor: [
                'rgba(255, 99, 132,0.8)',
                'rgba(54, 162, 235,0.8)',
                '#d6ecfa',
                'rgba(74, 192, 192, 0.8)',
                '#f2d3da'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                '#97d2fc',
                'rgb(74, 192, 192)',
                '#fd9fb3'
                
            ],
            hoverOffset: 14,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
		maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },

    }
});
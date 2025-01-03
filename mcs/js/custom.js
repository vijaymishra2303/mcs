/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Mayura Consulting Services
Version: 1.0.0
-------------------------------------------------------------------*/
(function($){
    "use strict";
  
    // Ready Function
    jQuery(document).ready(function($){
        var $this = $(window);

        // Menu toggle
        $('.mcs_menu_icon').on('click',function () {
            $('.mcs_menu>ul').toggleClass('clicked');
        });
        
        // Fixed Header
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 200) {
                $('.mcs_header_wrap').addClass('fixed');
            }
            else {
                $('.mcs_header_wrap').removeClass('fixed');
            }
        });

         // Companies Slider
         $('.mcs_main_slider').owlCarousel({
            loop:true,
            margin:0,
            center: false,
            nav:false,
            dots:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })

        // Companies Slider
        $('.mcs_companiesslider').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:false,
            dots:false,
            autoplay:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })

         // App Development Mockup
           
         $('.mcs_development_slider').owlCarousel({
            loop:true,
            margin:0,
            center: false,
            nav:false,
            dots:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

        // Client/Partner Slider
        $('.mcs_partnerslider').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:false,
            dots:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })

          // Sales  Commission Banner
          $('.sales_comm_slider').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:false,
            dots:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

          // Tesimonial
          $('.mcs_testimonial_slider').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            margin:30,
            center: false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        })
        // 
        $('.mcs_testimonial_sliderchat').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            margin:30,
            center: false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:4
                }
            }
        })



        
        // AOS Animation
        AOS.init({
            duration: 1200,
        })

        // filter items
        $('.grid').isotope({
            itemSelector: '.grid-item',
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });

        $(document).find("#pills-technology-tab").on("click", function(event){
            setTimeout(function(){
               $("#first_tab_all").trigger("click")
            }, 200)   
       })

        $(document).find("#pills-real-estate-tab").on("click", function(event){
             setTimeout(function(){
                $("#second_tab_all").trigger("click")
             }, 200)   
        })

    });
})();

// Scroll

$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $scroll_section = $('scroll_section'),
        $panel = $('.section');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
      $('.section').removeClass('active');
      
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        $this.addClass('active');
  
      }
    });    
    
  }).scroll();



  const scrollContainer = document.querySelector("main");

  scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
  });
  
// extra


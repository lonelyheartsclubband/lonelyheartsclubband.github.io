// //Set height of top section to window height - https://j.eremy.net/set-element-height-to-viewport/
// // Borrowed from Paul Lumsdaine
// $(document).ready(function() {
//   function setHeight() {
//     windowHeight = $(window).innerHeight();
//     $('section').css('min-height', windowHeight);
//   };
//   setHeight();
//
//   $(window).resize(function() {
//     setHeight();
//   });
// });
//
// Scrolling magic - http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
// Borrowed from Paul Lumsdaine
$(document).ready(function() {
  console.log("scrolling magic");
  var sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    if (cur_pos >= 200) {
      nav.addClass('stick');
    } else {
      nav.removeClass('stick');
    }

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

// In-Page Scroll Animation
// Borrowed from Paul Lumsdaine
$('#top a[href^="#"]').on('click', function(e) {
    nav.find('a').removeClass('active');
    var hash  = this.hash,
    $hash = $(hash),
      addHash = function() {
          window.location.hash = hash;
      };

    $(this).addClass('active');

    if ( hash !== '#top' ) {
        // $hash.velocity('scroll', { duration: 500, offset: -50, complete: addHash }); // Velocity.js
        $('html,body').animate({ 'scrollTop': $hash.offset().top -50 }, 500, addHash);
    } else {
        // $hash.velocity('scroll', { duration: 500, offset: 0, complete: addHash }); // Velocity.js
        $('html,body').animate({ 'scrollTop': $hash.offset().top }, 500, addHash);
    }
    e.preventDefault();
  });

  // Open Outside Links in New Window
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

});
// Scroll to specific values
// scrollTo is the same
// Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       console.log("Inside if");
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });

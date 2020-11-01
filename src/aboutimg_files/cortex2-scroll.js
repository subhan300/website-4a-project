

// ********* GLOBALS *********
var browserwidth = $(window).width();
var servicetop = $(".services").offset().top;
var scrollpos = $(window).scrollTop();
scrollXToCenterChat();
scrollXToCenterStyle();



// ********* WHEN WINDOW RESIZES *********
$(window).resize(_.debounce(function(){
  browserwidth = $(window).width();
  servicetop = $(".services").offset().top;
  scrollXToCenterChat();
  scrollXToCenterStyle();
},500));


function scrollXToCenterChat(){
  var inner = $(".style-swap").width();
  var outer = 750;
  var diff = outer - inner;
  var center = diff/2;
  $(".style-swap").animate({
    scrollLeft: center
  }, 800, function(){});
}

function scrollXToCenterStyle(){
  var outer = $(".topbar-desktop-characters-container").width();
  var inner = $(".topbar-desktop-characters-outer-container").width();
  var diff = outer - inner;
  var center = diff/2;

  $(".topbar-desktop-characters-outer-container").animate({
    scrollLeft: center
  }, 800, function(){});
}


// ********* WHEN WINDOW SCROLLS *********

$(window).scroll(_.debounce(function(){
    showHamburgerPastServices();
},50));

function showHamburgerPastServices(){
  scrollpos = $(window).scrollTop();
  if (scrollpos > servicetop) {
    $(".topbar-hamburger").addClass("topbar-hamburger-show");
  }
  else {
    $(".topbar-hamburger").removeClass("topbar-hamburger-show");
  }
}


 // ************** SMOOTH SCROLL  **************

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
    $(".sidebar-menu").removeClass("sidebar-menu-open");
  }
});





// COMMENT

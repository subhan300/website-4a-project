$(".chatbot-info").on("click", function(){
  $(".button-container").toggleClass("button-container-open");
})

$(".techniques_option_header").on("click", function(){
  $(".techniques_options").toggleClass("techniques_options_open");
});

$(".techniques_option").on("click", function(){
  setTimeout(function(){
    $(".techniques_options").removeClass("techniques_options_open");
  }, 1000)

  var tech = $(this).data("technique");
  tech = capitalizeFirstLetter(tech);
  // $(".techniques_option_header").text(`'${tech}' technique selected ▾`)

});

// $(".sidebar-logo").on("click", function(){
//   window.location.replace("https://www.cortexcopywriter.com");
// });

$(".topbar-hamburger").on("click", function(){
  $(".sidebar-menu").addClass("sidebar-menu-open");
  $(".contact-form-icon").addClass("contact-form-icon-hide");
  $(".contact-form").removeClass("contact-form-visible");
});

$(".sidebar-close").on("click", function(){
  $(".sidebar-menu").removeClass("sidebar-menu-open");
  $(".contact-form-icon").removeClass("contact-form-icon-hide");
});


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// INITIALIZE

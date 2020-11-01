
var full_testimonials_open = false;

$(".review").on("click", function(){
  if (full_testimonials_open) {
    $(".review-long-title").text("Show full testimonial")
    $(".review-long").removeClass("review-long-open");
  }
  else {
    $(".review-long-title").text("Hide full testimonial")
    $(".review-long").addClass("review-long-open");
  }
  full_testimonials_open = !full_testimonials_open;

})

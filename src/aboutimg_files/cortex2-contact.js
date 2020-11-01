// CONTACT FORM

// OPEN EMAIL
$(".contact-form-icon").on("click", function(){
  openContactForm();
  $(".contact-form-subject").val("");
});

// SIDEBAR OPEN EMAIL & CLOSE MENU
$(".sidebar-contact").on("click", function(){
  openContactForm();
  $(".contact-form-subject").val("");
  $(".sidebar-menu").removeClass("sidebar-menu-open");
});

// CLOSE EMAIL
$('body').on("click", ".contact-form-close", function(event){
  closeContactForm();
})
// CLOSE EMAIL
$(".contact-form-close").on("click", function(event){
  closeContactForm();
})

// CONSULTATION EMAIL OPEN
$(".header-container-cta").on("click", function(){
  openContactForm();
  $(".contact-form-subject").val("");
})

$(".contact-social-email").on("click", function(){
  openContactForm();
});

$(".contact-social-email").on("mouseenter", function(){
    AnimateThis($(".contact-form-icon"), 'tada');
})

function openContactForm(){
  $(".contact-form").addClass("contact-form-visible");
  $(".contact-form-icon").addClass("contact-form-icon-hide");
}

function closeContactForm(){
  $(".contact-form").removeClass("contact-form-visible");
  $(".contact-form-icon").removeClass("contact-form-icon-hide");
}

function resetContactForm(){
  var text = `
  <div class="contact-form-title">Enquiries</div>
  <div class="contact-form-container">
    <form class="contact-form-enquiry" >
      <input aria-required="true" required minlength="4" class="contact-form-name" type="text" name="name" placeholder="Name:">
      <input aria-required="true" required minlength="4" class="contact-form-subject" type="text" name="subject" placeholder="Subject:">
      <input aria-required="true" required class="contact-form-email" type="email" name="email" placeholder="Email:">
      <textarea aria-required="true" required class="contact-form-message" name="message" placeholder="Message:"></textarea>
    </form>
    <div class="contact-form-submit">Push it good</div>
  </div>
  <div class="contact-form-close">X</div>`;
  $(".contact-form-outercontainer").html(text);

}

//  ******************* FORM VALIDATION  *******************




	// validate signup form on keyup and submit
	$(".contact-form-enquiry").validate({
		rules: {
			name: "required",
			subject: "required",
			email: { required: true, email: true },
      message: { required: true }
		},
		messages: {
			name: "Error: What's your name?",
			subject: "Error: What's on your mind?",
      email: "Error: Where can I reply to?",
      message: "Error: What are you thinking?"
		}
	});

  $(document).on("click", ".contact-form-submit", function (event) {
    event.preventDefault();
    // INDIVIDUAL ANIMATION ERRORS
    if ( $(".contact-form-name").valid() == false ) {
      setTimeout(function(){ AnimateThis( $(".contact-form-name") , "shake"); },0);
      setTimeout(function(){ AnimateThis( $("#name-error") , "shake"); },150);
    }

    if ( $(".contact-form-subject").valid() == false ) {
      setTimeout(function(){ AnimateThis( $(".contact-form-subject") , "shake"); },50);
      setTimeout(function(){ AnimateThis( $("#subject-error") , "shake"); },200);
    }

    if ( $(".contact-form-email").valid() == false ) {
      setTimeout(function(){ AnimateThis( $(".contact-form-email") , "shake"); },100);
      setTimeout(function(){ AnimateThis( $("#email-error") , "shake"); },250);
    }

    if ( $(".contact-form-message").valid() == false ) {
      setTimeout(function(){ AnimateThis( $(".contact-form-message") , "shake"); },150);
      setTimeout(function(){ AnimateThis( $("#message-error") , "shake"); },300);
    }

    // TEST WHOLE EMAIL
    if (!$(".contact-form-enquiry").valid()) { return false;}
    else {
      // $(".contact-form-enquiry").submit();
      sendEmail();
    }

  });



function sendEmail(){

  var username = $(".contact-form-enquiry input[name='name']" ).val();
  var useremail = $(".contact-form-enquiry input[name='email']" ).val();
  var usersubject = $(".contact-form-enquiry input[name='subject']" ).val();
  var usercontent = $(".contact-form-enquiry textarea" ).val();
  // console.log(username);
  // console.log(useremail);

  var usermessage = prepareHTMLEmail(username, useremail, usersubject, usercontent);
  $.ajax({
    type: "POST",
    url: "../libraries/index_email.php",
    data: {
      useremail: useremail,
      username: username,
      usermessage: usermessage
    }
  }).done(function( email_return_info) {
    console.log(email_return_info);
    if (email_return_info == "Success") {
      console.log("it should have worked");
      triggerSuccessMessage();
    }
  });
  return false;
}


function prepareHTMLEmail(username, useremail, usersubject, usercontent){
var htmlemail_header = `<head>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <link href="email_template.css" rel="stylesheet" >
    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,700,800,900" rel="stylesheet">
    <title >New enquiry from Cortext Copywriter </title>
  </head>

  <body style="margin: 0;font-family: 'Montserrat', sans-serif;">

    <div class="email-main" style="width: 100%;background-color: rgb(41, 45, 65);">

      <div class="title" style="width: 100%;padding-top: 30px;padding-bottom: 30px;color: white;background-color: #1a1d29;">
        <div class="titlecontainer" style="width: 80%;max-width: 700px;margin-left: auto;margin-right: auto;">
          <h2 style="text-align: center;font-weight: 500;font-size: 32px;">New Message</h2>
        </div>
      </div>`;

var htmlemail_body = "";

htmlemail_body +=
  `        <div class="studiocontainer" style="max-width: 600px;margin-left: auto;margin-right: auto;width: 80%;">
            <div class="studio" style="border-bottom: 1px solid rgba(255,255,255,0.1);padding: 30px;">
              <p style="color:white;"><strong style="margin-right: 5px;">Name: </strong> ${username}</p>
              <p style="color:white;"><strong style="margin-right: 5px;">Email: </strong> ${useremail}</p>
              <p style="color:white;"><strong style="margin-right: 5px;">Subject: </strong> ${usersubject}</p>
              <p style="color:white;"><strong style="margin-right: 5px;">Enquiry: </strong> ${usercontent}</p>
            </div>
          </div>`



  var htmlemail_footer =

  `<div class="footer" style="width: 100%;padding-top: 30px;padding-bottom:30px;text-align: center;color: white;background-color: #1a1d29;">
    <div class="footercontainer" style="max-width: 600px;margin-left: auto;margin-right: auto;width: 80%;">
      <p style="font-weight: 300;">Cortex Copywriter</p>
    </div>
    </div>
  </div>
  </body>`;

  var htmlemail = htmlemail_header + htmlemail_body + htmlemail_footer;
  return htmlemail
}

function triggerSuccessMessage(){
  console.log("triggering success message");
  var removeInputs = function(){
    $(".contact-form-outercontainer").html("");

    var svg = $(`<div class="contact-form-success-svg" id="email-animation"> </div>`);

    var msg = $(`<div class="contact-form-success-message"> </div>`)
    msg.append(`<h3> Success!</h3> <p>Ah, you pushed it real good. I'll reply soon. Promise! </p>`)

    var suc = $(`<div class="contact-form-success-container"> </div>`);
    suc.append(svg);
    suc.append(msg);

    $(".contact-form-outercontainer").append(suc);
    var email_params = {
        container: document.getElementById('email-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: email_animation
    };
    var anim_email = lottie.loadAnimation(email_params);

    var tl2 = new TimelineMax();
    tl2.from($(".contact-form-success-container"), 1, {opacity: 0});
    tl2.play();

    setTimeout(function(){
      closeContactForm();
    }, 4500);

    setTimeout(function(){
      resetContactForm();

    }, 5500);
  }

  var ease = "Power4.easeOut";
  var duration = "0.4";
  var offset = "-=0.3";
  var tl = new TimelineMax({});
  tl.to($(".contact-form-title"), duration, {opacity: 0, y: -20});
  tl.to($(".contact-form-close"), duration, {opacity: 0, y: -20, ease: ease}, offset);
  tl.to($(".contact-form-name"), duration, {opacity: 0, y: -20, ease: ease}, offset);
  tl.to($(".contact-form-subject"), duration, {opacity: 0, y: -20, ease: ease}, offset);
  tl.to($(".contact-form-email"), duration, {opacity: 0, y: -20, ease: ease}, offset);
  tl.to($(".contact-form-message"), duration, {opacity: 0, y: -20, ease: ease}, offset);
  tl.to($(".contact-form-submit"), duration, {opacity: 0, y: -20, ease: ease, onComplete: removeInputs}, offset);

  tl.play(0);

}

// $(document).on("click",".contact-form-test-success", function(){
//   triggerSuccessMessage();
// })








// COMMENT

var techniques_descriptions = {
  rhyme: {
    title: "Rhyme",
    description: "People perceive rhyming phrases as more truthful."
  },
  bizarre: {
    title: "Bizarreness Effect",
    description:"Bizarre nouns and unusual material are easier to remember than common material and phrasing.",
  },
  because: {
    title: "Justify with 'because'",
    description: "‘because’ is a trigger word that assigns credit and reinforces a valid reason for a request.",
  },
  approach: {
    title: "Approach Motivation",
    description: "Positive desire makes you want to experience or discover more of something."
  },
  avoid: {
    title: "Avoid Motivation",
    description: "Convince people your product eliminates annoyances and inconveniences.",
  },
  attack: {
    title: "Attack Motivation",
    description: "Emotionally motivate people to devalue, criticize or destroy something rather than simply avoid it."
  },
  approachattack: {
    title: "Approach & Attack",
    description: "Comparative advertising = approach motivation (express benefits) + attack competitors."
  }
}


var techniques_transcripts = {
  community: {
    image: "img/techniques/svg/corporate-conference.svg",
    about: "Check out some <a href='top-3-ways-psychology-based-UX-copy-hacks-minds.html'>psychology-based copywriting</a> hacks I use to boost conversion rates and enhance user experiences.",
    description: `Select a hack below to see how it amplifies the power of words/copy to
persuade customers regarding a 'Startup Event/Conference'.`,
    techniques: {
      heading: "",
      subheading: "Technique Example",
      smallheading: "Startup Event/Conference:",
      rhyme: `By learning from world-class innovators, you cannot <span class='underline'> fail </span> to make your business <span class='underline'> scale. </span>`,
      bizarre: "We’re on the <span class='underline'>hunt</span> for the next <span class='underline'>unicorn</span>. Will it be you?",
      because: "This is a cornerstone event <span class='underline'>because you will get actionable insights</span> to accelerate your company’s growth.",
      approach: "The conference will feature <span class='underline'>world-famous keynote</span> speakers from the <span class='underline'>largest companies</span> in the world.",
      avoid: "<span class='underline'>Move past the ‘start-up’ mentality</span> and grow faster than ever before.",
      attack: "<span class='underline'>Get ready</span> to present your pitch. <span class='underline'>What are you waiting for</span>? ",
      approachattack: "Receive <span class='underline'>authentic advice</span> from people who have been there before. <span class='underline'>No dubious</span> sponsored talks."
    }
  },
  corporate: {
    image: "img/techniques/svg/community-solar.svg",
    about: "Here are some <a href='top-3-ways-psychology-based-UX-copy-hacks-minds.html'>psychology-based copywriting</a> methods I use to boost conversion rates and enhance user experiences.",
    description: `Select a method below to see how it amplifies the power of words/copy to
persuade customers regarding 'Solar Panels'.
`,
    techniques: {
      heading: "",
      subheading: "Technique Example",
      smallheading: "Solar Panels:",
      rhyme: "Solar is the best <span class='underline'>decision</span> to reduce your greenhouse gas <span class='underline'>emissions</span>.",
      bizarre: "Only solar energy can prevent climate change from <span class='underline'>busting an ice cap</span>.",
      because: "Solar is a great investment <span class='underline'>because you will reduce</span> your carbon footprint.",
      approach: "You will <span class='underline'>get paid</span> to export <span class='underline'>your excess power</span> to the grid.",
      avoid: "By installing solar, you’ll <span class='underline'>protect yourself against</span> rising electricity costs.",
      attack: "Go solar and <span class='underline'>cut your electricity bills</span> by up to 75%.",
      approachattack: "Being a <span class='underline'>renewable energy</span> source, solar is on track to <span class='underline'>entirely replace fossil fuels</span> worldwide. "
    }
  },
  entertainment: {
    image: "img/techniques/svg/entertainment-studio.svg",
    about: "Dig into some <a href='top-3-ways-psychology-based-UX-copy-hacks-minds.html'>psychology-based copywriting</a> tactics I use to boost conversion rates and enhance user experiences.",
    description: `Select a tactic below to see how it amplifies the power of words/copy to
persuade customers regarding a 'Design Studio'.`,
    techniques: {
      heading: "",
      subheading: "Technique Example",
      smallheading: "Creative Studio:",
      rhyme: "Our gorgeous <span class='underline'>designs</span> put a tingle in your <span class='underline'>spine</span>.",
      bizarre: "Cut through the <span class='underline'>shitspackle</span> with next level design.",
      because: "Our show-stopping designs are successful <span class='underline'>because they are assessed</span> by data and real-life users.",
      approach: "We craft <span class='underline'>delightful</span> designs with <span class='underline'>love and passion</span> to reveal art and beauty.",
      avoid: "We deliver high-end brand experiences that <span class='underline'>no one will forget</span>.",
      attack: "Our designs create meaning and <span class='underline'>impact</span> that makes <span class='underline'>your competition look bland</span>.",
      approachattack: "<span class='underline'>Little details</span> make a big difference. They separate <span class='underline'>plain from beautiful</span>."
    }
  },
  luxury: {
    image: "img/techniques/img/swiss-watch4.jpg",
    about: "Indulge in some <a href='top-3-ways-psychology-based-UX-copy-hacks-minds.html'> psychology-based copywriting </a> techniques I use to boost conversion rates and enhance user experiences.",
    description: `Select a technique below to see how it amplifies the power of words/copy to
persuade customers regarding a 'Swiss Smartwatch’.`,
    techniques: {
      heading: "",
      subheading: "Technique Example",
      smallheading: "Swiss Smartwatch:",
      rhyme: "Wrapping a smooth Swiss smartwatch around your <span class='underline'>wrist</span> feels just like a <span class='underline'>kiss.</span>",
      bizarre: "Sorry <span class='underline'>Einstein</span>, our new smartwatch stretches the boundaries of time beyond your <span class='underline'>rudimentary relativity theory</span>.",
      because: "Indulge in a luxurious Swiss smartwatch <span class='underline'>because your precious time</span> deserves to be spoiled.",
      approach: "Incomparable design and <span class='underline'>fine materials</span> in a smartwatch as <span class='underline'>unique as you</span>.",
      avoid: "A smartwatch with <span class='underline'>helpful</span> GPS. <span class='underline'>No need</span> to take your phone out.",
      attack: "<span class='underline'>Never be late for a meeting</span> again with Swiss smartwatch high-precision timekeeping.",
      approachattack: "The only watch <span class='underline'>you’ll ever need</span>. Swiss smartwatch is <span class='underline'>lighter</span> and <span class='underline'>more versatile</span> than Apple Watch."
    }
  },
  technology: {
    image: "img/techniques/svg/tech-ar.svg",
    about: "I deploy <a href='top-3-ways-psychology-based-UX-copy-hacks-minds.html'>psychology-based copywriting</a> solutions to boost conversion rates and enhance user experiences.",
    description: `Select a solution below to see how it amplifies the power of words/copy to
persuade customers regarding ‘Augmented Reality (AR) Glasses’.`,
    techniques: {
      heading: "",
      subheading: "Technique Example",
      smallheading: "Augmented Reality (AR) Glasses:",
      rhyme: "At last, interactive AR experiences that <span class='underline'>feel real</span>.",
      bizarre: "<span class='underline'>Sheeeeeit!</span> This is the <span class='underline'>ma-fuggin'</span> holy grail of AR.",
      because: "Our AR glasses are revolutionary <span class='underline'>because they make everything</span> from shopping to social media <span class='underline'>easier and more enjoyable</span>.",
      approach: "<span class='underline'>Bespoke, photorealistic</span> AR digital creations can <span class='underline'>enhance</span> the way you <span class='underline'>engage</span> with your customers.",
      avoid: "AR lenses with overlaid information let you read texts <span class='underline'>without taking your phone out</span>.",
      attack: "User-centered AR experiences <span class='underline'>hit business goals</span> and <span class='underline'>kill pain points</span>.",
      approachattack: "Our AR glasses actually <span class='underline'>look like a real pair</span> of glasses. <span class='underline'>Sorry Google Glass</span>."
    }
  },
}


// *************************** TECHNIQUES SWITCHER ***************************
// INITIALIZE
var user_selected_technique = "rhyme";
var tech = capitalizeFirstLetter(user_selected_technique);
// $(".techniques_option_header").text(`'${tech}' technique selected ▾`)


$(".techniques_option").on("click", function(){
  activateButton($(this));
  switchTechniquesText($(this).data("technique"));
  user_selected_technique = $(this).data("technique");
});

function activateButton(thisitem) {
  $(".techniques_option").removeClass("techniques_option_activated");
  thisitem.addClass("techniques_option_activated");
}

function switchTechniquesText(technique){
  var text = techniques_transcripts[globalstyle].techniques[technique];
  $(".techniques_text .techniques_text_column .paragraph").html(`<div id='quote1'>${text}</div>`);

  new TypeIt('#quote1', {
    // strings: quotes['character1'].quote1,
    speed: 35,
    startDelay: 1500,
    lifeLike: true
    // waitUntilVisible: true,
  }).go();

  var description_t = techniques_descriptions[technique].title;
  var description_p = techniques_descriptions[technique].description;

  $(".techniques_description_title").html(description_t);
  $(".techniques_description_text").html(description_p);
  AnimateThis($(".techniques_description_title"), "tada");
  AnimateThis($(".techniques_description_text"), "pulse");
}


// ********** SWITCH TECHNIQUES BG **********

var tech_heading = $(".techniques_text_column .heading");
var tech_subheading = $(".techniques_text_column .subheading");
var tech_smallheading = $(".techniques_text_column .smallheading");
var tech_paragraph = $(".techniques_text_column .paragraph");
var tech_socials = $(".techniques_text_column .socials");

function switchTechniquesBG(character){

  var heading = techniques_transcripts[globalstyle].techniques.heading;
  var subheading = techniques_transcripts[globalstyle].techniques.subheading;
  var smallheading = techniques_transcripts[globalstyle].techniques.smallheading;
  var paragraph = techniques_transcripts[globalstyle].techniques[user_selected_technique];
  var img = techniques_transcripts[globalstyle].image;

  var switchHeading = function(){
    $(".techniques_text .techniques_text_column .heading").html(heading);
  }
  var switchSubheading = function(){
    $(".techniques_text .techniques_text_column .subheading").html(subheading);
  }
  var switchSmallheading = function(){
    $(".techniques_text .techniques_text_column .smallheading").html(smallheading);
  }
  var switchParagraph = function(){
    $(".techniques_text .techniques_text_column .paragraph").html(paragraph);
  }
  var switchImage = function(){
    $(".techniques_bg").html(`<img src='${img}'/>`);
  }

  var tl = new TimelineMax();
  var tl_ease = "Power4.easeInOut";
  var tl_dur = 1;
  var tl_offset = "-=0.9";
  // ANIMATE OFF TEXT
  tl.to(tech_heading, tl_dur, ({y: -30, opacity: 0, ease: tl_ease, onComplete: switchHeading}));
  tl.to(tech_subheading,tl_dur, ({y: -30, opacity: 0, ease: tl_ease, onComplete: switchSubheading}), tl_offset);
  tl.to(tech_smallheading, tl_dur, ({y: -30, opacity: 0, ease: tl_ease, onComplete: switchSmallheading}), tl_offset);
  tl.to(tech_paragraph, tl_dur, ({y: -30, opacity: 0, ease: tl_ease, onComplete: switchParagraph}), tl_offset);

  // SWAP IMAGES
  tl.to( $(".techniques_bg"), tl_dur, ({opacity: 0, y: 00, ease: tl_ease, onComplete: switchImage}), tl_offset );
  tl.to( $(".techniques_bg"), tl_dur, ({opacity: 1, y: 0, ease: tl_ease}));

  // ANIMATE ON TEXT
  tl.to(tech_heading, tl_dur, ({y: 0, opacity: 1, ease: tl_ease}), tl_offset);
  tl.to(tech_subheading, tl_dur, ({y: 0, opacity: 1, ease: tl_ease}), tl_offset);
  tl.to(tech_smallheading, tl_dur, ({y: 0, opacity: 1, ease: tl_ease}), tl_offset);
  tl.to(tech_paragraph, tl_dur, ({y: 0, opacity: 1, ease: tl_ease}), tl_offset);
}


// ********** SWITCH SERVICES TEXT **********

function switchServiceText(character){

  var section1_title = services_descriptions[character].section1.heading;
  var section1_desc = services_descriptions[character].section1.description;
  var section1_tags = services_descriptions[character].section1.tags;
  var section1_image = services_descriptions[character].section1.image;

  var section2_title = services_descriptions[character].section2.heading;
  var section2_desc = services_descriptions[character].section2.description;
  var section2_tags = services_descriptions[character].section2.tags;
  var section2_image = services_descriptions[character].section2.image;

  var section3_title = services_descriptions[character].section3.heading;
  var section3_desc = services_descriptions[character].section3.description;
  var section3_tags = services_descriptions[character].section3.tags;
  var section3_image = services_descriptions[character].section3.image;

  // Section1
  $(".service-section-1 h1").text(section1_title);
  $(".service-section-1 p").text(section1_desc);
  $(".service-section-1 .taglist").html("");
  for (i=0; i<section1_tags.length; i++) {
    $(".service-section-1 .taglist").append(`<div class='tag'>${section1_tags[i]}</div>`);
  }
  $(".service-section-1 .service-image").html(`<img src='${section1_image}' />`);

  // Section2
  $(".service-section-2 h1").text(section2_title);
  $(".service-section-2 p").text(section2_desc);
  $(".service-section-2 .taglist").html("");
  for (i=0; i<section2_tags.length; i++) {
    $(".service-section-2 .taglist").append(`<div class='tag'>${section2_tags[i]}</div>`);
  }
  $(".service-section-2 .service-image").html(`<img src='${section2_image}' />`);

  // Section3
  $(".service-section-3 h1").text(section3_title);
  $(".service-section-3 p").text(section3_desc);
  $(".service-section-3 .taglist").html("");
  for (i=0; i<section3_tags.length; i++) {
    $(".service-section-3 .taglist").append(`<div class='tag'>${section3_tags[i]}</div>`);
  }
  $(".service-section-3 .service-image").html(`<img src='${section3_image}' />`);

}





























// COMMENT

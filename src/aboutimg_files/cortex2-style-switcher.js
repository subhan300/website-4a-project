// ******************** JAVASCRIPT COLOURS ***************************
var globalstyle = "technology";


var colour_styles = {

  community: {
    font_main: "'Montserrat', sans-serif",
    font_secondary: "'Times New Roman', serif",
    font_heading: "'Arial', sans-serif",
    font_color_p: "white",
    font_color_s: "white",
    header_bg: "radial-gradient(circle, #ff953d 0%, #4ac3ae 70%)",
    header_bg_filter: "hue-rotate(964deg) saturate(54%) brightness(125%)",
    header_bg_flat: "#4ac3ae",
    row_service_filter: "hue-rotate(165deg) sepia(54%)",
    gradient_1: "linear-gradient(90deg, #ff953d 0%, #4ac3ae 100%)",
    gradient_2: "linear-gradient(90deg, #4ac3ae 0%, #ff953d 100%)",
    gradient_3: "linear-gradient(to right, #f3b66d, #05c2a8)",
    gradient_4: "linear-gradient(to right, #00f0cd, #fa733f)",
    gradient_5: "linear-gradient(to bottom, #E91E63, #f3574b)",
    character_bg: "#4ac3ae",
    technique_bg_color: "#4ac3ae",
    technique_text_color: "4ac3ae",
    technique_text_color_muted: "white",
    scrollbar_width: "10px"
  },

  corporate: {
    font_main: "'Montserrat', sans-serif",
    font_secondary: "'Times New Roman', serif",
    font_heading: "'Arial', sans-serif",
    font_color_p: "white",
    font_color_s: "white",
    header_bg: "radial-gradient(circle, #0072d4 0%, rgb(16, 29, 143) 70%)",
    header_bg_filter: "hue-rotate(6deg)",
    header_bg_flat: "rgb(16, 29, 143)",
    row_service_filter: "hue-rotate(-14deg) saturate(57%) brightness(118%)",
    gradient_1: "linear-gradient(90deg, rgb(16, 29, 143) 0%, #0072d4 100%)",
    gradient_2: "linear-gradient(to right, #40c4ff, #15308d)",
    gradient_3: "linear-gradient(to right, #193e98, #0098c6)",
    gradient_4: "linear-gradient(to right, #193e98, #40c4ff)",
    gradient_5: "linear-gradient(to bottom, #ffe712, #d92104)",
    character_bg: "rgb(59, 101, 243)",
    technique_bg_color: "rgb(59, 101, 243)",
    technique_text_color: "rgb(59, 101, 243)",
    technique_text_color_muted: "white",
    scrollbar_width: "10px"
  },

  entertainment: {
    font_main: "'Montserrat', sans-serif",
    font_secondary: "'Times New Roman', serif",
    font_heading: "'Arial', sans-serif",
    font_color_p: "white",
    font_color_s: "white",
    header_bg: "radial-gradient(circle, rgb(17, 17, 17) 0%, rgb(17, 17, 17)",
    header_bg_filter: "hue-rotate(90deg) brightness(150%)",
    header_bg_flat: "rgb(17, 17, 17)",
    row_service_filter: "hue-rotate(-51deg) saturate(151%) brightness(119%)",
    gradient_1: "linear-gradient(90deg, rgb(21, 21, 21) 0%, rgb(51, 51, 51) 100%)",
    gradient_2: "linear-gradient(to right, #8E8E8C, #111111)",
    gradient_3: "linear-gradient(to right, #111111, #8E8E8C)",
    gradient_4: "linear-gradient(to right, #8E8E8C, #111111)",
    gradient_5: "linear-gradient(to bottom, #02ffd9, #02764f)",
    character_bg: "rgb(255, 49, 55)",
    technique_bg_color: "rgb(142, 142, 140)",
    technique_text_color: "rgb(17, 17, 17)",
    technique_text_color_muted: "white",
    scrollbar_width: "10px"
  },

  luxury: {
    font_main: "'Montserrat', sans-serif",
    font_secondary: "'Times New Roman', serif",
    font_heading: "'Arial', sans-serif",
    font_color_p: "white",
    font_color_s: "white",
    header_bg: "radial-gradient(circle, #ff65ad 0%, rgb(255, 35, 74) 70%)",
    header_bg_filter: "hue-rotate(135deg) saturate(200%) sepia(130%) brightness(134%)",
    header_bg_flat: "rgb(255, 35, 74)",
    row_service_filter: "hue-rotate(307deg)",
    gradient_1: "linear-gradient(90deg, #ff65ad 0%, rgb(255, 35, 74) 100%)",
    gradient_2: "linear-gradient(to right, #f71e5d, #ff6868)",
    gradient_3: "linear-gradient(to right, #ff6868, #da5a89)",
    gradient_4: "linear-gradient(to right, #f71e5d, #ff4a43)",
    gradient_5: "linear-gradient(to bottom, #f5e3a6, #ff3b3d)",
    character_bg: "rgb(255, 227, 177)",
    technique_bg_color: "#f71e5d",
    technique_text_color: "#f71e5d",
    technique_text_color_muted: "#f71e5d",
    scrollbar_width: "10px"
  },

  technology: {
    font_main: "'Montserrat', sans-serif",
    font_secondary: "'Times New Roman', serif",
    font_heading: "'Arial', sans-serif",
    font_color_p: "white",
    font_color_s: "white",
    header_bg: "radial-gradient(circle, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 70%)",
    header_bg_filter: "hue-rotate(0deg)",
    header_bg_flat: "rgba(75,6,193,1)",
    row_service_filter: "hue-rotate(0deg)",
    gradient_1: "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    gradient_2: "linear-gradient(to right, #9803be, #660798)",
    gradient_3: "linear-gradient(to right, #570091, #7522b6)",
    gradient_4: "linear-gradient(to right, #860091, #662975)",
    gradient_5: "linear-gradient(to bottom, #23ffdb, #1b5dbf)",
    character_bg: "rgb(255, 28, 244)",
    technique_bg_color: "rgb(164, 32, 113)",
    technique_text_color: "rgb(164, 32, 113)",
    technique_text_color_muted: "white",
    scrollbar_width: "10px"
  }
}




  // ********** STYLE SWITCHER **********

  // EXPAND MENU
    $(".topbar-desktop-text").on("click", function(){
      $(".topbar-desktop").toggleClass("topbar-desktop-expanded");
      $("body").toggleClass("body-expanded-1");
    });

    var char_selection_timeout;
  // CHARACTER SELECT
    $(".topbar-desktop-character").on("click", function(){
      var character = $(this).data("character");
      globalstyle = character;
      switchExperience(character);
      clearTimeout(char_selection_timeout);
      char_selection_timeout = setTimeout(function(){
        $(".topbar-desktop").removeClass("topbar-desktop-expanded");
        $("body").removeClass("body-expanded-1");
      }, 9999999);
    });


    function deselectOtherCharacters(character){
      var icon = $(`.topbar-desktop-character[data-character=${character}]`);
      AnimateThis(icon, 'rubberBand');
      $(".topbar-desktop-character .topbar-desktop-character-anim").removeClass("topbar-desktop-character-activated");
      $(`.topbar-desktop-character[data-character=${character}] .topbar-desktop-character-anim`).addClass("topbar-desktop-character-activated");
    }




  // ********** CHARACTER: COLOUR SWITCHER **********

  function characterColourSwitch(selected_char){
    document.documentElement.style.setProperty('--font_main', colour_styles[selected_char].font_main);
    document.documentElement.style.setProperty('--font_secondary', colour_styles[selected_char].font_secondary);
    document.documentElement.style.setProperty('--font_heading', colour_styles[selected_char].font_heading);
    document.documentElement.style.setProperty('--font_color_p', colour_styles[selected_char].font_color_p);
    document.documentElement.style.setProperty('--font_color_s', colour_styles[selected_char].font_color_s);
    document.documentElement.style.setProperty('--header_bg_flat', colour_styles[selected_char].header_bg_flat);
    document.documentElement.style.setProperty('--header_bg', colour_styles[selected_char].header_bg);
    document.documentElement.style.setProperty('--header_bg_filter', colour_styles[selected_char].header_bg_filter);
    document.documentElement.style.setProperty('--row_service_filter', colour_styles[selected_char].row_service_filter);
    document.documentElement.style.setProperty('--gradient_1', colour_styles[selected_char].gradient_1);
    document.documentElement.style.setProperty('--gradient_2', colour_styles[selected_char].gradient_2);
    document.documentElement.style.setProperty('--gradient_3', colour_styles[selected_char].gradient_3);
    document.documentElement.style.setProperty('--gradient_4', colour_styles[selected_char].gradient_4);
    document.documentElement.style.setProperty('--gradient_5', colour_styles[selected_char].gradient_5);
    document.documentElement.style.setProperty('--technique_bg_color', colour_styles[selected_char].technique_bg_color);
    document.documentElement.style.setProperty('--technique_text_color', colour_styles[selected_char].technique_text_color);
    document.documentElement.style.setProperty('--technique_text_color_muted', colour_styles[selected_char].technique_text_color_muted);

  }





//  ********************** CONTACT **********************


$(".input-user-text1").keyup(function(event){
  $(".user-text1").text( $(this).val() );
})

$(".input-user-text1").val();



// ******************** ANIMATION HANDLER ***************************

function AnimateThis(element, animatestyle){
  animateCSS(element[0], animatestyle);
}


// ******************** TOTAL STYLE SWITCH ***************************


  function switchExperience(character){
    deselectOtherCharacters(character);
    characterColourSwitch(character);
    switchChatbotStyleSelector(character);
    switchServiceText(character);
    switchTechniquesText(user_selected_technique);
    switchTechniquesBG(character);
    switchSampleHeadings(character);
    switchIntroHeadings(character);
    switchAboutText(character);
  }


  // ******************** INITIAL STYLE DEPLOYMENT ***************************

switchExperience(globalstyle);






  // COMMENT

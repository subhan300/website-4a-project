
var intro_transcript = {
  community: {
    title: "Celebrate your unique voice with conversational copy and practical UX writing"
  },
  corporate: {
    title: "Science-backed copywriting built for conversion and efficient user experiences"
  },
  entertainment: {
    title: "I wield wicked words wisely without wasting a single letter"
  },
  luxury: {
    title: "The art of precision copywriting and smooth interfaces"
  },
  technology: {
    title: "Enhance your communications with psychology-based copywriting and UX writing"
  },
}

function switchIntroHeadings(character){
  $(".intro-title").text(intro_transcript[character].title)
}

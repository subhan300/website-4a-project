
var samples_transcript = {
  community: {
    title1: "Human-centered UX",
    title2: "Cool Copy" // Bad
  },
  corporate: {
    title1: "Helpful UX", // Bad
    title2: "Sales-boosting Copy"
  },
  entertainment: {
    title1: "Unique UX", // Bad
    title2: "Creative Copy"
  },
  luxury: {
    title1: "Smooth UX",
    title2: "Charming Copy" // Bad
  },
  technology: {
    title1: "Useful UX", // Bad
    title2: "Digital Copy"
  },
}

function switchSampleHeadings(character){
  $(".sample-title-1").text(samples_transcript[character].title1)
  $(".sample-title-2").text(samples_transcript[character].title2)
}

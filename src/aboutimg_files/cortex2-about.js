var about_transcript = {
  community: "<p>I write hard. I play hard. I celebrate diverse voices.</p> <p> Creator of crisp, concise copy, and seamless interfaces. I realize the potential of accessible design for the good of culture, conversion, and connection.</p>",
  corporate: `<p>Hello, I’m Nathan, a freelance digital copywriter and UX writer. Based in Sydney. Available worldwide.</p> <p> I have a research degree in psychology (visual perception) which means I know how to compose words that influence a target audiences feelings, thoughts, and responses regarding a product, service, advertising/marketing campaign, or interface.</p> `,
  entertainment: "<p> What’s next after next level? Moi. That’s who!</p> <p>My superpower is conjuring crystal-clear copy that hacks your users' brains to guide their clicks and make them buy your shit. </p>",
  luxury: `<p> The appeal of my copy lies in elegant craftsmanship and exquisite detail. As a former neuroscientist, I craft psychology-based copywriting which enjoys global renown as classically elegant with timeless design. </p> <p> No other copywriter incorporates so many of the technical tours de force of haute rédacteur.</p>`,
  technology: "<p> My copywriting and UX writing draws on abilities developed in the psychological sciences. </p> <p> Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.</p>"
}

function switchAboutText(character){
  $(".about-text").html(`<h3 class="heading-block-background">About</h3>`)
  $(".about-text").append(about_transcript[character])
}

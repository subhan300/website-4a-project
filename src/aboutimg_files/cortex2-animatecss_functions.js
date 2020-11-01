function animateCSS(element, animationName, callback) {
    const node = element;
    node.classList.add('animated', animationName, "fast")

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName, "fast")
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

// ******************** ANIMATION HANDLER ***************************

function AnimateThis(element, animatestyle){
  animateCSS(element[0], animatestyle);
}

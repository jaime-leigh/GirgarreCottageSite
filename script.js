function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

document.getElementById("serviceimg").addEventListener("mouseenter", mouseEnter);
document.getElementById("serviceimg").addEventListener("mouseleave", mouseLeave);

function mouseEnter(myid) {
    // document.getElementById("hiddenOverlay").style.display = "flex";
    document.getElementById(myid).classList.add("flexDisplay")
    document.getElementById(myid).classList.remove("noneDisplay")
}

function mouseLeave(myid) {
    document.getElementById(myid).classList.remove("flexDisplay")
    document.getElementById(myid).classList.add("noneDisplay")
};

//CAROUSEL


const track = document.querySelector('.carousel__track');
//this creates an array built from the li elements of the track constant we just created i.e. an array of the images
const slides = Array.from(track.children);
//defining the left and right buttons
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
//defining the dots navigation
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

//this is to get the width of the images they should be the same
const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

//we are going to create a loop that will do the same as the three lines of code above

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    //now we need to remove'.currentSlide' from the first slide and change it to hte new slide
    //remember, when using a classList, don't put a dot but when using query selectors, do.
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {

    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden')
    } else if (targetIndex === slides.length - 1) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}



prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

});

//when I click screen Left, move slides to the screenLeft
// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    //move to the next slide
    //'track.queryselector just looks through 'track' i.e. the variable we created up top of the document, for 'current slide
    console.log(slideWidth)
    const currentSlide = track.querySelector('.current-slide');
    //below we are able to select the ensuing element of current slide i.e. the next image, by using nextElementSibling
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevButton, nextButton, nextIndex);

});
// when I click the nav indicators, move to that slide

//the dotsNav is the entire div surrounding the 3 dots
dotsNav.addEventListener('click', e => {
    //what indicator was clicked?
    //What is 'e'? e is the event. In this instance, it is telling you what you clicked on
    //below we are saying if you click in that div, but you don't click on a button element, then you have clicked nothing
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    //findIndex sort of works like a for loop, returns the first item in the array with a truthy value matching your guery
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

    hideShowArrows(slides, prevButton, nextButton, targetIndex);


});
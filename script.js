let scrollContainer = document.querySelector('.gallery');
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');

scrollContainer.addEventListener("wheel", function (event) {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})

next.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

previous.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})
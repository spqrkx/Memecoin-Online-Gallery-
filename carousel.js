const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const itemWidth = items[0].offsetWidth + 20;

// Clone all items for seamless infinite scrolling
items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
});
items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.insertBefore(clone, track.firstChild);
});

// Set initial position to the middle of the cloned items
let currentPosition = -items.length * itemWidth;
track.style.transform = `translateX(${currentPosition}px)`;

function moveCarousel() {
    currentPosition -= 2; // Move left by 2px for faster scrolling
    track.style.transition = 'none';
    track.style.transform = `translateX(${currentPosition}px)`;

    // Reset position seamlessly when reaching the end of the cloned items
    if (Math.abs(currentPosition) >= items.length * itemWidth * 2) {
        currentPosition = -items.length * itemWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
    }

    requestAnimationFrame(moveCarousel); // Continuously call the function
}

// Start the continuous movement
moveCarousel();
// Scroll to memories
function scrollToMemories() {
    document.getElementById("counter").scrollIntoView({
        behavior: "smooth"
    });
}

// Friendship Counter
const startDate = new Date("September 20, 2025 00:00:00");

function updateCounter() {

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerHTML =
        days + " Days ❤️";
}

updateCounter();

setInterval(updateCounter, 1000);
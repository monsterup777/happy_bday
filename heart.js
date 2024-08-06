document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.querySelector(".heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        heart.style.opacity = Math.random();
        heart.style.transform = `scale(${Math.random()})`;
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 100);
});



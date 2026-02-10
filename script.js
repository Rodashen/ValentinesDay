// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Enable audio on mobile with user gesture
document.addEventListener("click", () => {
    const audioElement = document.getElementById("mobile-audio");
    if (audioElement && isMobile) {
        audioElement.play().catch(() => {});
    }
}, { once: true });

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Mobile touch support for NO button
noBtn.addEventListener("touchstart", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    // Embed hidden YouTube player with the requested video starting at 149 seconds (audio only)
    const youtubeContainer = document.createElement("div");
    youtubeContainer.style.marginTop = "12px";
    youtubeContainer.style.width = "100%";
    youtubeContainer.style.display = "flex";
    youtubeContainer.style.justifyContent = "center";
    youtubeContainer.style.height = "0";
    youtubeContainer.style.overflow = "hidden";

    const iframe = document.createElement("iframe");
    iframe.width = "1";
    iframe.height = "1";
    iframe.src = "https://www.youtube.com/embed/rRzxEiBLQCA?start=149&autoplay=1&controls=0&rel=0&modestbranding=1&fs=0&allow=accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
    iframe.style.border = "none";

    youtubeContainer.appendChild(iframe);
    document.querySelector(".letter-window").appendChild(youtubeContainer);
});

// ===============================
// Intro screen
// ===============================

const intro = document.getElementById("intro");
const website = document.getElementById("website");
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      intro.style.display = "none";
      website.classList.remove("hidden");
    }, 800);
  });
}

// ===============================
// Countdown
// ===============================

const birthday = new Date("2026-08-13T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===============================
// Accordion
// ===============================

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isOpen = panel.classList.contains("open");

    // tutup semua panel
    document.querySelectorAll(".panel").forEach((p) => {
      p.classList.remove("open");
    });

    document.querySelectorAll(".accordion").forEach((a) => {
      a.classList.remove("active");
    });

    // buka panel yang diklik
    if (!isOpen) {
      panel.classList.add("open");
      button.classList.add("active");
    }
  });
});

// ===============================
// Smooth scroll (optional)
// ===============================

document.documentElement.style.scrollBehavior = "smooth";

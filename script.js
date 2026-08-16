document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const introScreen = document.getElementById("intro");
  const website = document.getElementById("website");

  // 1. Transisi dari Intro Screen ke Main Website
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      introScreen.style.opacity = "0";
      introScreen.style.transition = "opacity 0.4s ease";
      setTimeout(() => {
        introScreen.classList.add("hidden");
        website.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 400);
    });
  }

  // 2. Accordion Timeline
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((acc) => {
    acc.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const toggle = this.querySelector(".toggle-icon");
      const isOpen = panel.classList.contains("open");

      // Menutup accordion lain agar rapi
      accordions.forEach((otherAcc) => {
        const otherPanel = otherAcc.nextElementSibling;
        const otherToggle = otherAcc.querySelector(".toggle-icon");
        otherPanel.classList.remove("open");
        if (otherToggle) otherToggle.textContent = "+";
      });

      // Buka/tutup yang diklik
      if (!isOpen) {
        panel.classList.add("open");
        if (toggle) toggle.textContent = "−";
      } else {
        panel.classList.remove("open");
        if (toggle) toggle.textContent = "+";
      }
    });
  });

  // 3. Countdown / Timer Realtime
  const targetDate = new Date("August 17, 2026 00:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = Math.abs(now - targetDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = days;
    if (hoursEl) hoursEl.innerText = hours;
    if (minutesEl) minutesEl.innerText = minutes;
    if (secondsEl) secondsEl.innerText = seconds;
  }

  setInterval(updateTimer, 1000);
  updateTimer();
});

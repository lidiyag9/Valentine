const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");
const sound = document.getElementById("sound");

let scale = 1;

// движение + уменьшение No
function moveNo() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 80 - 40;

  scale -= 0.08;
  if (scale < 0.5) scale = 0.5;

  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

// десктоп
noBtn.addEventListener("mouseover", moveNo);

// мобильный
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
});

// сердечки
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight - 30 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1200);
}

// YES
yesBtn.addEventListener("click", () => {
  sound.play();

  const heartsInterval = setInterval(createHeart, 120);
  setTimeout(() => clearInterval(heartsInterval), 1500);

  card.innerHTML = `
    <div class="emoji">🥰💘🥹</div>
    <h1>YES!!!</h1>

    <div class="slider fade-in">
      <img src="IMG_4176.jpeg" class="slide active">
      <img src="IMG_4259.jpeg" class="slide">
      <img src="IMG_4268.jpeg" class="slide">
    </div>

    <p class="final-line">
    Every moment with you is my favorite.
  </p>
  <p>I love you 💖</p>
    <p>Happy Valentine’s Day</p>

  <button id="replay" class="replay-btn">
    Replay 💞
  </button>
  `;

  initSlider();
});

function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");

  let index = 0;
  let startX = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
    createPhotoHearts();
  }

  // автоперелистывание
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);

  // свайп пальцем
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        index = (index + 1) % slides.length;
      } else {
        index = (index - 1 + slides.length) % slides.length;
      }
      showSlide(index);
    }
  });

  showSlide(index);
}
function createPhotoHearts() {
  const slider = document.querySelector(".slider");

  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.className = "photo-heart";
    heart.innerText = "💖";

    heart.style.left = Math.random() * 80 + 10 + "%";
    heart.style.top = Math.random() * 60 + 20 + "%";

    slider.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }
}
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "replay") {
    location.reload();
  }
});

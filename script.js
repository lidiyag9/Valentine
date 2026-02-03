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

  <img 
    src="IMG_4176.jpeg" 
    alt="Us together"
    class="photo"
  >

  <p>I love you 💖</p>
  <p>Happy Valentine’s Day</p>
`;
});

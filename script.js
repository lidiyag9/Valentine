const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");

function moveButton() {
  const maxX = 120;
  const maxY = 60;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// 👆 Реакция на НАВЕДЕНИЕ (десктоп)
noBtn.addEventListener("mouseover", moveButton);

// 📱 Реакция на ТАП (мобильный)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <div class="emoji">💘🥰💘</div>
    <h1>YAY!!!</h1>
    <p>I knew it 💕</p>
    <p>Happy Valentine’s Day, Moshe 😘</p>
  `;
});

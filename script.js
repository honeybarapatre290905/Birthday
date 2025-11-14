// document.getElementById("years").innerText = 20; // Change age here

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("screen1").classList.add("hidden");
  document.getElementById("screen2").classList.remove("hidden");
  startConfetti();
});

/* CONFETTI ANIMATION */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettis = [];
  for (let i = 0; i < 200; i++) {
    confettis.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confettis.forEach(c => {
      c.y += c.d;
      if (c.y > canvas.height) c.y = 0;
    });
  }

  setInterval(draw, 10);
}

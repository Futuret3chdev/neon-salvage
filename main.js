const tg = window.Telegram?.WebApp;
if (tg) tg.expand();

const spinBtn = document.getElementById("spinBtn");
const status = document.getElementById("status");
const reels = document.querySelectorAll(".reel");
const energyEl = document.getElementById("energy");

const API_URL = "https://neon-salvage.vercel.app/api/spin";

function startSpinAnimation() {
  reels.forEach(r => {
    r.classList.add("spinning");
    r.innerText = ["CR10", "CR20", "CR40", "MOD"][Math.floor(Math.random() * 4)];
  });
}

function stopReel(reel, value, delay) {
  setTimeout(() => {
    reel.classList.remove("spinning");
    reel.innerText = value;
  }, delay);
}

spinBtn.onclick = async () => {
  if (!tg) {
    status.innerText = "Telegram not detected";
    return;
  }

  spinBtn.disabled = true;
  status.innerText = "Extracting...";

  startSpinAnimation();

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        initData: tg.initData
      })
    });

    const data = await res.json();

    if (data.error) {
      status.innerText = data.error;
      spinBtn.disabled = false;
      return;
    }

    // staggered reel stop (slot feel)
    stopReel(reels[0], data.reels[0], 600);
    stopReel(reels[1], data.reels[1], 1000);
    stopReel(reels[2], data.reels[2], 1400);

    setTimeout(() => {
      energyEl.innerText = data.energy;
      status.innerText = `+${data.reward} CR`;
      spinBtn.disabled = false;
    }, 1500);

  } catch (err) {
    console.error(err);
    status.innerText = "Server error";
    reels.forEach(r => r.classList.remove("spinning"));
    spinBtn.disabled = false;
  }
};

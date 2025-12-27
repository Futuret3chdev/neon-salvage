const tg = window.Telegram?.WebApp;
if (tg) tg.expand();

const spinBtn = document.getElementById("spinBtn");
const status = document.getElementById("status");
const reels = document.querySelectorAll(".reel");
const energyEl = document.getElementById("energy");

// 🔴 CHANGE THIS AFTER API DEPLOY
const API_URL = "http://localhost:3000/spin";

spinBtn.onclick = async () => {
  if (!tg) {
    status.innerText = "Telegram not detected";
    return;
  }

  status.innerText = "Extracting...";

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
      return;
    }

    reels.forEach((r, i) => {
      r.innerText = data.reels[i];
    });

    energyEl.innerText = data.energy;
    status.innerText = `+${data.reward} CR`;
  } catch (err) {
    status.innerText = "Server error";
    console.error(err);
  }
};

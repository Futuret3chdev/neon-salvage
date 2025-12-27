const tg = window.Telegram?.WebApp;

// Make sure we are inside Telegram
if (!tg) {
  document.getElementById("status").innerText =
    "This app must be opened from Telegram";
} else {
  tg.expand();
}

const spinBtn = document.getElementById("spinBtn");
const status = document.getElementById("status");
const reels = document.querySelectorAll(".reel");
const energyEl = document.getElementById("energy");

// ✅ Live Vercel API endpoint
const API_URL = "https://neon-salvage.vercel.app/api/spin";

spinBtn.onclick = async () => {
  if (!tg || !tg.initData) {
    status.innerText = "Telegram init data missing";
    return;
  }

  status.innerText = "Extracting...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        initData: tg.initData
      })
    });

    let data;
    try {
      data = await res.json();
    } catch {
      status.innerText = "Invalid server response";
      return;
    }

    // ❌ API-level error
    if (!res.ok) {
      status.innerText = data.error || "API error";
      console.error("API ERROR:", data);
      return;
    }

    // ✅ Successful spin
    reels.forEach((r, i) => {
      r.innerText = data.reels[i] || "▣";
    });

    energyEl.innerText = data.energy;
    status.innerText = `+${data.reward} CR`;

  } catch (err) {
    console.error("NETWORK ERROR:", err);
    status.innerText = "Network / CORS error";
  }
};

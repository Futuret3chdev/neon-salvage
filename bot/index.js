import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// ✅ MUST MATCH /setdomain AND Mini App HOST
const WEB_APP_URL = "https://neon-salvage.vercel.app";

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🚀 Neon Salvage is live!\n\nTap below to start salvaging:",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "▶ Open Neon Salvage",
              web_app: {
                url: WEB_APP_URL
              }
            }
          ]
        ]
      }
    }
  );
});

console.log("🤖 Neon Salvage bot running...");

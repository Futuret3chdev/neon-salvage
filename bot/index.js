import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const WEB_APP_URL = "https://memetorrent.futuret3ch.com.au/games/neon-salvage/"; // Mini App URL

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚀 Neon Salvage is online", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "▶ Open Neon Salvage",
          web_app: { url: WEB_APP_URL }
        }
      ]]
    }
  });
});

console.log("Bot running...");

import CryptoJS from "crypto-js";

/**
 * Verifies Telegram WebApp initData
 * https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app
 */
export function verifyTelegramInitData(
  initData: string,
  botToken: string
): boolean {
  const params = new URLSearchParams(initData);
  const hash = params.get("hash");

  if (!hash) return false;

  params.delete("hash");

  const dataCheckString = Array.from(params.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  const secretKey = CryptoJS.HmacSHA256(
    botToken,
    "WebAppData"
  );

  const computedHash = CryptoJS.HmacSHA256(
    dataCheckString,
    secretKey
  ).toString(CryptoJS.enc.Hex);

  return computedHash === hash;
}

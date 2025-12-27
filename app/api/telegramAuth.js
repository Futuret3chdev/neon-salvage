import CryptoJS from "crypto-js";

export function verifyTelegramInitData(initData, botToken) {
  const params = new URLSearchParams(initData);
  const hash = params.get("hash");

  if (!hash) return false;

  params.delete("hash");

  const dataCheckString = [...params.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");

  const secretKey = CryptoJS.HmacSHA256(
    botToken,
    "WebAppData"
  );

  const calculatedHash = CryptoJS.HmacSHA256(
    dataCheckString,
    secretKey
  ).toString(CryptoJS.enc.Hex);

  return calculatedHash === hash;
}

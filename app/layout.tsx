import "./globals.css";

export const metadata = {
  title: "Neon Salvage",
  description: "AAA Telegram Mini App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Telegram WebApp SDK */}
        <script
          src="https://telegram.org/js/telegram-web-app.js"
          defer
        />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

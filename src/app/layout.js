import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Emadamerho-Atori Nefe James",
  description: "Emadamerho-Atori Nefe James",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`custombg customfg`}>
        {children}
      </body>
    </html>
  );
}

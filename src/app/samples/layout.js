import localFont from "next/font/local";
import "../globals.css";

export const metadata = {
  title: "Emadamerho-Atori Nefe James || Services",
  description: "Emadamerho-Atori Nefe James || Services",
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

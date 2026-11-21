import "./globals.css";

export const metadata = {
  title: "Yashaswini | Personal Portfolio",
  description:
    "Welcome to Yashaswini's personal portfolio website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
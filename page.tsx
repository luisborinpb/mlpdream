import "./globals.css";

export const metadata = {
  title: "Pickleball Dynasty MVP",
  description: "Draft your ultimate MLP-style pickleball team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

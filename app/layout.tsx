import "./globals.css";

export const metadata = {
  title: "StromPrisApp",
  description: "An app to measure electricity use",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

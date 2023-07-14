import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Sales Admin Dashboard",
  description: "Making the Right solution for easy sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

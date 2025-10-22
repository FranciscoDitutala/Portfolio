import "../styles/globals.css";
import { Inter } from "next/font/google";
import "@fontsource-variable/inter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Francisco Ditutala — Portfolio",
  description: "Portfolio profissional e currículo digital de Francisco Ditutala.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

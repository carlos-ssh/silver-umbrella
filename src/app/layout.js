import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkyBite",
  description: "Encuentra el clima, su gastronomia de tus destinos favoritos con la IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

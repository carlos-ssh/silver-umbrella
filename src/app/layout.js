import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reservando Weather",
  description: "Encuentra el clima de tus destinos favoritos, dentro de México y los EUA",
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

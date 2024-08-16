import { Roboto } from 'next/font/google'

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { BarNav } from "@/components/shared/BarNav"
import { Footer } from '@/components/shared/Footer/Footer';


import 'bootstrap/dist/css/bootstrap.min.css'
import '../sass/globals.sass'


const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin']
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generica",
  description: "Generated by create next app",
};

export default function RootLayout({ children ,}: Readonly <{ children: React.ReactNode;}>) {


  return (
    <html lang="en">
      <body className={roboto.className}>
        <BarNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

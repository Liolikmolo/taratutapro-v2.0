"use client";

import {Manrope} from "next/font/google";
import "./globals.css";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {ThemeProvider} from "next-themes";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

const manrope = Manrope({
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const pathName = usePathname();
    const [is404, setIs404] = useState(false);

    useEffect(() => {
        fetch(pathName, {method: "HEAD"}).then((res) => {
            if (res.status === 404) {
                setIs404(true);
            } else {
                setIs404(false);
            }
        });
    }, [pathName]);

    const hideLayout = is404

    return (
        <html lang = "ru" suppressHydrationWarning>
      <body className = {manrope.className}>
        <ThemeProvider attribute = {"class"} enableSystem = {false} defaultTheme = "light">
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
            <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
    );
}
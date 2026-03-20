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
            <head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4KVE6K5KGD"></script>
                {/* <script>
                    function gtag(){ 
                    dataLayer = window.dataLayer || []
                    dataLayer.push(arguments)
                    return dataLayer
                    }
                    gtag("js", new Date());
                    gtag('config', 'G-4KVE6K5KGD');
                </script> */}
                <meta name="google-site-verification" content="-gHHno-uqJ7dEmK2J_iREdewXLFVEiMDNrQSZJWr920" />
            </head>
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

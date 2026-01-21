import "./globals.css";
import Head from "next/head";
import Header from "./componants/header";
import Footer from "./componants/footer";
import Toggle from "./componants/toggle";

export const metadata = {
  title: "Joseph Cann - Web Developer",
  description: "My name is Joseph Cann, I am a full stack freelance web developer. This is my portfolio webpage!",
  icons: {
    icon: "/IMG1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Joseph Cann - Web Developer</title>
          <meta name="description" content="My name is Joseph Cann, I am a full stack freelance web developer. This is my portfolio webpage!"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/*SVG for modern browsers*/}
          <link rel="icon" type="image/svg+xml" href="/logos/vercel.svg" />
          {/*Fallback for Bing & older browsers*/}
          <link rel="alternate icon" href="/logos/vercel.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/IMG1.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/IMG1.png" />
          {/*iOS (optional but recommended)*/}
          <link rel="apple-touch-icon" href="/logos/vercel.svg" />
      </Head>
      <body>
       <Toggle/>
       <Header/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}

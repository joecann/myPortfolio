"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header(){
    const [theme, setTheme] = useState("light");
    const [burger, setBurger] = useState(true);
    const [cross, setCross] = useState(false);

     useEffect(() => {
        // Safe: runs only in the browser
        const root = document.documentElement;
        // Read initial theme set elsewhere
        setTheme(root.dataset.theme ?? "light");
        // Watch for external theme changes
        const observer = new MutationObserver(() => {
        setTheme(root.dataset.theme ?? "light");
        });

        observer.observe(root, {attributes: true, attributeFilter: ["data-theme"],});
        // Cleanup on unmount
        return () => observer.disconnect();
    }, []);

    const closeBurger = () =>{
        setBurger(false)
        setCross(true);
        document.documentElement.style.overflow = "hidden";
    }

    const closeCross = () =>{
        setBurger(true)
        setCross(false);
        document.documentElement.style.overflow = "auto";
    }

    const onclick = () =>{
        if(burger){
            closeBurger();
            return;
        }
        closeCross()
    }

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            closeCross();
            el.scrollIntoView({ behavior: "smooth" });
        }
      };
    
    return(
        <header>
            <div className={`burger ${burger ? "show": ""}`} onClick={() => onclick()}>
                {theme === "light" ? (
                <Image src="/burger.png" alt="Menu Button" width={48} height={48} />) : (
                <Image src="/burger2.png" alt="Menu Button" width={48} height={48} />)}
            </div>
            <div className={`cross ${cross ? "show": ""}`} onClick={() => onclick()}>
                {theme === "light" ? (
                <Image src="/cross2.png" alt="Cross Button" width={48} height={48} />) : (
                <Image src="/cross.png" alt="Cross Button" width={48} height={48} />)}
            </div>
            <nav className="list-menu">
                <button onClick={() => scrollToSection("about")}>About</button>
                <button onClick={() => scrollToSection("services")}>Services</button>
                <button onClick={() => scrollToSection("projects")}>Projects</button>
                <button onClick={() => scrollToSection("testimonials")}>Testimonials</button>
                <button onClick={() => scrollToSection("contacts")}>Contact</button>
            </nav>

            <nav className={`dropdown-menu ${cross ? "show": ""}`}>
                <div className="nav-buttons">
                    <button onClick={() => scrollToSection("about")}>About</button>
                    <button onClick={() => scrollToSection("services")}>Services</button>
                    <button onClick={() => scrollToSection("projects")}>Projects</button>
                    <button onClick={() => scrollToSection("testimonials")}>Testimonials</button>
                    <button onClick={() => scrollToSection("contacts")}>Contact</button>
                </div>
            </nav>
        </header>
    )
}
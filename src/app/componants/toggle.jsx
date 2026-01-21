"use client"
import { useState } from "react"

export default function Toggle(){
    const [pressed, setPressed] = useState(false);

    const switchToggle = () =>{
        const root = document.documentElement;
        const current = root.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
       
        if (pressed === false) {
          root.setAttribute("data-theme", next);
          setPressed(true);
          return;
        } 

        root.setAttribute("data-theme", next);
        setPressed(false);
    }

    return(
        <div className="toggle-container" onClick={()=> switchToggle()}>
            <div className="toggle-wrapper">
                <div className={`toggle ${pressed ? "pressed": ""}`}  ></div>
            </div>
        </div>
    )
}
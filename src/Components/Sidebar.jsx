import { useState } from "react";
import Intro from "./Intro";
import SidebarData from "./SidebarData";

export default function Sidebar(){
    const [toggle, setToggle] = useState(false);

    return(
        <div className={`${toggle ? "w-[4.9rem]" : ""} sidebar-container mt-2 mb-2 bg-zinc-800 h-[100%] w-[17rem] rounded-xl ml-6 p-4 border transition all duration-500 border-solid border-zinc-800 relative`}>
            <Intro toggle={toggle}/>
            <SidebarData toggle={toggle}/>
            <div 
                className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-[#00000071] rounded-full cursor-pointer"
                onClick={() => {
                    setToggle(!toggle)
                }}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`${toggle ? "rotate-180" : ""} w-6 h-6 text-white transition-all duration-500`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
        </div>
    );
}
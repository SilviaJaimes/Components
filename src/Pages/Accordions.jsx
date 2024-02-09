import AccordionNormal from "../Components/AccordionNormal";
import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Accordions(){
    const code = useState(
        `
import { useState } from "react"

export default function Accordions(){
    const data = [
        {
            title: "Accordion 1",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas exercitationem pariatur eligendi, minima fugit blanditiis voluptatibus quam officiis incidunt, sit illum beatae, molestiae recusandae quasi ex omnis iure magnam tempore?"
        },
        {
            title: "Accordion 2",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas exercitationem pariatur eligendi, minima fugit blanditiis voluptatibus quam officiis incidunt, sit illum beatae, molestiae recusandae quasi ex omnis iure magnam tempore?"
        },
        {
            title: "Accordion 3",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas exercitationem pariatur eligendi, minima fugit blanditiis voluptatibus quam officiis incidunt, sit illum beatae, molestiae recusandae quasi ex omnis iure magnam tempore?"
        }
    ];

    const [selected, setSelected] = useState(null)

    const toggle = i =>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    };

    return(
        <div className="accordion w-full">
            {data.map((item, i)=>(
                <div key={i} className="item bg-zinc-900 mb-[5px] px-[20px] py-[15px] rounded-lg">
                    <div className="flex titles text-[#ffffff] justify-between cursor-pointer text-[20px]" onClick={()=> toggle(i)}>
                        <h2>{item.title}</h2>
                        <span>{selected === i?'-':'+'}</span>
                    </div> 
                    <div className={selected === i?'content show':'content'}>
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
}
    ` );

    return(
        <div className="accordio mt-[50px] mx-[150px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Accordion</h2>
            <p className="text-[#ffffff] text-[18px] mt-[20px]">The accordion displays a list of different options, the previously opened option is picked up to open the next one.</p>            
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample 
                title1="Component"
                content1={
                    <div className="media flex gap-4 mt-4 mx-8 p-10 border-[1px] border-zinc-700 rounded-lg items-center">
                        <AccordionNormal/>
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
            />
        </div>
    );
}
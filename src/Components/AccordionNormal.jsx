import { useState } from "react";

export default function AccordionNormal(){
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
    ]

    const [selected, setSelected] = useState(null)

    const toggle = i =>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return(
        <div className="accordion w-full">
            {data.map((item, i)=>(
                <div key={i} className="item bg-zinc-500 mb-2 px-8 py-[15px] rounded-lg">
                    <div className="flex titles text-[#000] justify-between cursor-pointer text-[20px]" onClick={()=> toggle(i)}>
                        <h2>{item.title}</h2>
                        <span>{selected === i?'-':'+'}</span>
                    </div> 
                    <div className={selected === i?'content show':'content'}>
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    )
}
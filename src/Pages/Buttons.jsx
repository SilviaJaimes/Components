import ButtonNormal from "../Components/ButtonNormal";
import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Buttons() {
    const sizes = [
        {
            name: "Small",
            size: "sm"
        },
        {
            name: "Medium",
            size: "base"
        },
        {
            name: "Large",
            size: "lg"
        }
    ];

    const color = [
        {
            name: "Default",
            color: "default"
        },
        {
            name: "Primary",
            color: "primary"
        },
        {
            name: "Secondary",
            color: "secondary"
        },
        {
            name: "Success",
            color: "success"
        },
        {
            name: "Warning",
            color: "warning"
        },
        {
            name: "Danger",
            color: "danger"
        }
    ];

    const radius = [
        {
            name: "None",
            radius: "none"
        },
        {
            name: "Smll",
            radius: "sm"
        },
        {
            name: "Medium",
            radius: "md"
        },
        {
            name: "Large",
            radius: "lg"
        },
        {
            name: "Full",
            radius: "full"
        }
    ];

    const code = useState(
        `
import ButtonNormal from "../Components/ButtonNormal";

export default function Buttons(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            <ButtonNormal 
                className="relative inline-block px-4 py-2 bg-[#318aac] text-[17px] text-[#ffffff] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" 
                Button="Button"
            />
        </div>
    );
}
    `);

    const code0 = useState(
        `
export default function ButtonNormal({className, Button}){
    return(
        <button className={className}>
            <p>{Button}</p>
        </button>
    )
}
    `);

    const code1 = useState(
        `
import ButtonNormal from "../Components/ButtonNormal";

export default function Buttons(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            {sizes.map((item, index) => (
                <ButtonNormal key={index} className="relative inline-block px-4 py-2 bg-[#6d6d6d] text-{item.size} text-[#ffffff] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#9e9e9e] duration-300" Button={item.name}/>
            ))}
        </div>
    );
}
    `);

    const code2 = useState(
        `
import ButtonNormal from "../Components/ButtonNormal";

export default function Buttons(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            {color.map((item, index) => (
                <ButtonNormal key={index} className="relative inline-block px-4 py-2 bg-{item.color} text-[17px] text-[#ffffff] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#9e9e9e] duration-300" Button={item.name}/>
            ))}
        </div>
    );
}
    `);

    const code3 = useState(
        `
import ButtonNormal from "../Components/ButtonNormal";

export default function Buttons(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            {radius.map((item, index) => (
                <ButtonNormal key={index} className="relative inline-block px-6 py-2 bg-[#6d6d6d] text-[17px] text-[#ffffff] rounded-{item.radius} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#9e9e9e] duration-300" Button={item.name} />
            ))}
        </div>
    );
}
    `);

    return (
        <div className="butto mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Button</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">The buttons have different options of use for the users, each one chooses its own way of use.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <ButtonNormal 
                            className="relative inline-block px-4 py-2 bg-[#318aac] text-[17px] text-[#ffffff] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" 
                            Button="Button"
                        />
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
                title3="ButtonNormal"
                code1={code0}
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Sizes</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {sizes.map((item, index) => (
                            <ButtonNormal key={index} className={`relative inline-block px-4 py-2 bg-[#6d6d6d] text-${item.size} text-[#ffffff] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#9e9e9e] duration-300`} Button={item.name}/>
                        ))}
                    </div>
                }
                title2="Code"
                code={code1}
                color="secondary"
                title3="ButtonNormal"
                code1={code0}
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Colors</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {color.map((item, index) => (
                            <ButtonNormal key={index} className={`relative inline-block px-4 py-2 bg-${item.color} text-[17px] text-[#ffffff] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#9e9e9e] duration-300`} Button={item.name}/>
                        ))}
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
                title3="ButtonNormal"
                code1={code0}
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Radius</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center mb-6">
                        {radius.map((item, index) => (
                            <ButtonNormal key={index} className={`relative inline-block px-6 py-2 bg-[#6d6d6d] text-[17px] text-[#ffffff] rounded-${item.radius} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#9e9e9e] duration-300`} Button={item.name} />
                        ))}
                    </div>
                }
                title2="Code"
                code={code3}
                color="secondary"
                title3="ButtonNormal"
                code1={code0}
            />
        </div >
    );
}
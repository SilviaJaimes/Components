import TabExample from "../Components/TabExample";
import { useState } from 'react';

export default function Selects() {
    const data = [
        "Default",
        "Amsterdam",
        "New York",
        "London",
        "Berlin",
        "Los Angeles",
        "Bogóta",
        "Medellín",
        "Vancouver",
        "Portland",
        "Paris"
    ];

    const sizes = [
        "sm",
        "base",
        "lg"
    ];

    const color = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger"
    ];

    const radius = [
        "none",
        "sm",
        "md",
        "lg",
        "full"
    ];

    const code = useState(
        `
export default function Selects(){
    const data = [
        "Default",
        "Amsterdam",
        "New York",
        "London",
        "Berlin",
        "Los Angeles",
        "Bogóta",
        "Medellín",
        "Vancouver",
        "Portland",
        "Paris"
    ];

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <select name="" id="" className="text-white bg-zinc-700 rounded-lg p-4 border-none text-[18px]">
                {data.map((item, index) => (
                    <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
    ` );

    const code1 = useState(
        `
export default function Selects(){
    const data = [
        "Default",
        "Amsterdam",
        "New York",
        "London",
        "Berlin",
        "Los Angeles",
        "Bogóta",
        "Medellín",
        "Vancouver",
        "Portland",
        "Paris"
    ];

    const sizes = [
        "sm",
        "base",
        "lg"
    ];

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            {sizes.map((item, index) => (
                <select name="" id="" className={"text-white bg-zinc-700 rounded-lg p-4 border-none text-{item}"} key={index}>
                    {data.map((item, index) => (
                        <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                            {item}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );
}
    `);

    const code2 = useState(
        `
export default function Selects(){
    const data = [
        "Default",
        "Amsterdam",
        "New York",
        "London",
        "Berlin",
        "Los Angeles",
        "Bogóta",
        "Medellín",
        "Vancouver",
        "Portland",
        "Paris"
    ];

    const color = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger"
    ];

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            {color.map((item, index) => (
                <select name="" id="" className={'text-black bg-{item} rounded-lg p-4 border-none text-[18px]'} key={index}>
                    {data.map((item, index) => (
                        <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                            {item}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );
}
    `);

    const code3 = useState(
        `
export default function Selects(){
    const data = [
        "Default",
        "Amsterdam",
        "New York",
        "London",
        "Berlin",
        "Los Angeles",
        "Bogóta",
        "Medellín",
        "Vancouver",
        "Portland",
        "Paris"
    ];

    const radius = [
        "none",
        "sm",
        "md",
        "lg",
        "full"
    ];

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            {radius.map((item, index) => (
                <select name="" id="" className={'text-black bg-zinc-700 rounded-{item} p-4 border-none text-[18px]'} key={index}>
                    {data.map((item, index) => (
                        <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                            {item}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );
}
    `);

    return (
        <div className="inpu mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Select</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">This component works to style images.</p>

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <select name="" id="" className="text-white bg-zinc-700 rounded-lg p-4 border-none text-[18px]">
                            {data.map((item, index) => (
                                <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Sizes</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {sizes.map((item, index) => (
                            <select name="" id="" className={`text-white bg-zinc-700 rounded-lg p-4 border-none text-${item}`} key={index}>
                                {data.map((item, index) => (
                                    <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                                        {item}
                                    </option>
                                ))}
                            </select>
                        ))}
                    </div>
                }
                title2="Code"
                code={code1}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Colors</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {color.map((item, index) => (
                            <select name="" id="" className={`text-black bg-${item} rounded-lg p-4 border-none text-[18px]`} key={index}>
                                {data.map((item, index) => (
                                    <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                                        {item}
                                    </option>
                                ))}
                            </select>
                        ))}
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Radius</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {radius.map((item, index) => (
                            <select name="" id="" className={`text-black bg-zinc-700 rounded-${item} p-4 border-none text-[18px]`} key={index}>
                                {data.map((item, index) => (
                                    <option value="" key={index} className="rounded-lg checked:bg-zinc-800 hover:bg-zinc-800">
                                        {item}
                                    </option>
                                ))}
                            </select>
                        ))}
                    </div>
                }
                title2="Code"
                code={code3}
                color="secondary"
            />
        </div>
    )
}
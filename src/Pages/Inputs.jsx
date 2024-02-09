import TabExample from "../Components/TabExample";
import { useState } from 'react';

export default function Inputs() {
    const sizes = [
        "xs",
        "base",
        "lg",
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
export default function Inputs(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-white mb-1 text-[15px]">Email</label>
                <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 w-[300px]"/>
            </div>
            <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 w-[300px]"/>
        </div>
    );
}
    ` );

    const code1 = useState(
        `
export default function Inputs(){
    const sizes = [
        "xs",
        "base",
        "lg",
    ];

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            {sizes.map((item, index) => (
                <div key={index} className="flex flex-col">
                    <label htmlFor="email" className="text-white mb-1 text-[12px]">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-[#262626] rounded-md py-3 px-2 text-{item}"
                    />
                </div>
            ))}
            {sizes.map((item, index) => (
                <input key={index} type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 text-{item}" />
            ))}
        </div>
    );
}
    `);

    const code2 = useState(
        `
export default function Inputs(){
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
                <input key={index} type="email" placeholder="Email" className="bg-[#262626] rounded-{item} py-3 px-2" />
            ))}
        </div>
    );
}
    `);

    return (
        <div className="inpu mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Input</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">This component works to style images.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white mb-1 text-[15px]">Email</label>
                            <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2"/>
                        </div>
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2" />
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
                    <div className="media grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {sizes.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <label htmlFor="email" className="text-white mb-1 text-[12px]">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`bg-[#262626] rounded-md py-3 px-2 text-${item}`}
                                />
                            </div>
                        ))}
                        {sizes.map((item, index) => (
                            <input key={index} type="email" placeholder="Email" className={`bg-[#262626] rounded-md py-3 px-2 text-${item}`} />
                        ))}
                    </div>
                }
                title2="Code"
                code={code1}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Radius</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {radius.map((item, index) => (
                            <input key={index} type="email" placeholder="Email" className={`bg-[#262626] rounded-${item} py-3 px-2`} />
                        ))}
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
            />
        </div>
    );
}
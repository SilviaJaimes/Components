import TabExample from "../Components/TabExample";
import { useState } from 'react';

export default function Inputs() {
    const code = useState(
        `
export default function Inputs(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-white mb-1 text-[15px]">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#262626] rounded-md py-3 px-2 w-[300px]"
                />
            </div>
            <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 w-[300px]"/>
        </div>
    );
}
    ` );

    const code1 = useState(
        `
export default function Inputs(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="flex flex-col ">
                <label htmlFor="email" className="text-white mb-1 text-[12px]">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#262626] rounded-md py-3 px-2 w-[300px] text-[15px]"
                />
            </div>
            <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 w-[300px] text-[15px]" />
            <div className="flex flex-col ">
                <label htmlFor="email" className="text-white mb-1 text-[15px]">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#262626] rounded-md py-3 px-2 w-[300px]"
                />
            </div>
            <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 w-[300px]" />
            <div className="flex flex-col ">
                <label htmlFor="email" className="text-white mb-1 text-[18px]">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#262626] rounded-md py-3 px-2 w-[300px] text-[20px]"
                />
            </div>
            <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 w-[300px] text-[20px]" />
        </div>
    );
}
    `);

    const code2 = useState(
        `
        export default function Inputs(){
            return(
                <div className="flex gap-4 mt-4 p-6 items-center">
                    <input type="email" placeholder="Email" className="bg-[#262626] rounded-full py-3 px-2 w-[300px]" />
                    <input type="email" placeholder="Email" className="bg-[#262626] rounded-lg py-3 px-2 w-[300px]" />
                    <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 w-[300px]" />
                    <input type="email" placeholder="Email" className="bg-[#262626] rounded-sm py-3 px-2 w-[300px]" />
                    <input type="email" placeholder="Email" className="bg-[#262626] rounded-none py-3 px-2 w-[300px]" />
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
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-[#262626] rounded-md py-3 px-2"
                            />
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
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white mb-1 text-[12px]">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[#262626] rounded-md py-3 px-2 text-[15px]"
                            />
                        </div>
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 text-[15px]" />
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-white mb-1 text-[15px]">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[#262626] rounded-md py-3 px-2"
                            />
                        </div>
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2" />
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-white mb-1 text-[18px]">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[#262626] rounded-md py-3 px-2 text-[20px]"
                            />
                        </div>
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2 text-[20px]" />
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
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-full py-3 px-2" />
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-lg py-3 px-2" />
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-md py-3 px-2" />
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-sm py-3 px-2" />
                        <input type="email" placeholder="Email" className="bg-[#262626] rounded-none py-3 px-2" />
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
            />
        </div>
    )
}
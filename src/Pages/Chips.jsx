import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Chips() {
    const code = useState(
        `
export default function Chips(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-full">
                Chip
            </div>
        </div>
    );
}
    `);

    const code1 = useState(
        `
export default function Chips(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#fff] text-[13px] bg-[#262626] py-1 px-4 rounded-full ">
                Small
            </div>
            <div className="text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-full">
                Medium
            </div>
            <div className="text-[#fff] text-[22px] bg-[#262626] py-1 px-4 rounded-full">
                Large
            </div>
        </div>
    );
}
    `);

    const code2 = useState(
        `
export default function Chips(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-full">
                Full
            </div>
            <div className="text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-lg">
                Large
            </div>
            <div className="text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-md">
                Medium
            </div>
            <div className="text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-sm">
                Small
            </div>
            <div className="text-[#fff] text-[17px] bg-[#262626] py-1 px-4 ">
                None
            </div>
        </div>
    );
}
    `);

    const code3 = useState(
        `
export default function Chips(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#000] text-[17px] bg-default py-1 px-4 rounded-full">
                Default
            </div>
            <div className="text-[#fff] text-[17px] bg-primary py-1 px-4 rounded-full">
                Primary
            </div>
            <div className="text-[#fff] text-[17px] bg-secondary py-1 px-4 rounded-full">
                Secondary
            </div>
            <div className="text-[#000] text-[17px] bg-success py-1 px-4 rounded-full">
                Success
            </div>
            <div className="text-[#000] text-[17px] bg-warning py-1 px-4 rounded-full">
                Warning
            </div>
            <div className="text-[#fff] text-[17px] bg-danger py-1 px-4 rounded-full">
                Danger
            </div>
        </div>
    );
}
    `);

    const code4 = useState(
        `
export default function Chips(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#BC8CF2] text-[17px] bg-transparent py-1 px-4 rounded-full border-2 border-[#BC8CF2]">
                Bordered
            </div>
            <div className="text-[#fff] text-[17px] bg-[#BC8CF2] py-1 px-4 rounded-full">
                Solid
            </div>
            <div className="text-[#BC8CF2] text-[17px] bg-transparent py-1 px-4 rounded-full">
                Light
            </div>
            <div className="text-[#BC8CF2] text-[17px] bg-[#262626] py-1 px-4 rounded-full border-2 border-[#1b1b1b]">
                Faded
            </div>
            <div className="text-[#fff] text-[17px] bg-[#BC8CF2] py-1 px-4 rounded-full shadow-lg shadow-[#a991c4da]">
                Shadow
            </div>
        </div>
    );
}
    `);

    return (
        <div className="chip mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Chip</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">The chip is a small button to display short information of an attribute.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-full">
                            Chip
                        </div>
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
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="flex justify-center text-[#fff] text-[13px] bg-[#262626] py-1 px-4 rounded-full ">
                            Small
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-full">
                            Medium
                        </div>
                        <div className="flex justify-center text-[#fff] text-[22px] bg-[#262626] py-1 px-4 rounded-full">
                            Large
                        </div>
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
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-full">
                            Full
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-lg">
                            Large
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-md">
                            Medium
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#262626] py-1 px-4 rounded-sm">
                            Small
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#262626] py-1 px-4 ">
                            None
                        </div>
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Colors</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="flex justify-center text-[#000] text-[17px] bg-default py-1 px-4 rounded-full">
                            Default
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-primary py-1 px-4 rounded-full">
                            Primary
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-secondary py-1 px-4 rounded-full">
                            Secondary
                        </div>
                        <div className="flex justify-center text-[#000] text-[17px] bg-success py-1 px-4 rounded-full">
                            Success
                        </div>
                        <div className="flex justify-center text-[#000] text-[17px] bg-warning py-1 px-4 rounded-full">
                            Warning
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-danger py-1 px-4 rounded-full">
                            Danger
                        </div>
                    </div>
                }
                title2="Code"
                code={code3}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Variants</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="flex justify-center text-[#BC8CF2] text-[17px] bg-transparent py-1 px-4 rounded-full border-2 border-[#BC8CF2]">
                            Bordered
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#BC8CF2] py-1 px-4 rounded-full">
                            Solid
                        </div>
                        <div className="flex justify-center text-[#BC8CF2] text-[17px] bg-transparent py-1 px-4 rounded-full">
                            Light
                        </div>
                        <div className="flex justify-center text-[#BC8CF2] text-[17px] bg-[#262626] py-1 px-4 rounded-full border-2 border-[#1b1b1b]">
                            Faded
                        </div>
                        <div className="flex justify-center text-[#fff] text-[17px] bg-[#BC8CF2] py-1 px-4 rounded-full shadow-lg shadow-[#a991c4da]">
                            Shadow
                        </div>
                    </div>
                }
                title2="Code"
                code={code4}
                color="secondary"
            />
        </div>
    )
}
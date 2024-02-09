import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Checkbox() {
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
export default function CheckBox(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Option
            </label>
        </div>
    );
}
    `);

    const code1 = useState(
        `
export default function Chips(){
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

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            {sizes.map((item, index) => (
                <label htmlFor="" key={index} className="text-[#fff] text-{item.size} flex items-center">
                    <input type="checkbox" className="h-3 w-3 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                    {item.name}
                </label>
            ))}
        </div>
    );
}
    `);

    const code2 = useState(
        `
export default function Chips(){
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

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            {radius.map((item, index) => (
                <label htmlFor="" key={index} className="text-[#fff] text-[20px] flex items-center">
                    <input type="checkbox" className="h-5 w-5 rounded-{item.radius} border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer"/>
                    {item.name}
                </label>
            ))}
        </div>
    );
}
    `);

    const code3 = useState(
        `
export default function Chips(){
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

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            {color.map((item, index) => (
                <label htmlFor="" key={index} className="text-[#fff] text-[20px] flex items-center">
                    <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-{item.color} checked:border-transparent mr-2 cursor-pointer"/>
                    {item.name}
                </label>
            ))}
        </div>
    );
}
    `);

    return (
        <div className="check mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">CheckBox</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">The checkbox is used to mark one or several options, with different styles and sizes.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Option
                        </label>
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
                        {sizes.map((item, index) => (
                            <label htmlFor="" key={index} className={`text-[#fff] text-${item.size} flex items-center`}>
                                <input type="checkbox" className="h-3 w-3 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                                {item.name}
                            </label>
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
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {radius.map((item, index) => (
                            <label htmlFor="" key={index} className="text-[#fff] text-[20px] flex items-center">
                                <input type="checkbox" className={`h-5 w-5 rounded-${item.radius} border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer`}/>
                                {item.name}
                            </label>
                        ))}
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
                        {color.map((item, index) => (
                            <label htmlFor="" key={index} className="text-[#fff] text-[20px] flex items-center">
                                <input type="checkbox" className={`h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-${item.color} checked:border-transparent mr-2 cursor-pointer`} />
                                {item.name}
                            </label>
                        ))}
                    </div>
                }
                title2="Code"
                code={code3}
                color="secondary"
            />
        </div>
    );
} 
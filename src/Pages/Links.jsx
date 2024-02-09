import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Links() {
    const sizes = [
        {
            name: "Small",
            size: "xs"
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

    const code = useState(
        `
export default function Links(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            <a href="" className="text-primary hover:text-sky-800">Link Default</a>
        </div>
    );
}
    `);

    const code1 = useState(
        `
export default function Links(){
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
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            {sizes.map((item, index) => (
                <a key={index} href="" className="text-{item.size} text-primary hover:text-sky-800">{item.name}</a>
            ))}
        </div>
    );
}
    `);

    const code2 = useState(
        `
export default function Links(){
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
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            {color.map((item, index) => (
                <a key={index} href="" className="text-{item.color} hover:text-zinc-600">{item.name}</a>
            ))}
        </div>
    );
}
    `);

    const code3 = useState(
        `
export default function Links(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            <a href="" className="text-primary hover:text-sky-800">External Link</a>
            <div className="flex text-primary hover:text-sky-800 gap-2 text-[18px]">
                <a href="" target="_blank" rel="noopener noreferrer">External Link Anchor</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
}
    `);

    const code4 = useState(
        `
export default function Links(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            <div className="flex text-primary hover:text-sky-800 gap-2 text-[18px]">
                <a href="" target="_blank" rel="noopener noreferrer">Custom Icon</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
}
    `);

    const code5 = useState(
        `
export default function Links(){
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
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            {color.map((item, index) => (
                <div key={index} className="flex text-{item.color} hover:text-zinc-600 gap-2 text-[18px]">
                    <a href="">{item.name}</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                    </svg>
                </div>
            ))}
        </div>
    );
}
    `);

    const code6 = useState(
        `
export default function Links(){
    return(
        <div className="flex gap-4 mt-4 p-6 border-[1px] items-center">
            <button className="flex text-white hover:bg-sky-800 bg-primary rounded-lg p-2 text-[18px] gap-2 justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">Button Link</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}
    `);

    return (
        <div className="butto mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Link</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">Links function no redirect to other pages or components.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <a href="" className="text-primary hover:text-sky-800">Link Default</a>
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
                            <a key={index} href="" className={`text-${item.size} text-primary hover:text-sky-800`}>{item.name}</a>
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
                    <div className="media grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {color.map((item, index) => (
                            <a key={index} href="" className={`text-${item.color} hover:text-zinc-600`}>{item.name}</a>
                        ))}
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">External</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center mb-6">
                        <a href="" className="text-primary hover:text-sky-800">External Link</a>
                        <div className="flex text-primary hover:text-sky-800 gap-2 text-[18px]">
                            <a href="" target="_blank" rel="noopener noreferrer">External Link Anchor</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                }
                title2="Code"
                code={code3}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Custom Anchor Icon</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center mb-6">
                        <div className="flex text-primary hover:text-sky-800 gap-2 text-[18px]">
                            <a href="" target="_blank" rel="noopener noreferrer">Custom Icon</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                }
                title2="Code"
                code={code4}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Block Link</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {color.map((item, index) => (
                            <div key={index} className={`flex text-${item.color} hover:text-zinc-600 gap-2 text-[18px]`}>
                                <a href="">{item.name}</a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        ))}
                    </div>
                }
                title2="Code"
                code={code5}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Button Link</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center mb-6">
                        <button className="flex text-white hover:bg-sky-800 bg-primary rounded-lg p-2 text-[18px] gap-2 justify-center">
                            <a href="" target="_blank" rel="noopener noreferrer">Button Link</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                }
                title2="Code"
                code={code6}
                color="secondary"
            />
        </div >
    );
}
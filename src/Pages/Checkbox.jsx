import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Checkbox() {
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
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <label htmlFor="" className="text-[#fff] text-[15px] flex items-center">
                <input type="checkbox" className="h-3 w-3 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Small
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded-md border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Medium
            </label>
            <label htmlFor="" className="text-[#fff] text-[24px] flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded-md border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Large
            </label>
        </div>
    );
}
    `);

    const code2 = useState(
        `
export default function Chips(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded-full border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Full
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded-lg border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Large
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded-md border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Medium
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded-sm border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Small
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-5 w-5 border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                None
            </label>
        </div>
    );
}
    `);

    const code3 = useState(
        `
export default function Chips(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-default checked:border-transparent mr-2 cursor-pointer" />
                Default
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                Primary
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-secondary checked:border-transparent mr-2 cursor-pointer" />
                Secondary
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-success checked:border-transparent mr-2 cursor-pointer" />
                Success
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-warning checked:border-transparent mr-2 cursor-pointer" />
                Warning
            </label>
            <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-danger checked:border-transparent mr-2 cursor-pointer" />
                Danger
            </label>
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
                        <label htmlFor="" className="text-[#fff] text-[15px] flex items-center">
                            <input type="checkbox" className="h-3 w-3 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Small
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded-md border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Medium
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[24px] flex items-center">
                            <input type="checkbox" className="h-5 w-5 rounded-md border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Large
                        </label>
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
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-5 w-5 rounded-full border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Full
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-5 w-5 rounded-lg border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Large
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-5 w-5 rounded-md border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Medium
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-5 w-5 rounded-sm border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Small
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-5 w-5 border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            None
                        </label>
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
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-default checked:border-transparent mr-2 cursor-pointer" />
                            Default
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-primary checked:border-transparent mr-2 cursor-pointer" />
                            Primary
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-secondary checked:border-transparent mr-2 cursor-pointer" />
                            Secondary
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-success checked:border-transparent mr-2 cursor-pointer" />
                            Success
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-warning checked:border-transparent mr-2 cursor-pointer" />
                            Warning
                        </label>
                        <label htmlFor="" className="text-[#fff] text-[20px] flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 appearance-none checked:bg-danger checked:border-transparent mr-2 cursor-pointer" />
                            Danger
                        </label>
                    </div>
                }
                title2="Code"
                code={code3}
                color="secondary"
            />
        </div>
    )
} 
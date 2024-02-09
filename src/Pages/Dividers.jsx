import TabExample from "../Components/TabExample";
import DividerNormal from "../Components/DividerNormal";
import { useState } from "react";

export default function Dividers(){
    const code = useState(
        `
import DividerNormal from "../Components/DividerNormal";

export default function Dividers(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="example text-[17px] text-[#fff]">
                Import Divider normal
                <DividerNormal/>
                Components made for the purpose of learning.
            </div>
        </div>
    );
}
    `);

    const code0 = useState(
        `
export default function DividerNormal(){
    return(
        <div className="border-t border-[#999999ab] my-2"></div>
    );
}
    `);

    return(
        <div className="divi mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Divider</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">The divider is use to perform a division between components.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="example text-[17px] text-[#fff]">
                            Import Divider normal
                            <DividerNormal/>
                            Components made for the purpose of learning.
                        </div>
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
                title3="DividerNormal"
                code1={code0}
            />
        </div>
    );
}
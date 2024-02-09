import TabExample from "../Components/TabExample";
import DividerNormal from "../Components/DividerNormal";
import { useState } from "react";

export default function Cards() {
    const code = useState(
        `
export default function Cards(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#fff] bg-[#262626] rounded-xl py-4 px-4 shadow-2xl">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
}
    `);

    const code1 = useState(
        `
import DividerNormal from "../Components/DividerNormal";

export default function Cards(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#fff] bg-[#262626] rounded-xl shadow-2xl w-[420px]">
                <div className="flex head py-4 px-4">
                    <img src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-md ring-2 ring-gray-600 " />
                    <div className="text pl-4">
                        <h2 className="text-[17px]">Profile</h2>
                        <p className="text-[14px] text-[#999999ab]">profiles</p>
                    </div>
                </div>
                <DividerNormal />
                <div className="body py-3 px-4">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <DividerNormal />
                <div className="footer py-3 px-4">
                    <a href="" className="text-primary hover:text-[#377fa0]">Visit source code on GitHub.</a>
                </div>
            </div>
        </div>
    );
}
    `);

    const code2 = useState(
        `
export default function Cards(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="text-[#fff] bg-[#262626] rounded-xl shadow-2xl ">
                <div className="head px-4 pt-4 pb-2">
                    <h2 className="text-[17px]">Profile</h2>
                    <p className="text-[15px] text-[#999999ab]">profiles</p>
                </div>
                <div className="body pt-2 pb-2 px-4">
                    <p className="font-bold">Backend</p>
                </div>
                <div className="footer pt-2 pb-4 px-4">
                    <img src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos-1280x720.jpg" alt="" className="w-[270px] rounded-xl" />
                </div>
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

    return (
        <div className="car mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Card</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">Cards are used to show information in a different and original way.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="text-[#fff] bg-[#262626] rounded-xl py-4 px-4 shadow-2xl">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">With divider</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="text-[#fff] bg-[#262626] rounded-xl shadow-2xl">
                            <div className="flex head py-4 px-4">
                                <img src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-md ring-2 ring-gray-600 " />
                                <div className="text pl-4">
                                    <h2 className="text-[17px]">Profile</h2>
                                    <p className="text-[14px] text-[#999999ab]">profiles</p>
                                </div>
                            </div>
                            <DividerNormal />
                            <div className="body py-3 px-4">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                            <DividerNormal />
                            <div className="footer py-3 px-4">
                                <a href="" className="text-primary hover:text-[#377fa0]">Visit source code on GitHub.</a>
                            </div>
                        </div>
                    </div>
                }
                title2="Code"
                code={code1}
                color="secondary"
                title3="DividerNormal"
                code1={code0}
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">With image</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media flex gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="text-[#fff] bg-[#262626] rounded-xl shadow-2xl ">
                            <div className="head px-4 pt-4 pb-2">
                                <h2 className="text-[17px]">Profile</h2>
                                <p className="text-[15px] text-[#999999ab]">profiles</p>
                            </div>
                            <div className="body pt-2 pb-2 px-4">
                                <p className="font-bold">Backend</p>
                            </div>
                            <div className="footer pt-2 pb-4 px-4">
                                <img src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos-1280x720.jpg" alt="" className="w-[270px] rounded-xl" />
                            </div>
                        </div>
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
            />
        </div>
    );
}
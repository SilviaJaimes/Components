import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Images() {
    const code = useState(
        `
export default function Images(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705795200&semt=ais"
                alt="" width="300px" className="rounded-lg"
            />
        </div>
    );
}
    `);

    const code1 = useState(
        `
export default function Images(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705795200&semt=ais"
                alt="" width="300px" className="rounded-lg blur-[2px] hover:blur-none"
            />
        </div>
    );
}
    `);

    return (
        <div className="im mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Image</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">This component works to style images.</p>
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705795200&semt=ais"
                            alt="" width="300px" className="rounded-lg"
                        />
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Blurred</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705795200&semt=ais"
                            alt="" width="300px" className="rounded-lg blur-[2px] hover:blur-none"
                        />
                    </div>
                }
                title2="Code"
                code={code1}
                color="secondary"
            />
        </div>
    );
}
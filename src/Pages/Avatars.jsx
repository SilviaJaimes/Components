import AvatarNormal from "../Components/AvatarNormal";
import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Avatars(){
    const imagenes = [
        "https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10305035/pexels-photo-10305035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10339049/pexels-photo-10339049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba"
    ];

    const code = useState(
        `
import AvatarNormal from "../Components/AvatarNormal";

export default function Avatars(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <AvatarNormal src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-10 h-10"/>
            <div className="relative inline-flex items-center justify-center w-10 h-10 bg-[#999999ab] rounded-full">
                <span className="font-medium text-[#ffffff]">JL</span>
            </div>
            <AvatarNormal src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-10 h-10"/>
            <div className="relative inline-flex items-center justify-center w-10 h-10 bg-[#999999ab] rounded-full">
                <span className="font-medium text-[#ffffff]">JK</span>
            </div>
            <AvatarNormal src="https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-10 h-10"/>
            <div className="relative inline-flex items-center justify-center w-10 h-10 bg-[#999999ab] rounded-full">
                <span className="font-medium text-[#ffffff]">SP</span>
            </div>
        </div>
    );
}
    `);

    const code0 = useState(
        `
export default function AvatarNormal({src, className}){
    return(
        <img src={src} alt="" className={className} />
    )
}
    `);

    const code1 = useState(
        `
export default function Avatars(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <img src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
            <img src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
            <img src="https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
            <img src="https://images.pexels.com/photos/10305035/pexels-photo-10305035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
            <img src="https://images.pexels.com/photos/10339049/pexels-photo-10339049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
            <img src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
        </div>
    )
}
    `);

    const code2 = useState(
        `
export default function Avatars(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <AvatarNormal src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-8 h-8"/>
            <AvatarNormal src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-10 h-10"/>
            <AvatarNormal src="https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-14 h-14"/>
            <AvatarNormal src="https://images.pexels.com/photos/10305035/pexels-photo-10305035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-16 h-16"/>
            <AvatarNormal src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba" className="rounded-full w-20 h-20"/>
        </div>
    )
}
    `);

    const code3 = useState(
        `
export default function Avatars(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <img src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
            <img src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-blue-600 "/>
            <img src="https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-pink-600 "/>
            <img src="https://images.pexels.com/photos/10305035/pexels-photo-10305035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-green-600 "/>
            <img src="https://images.pexels.com/photos/10339049/pexels-photo-10339049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-purple-600 "/>
            <img src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-yellow-600 "/>
        </div>
    )
}
    `);

    const code4 = useState(
        `
export default function Avatars(){
    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <img src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded ring-2 ring-gray-600 "/>
            <img src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-md ring-2 ring-gray-600 "/>
            <img src="https://images.pexels.com/photos/10339049/pexels-photo-10339049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 p-[2px] rounded-lg ring-2 ring-gray-600 "/>
            <img src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba" alt="" className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "/>
        </div>
    )
}
    `);

    return(
        <div className="avata mt-[50px] mx-[150px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Avatar</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">The avatar component is used to represent users, profiles and icons.</p>            
            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample 
                title1="Component"
                content1={
                    <div className="media grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <AvatarNormal 
                            src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            className="rounded-full w-10 h-10"
                        />
                        <div className="relative inline-flex items-center justify-center w-10 h-10 bg-[#999999ab] rounded-full">
                            <span className="font-medium text-[#ffffff]">JL</span>
                        </div>
                        <AvatarNormal 
                            src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            className="rounded-full w-10 h-10"
                        />
                        <div className="relative inline-flex items-center justify-center w-10 h-10 bg-[#999999ab] rounded-full">
                            <span className="font-medium text-[#ffffff]">JK</span>
                        </div>
                        <AvatarNormal 
                            src="https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            className="rounded-full w-10 h-10"
                        />
                        <div className="relative inline-flex items-center justify-center w-10 h-10 bg-[#999999ab] rounded-full">
                            <span className="font-medium text-[#ffffff]">SP</span>
                        </div>
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
                title3="AvatarNormal"
                code1={code0}
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Bordered</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        {imagenes.map((item, index) => (
                            <img 
                                src={item}
                                alt="" 
                                className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600 "
                                key={index}
                            />
                        ))}
                        
                    </div>
                }
                title2="Code"
                code={code1}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Sizes</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <AvatarNormal 
                            src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba" 
                            className="rounded-full w-20 h-20"
                        />
                        <AvatarNormal 
                            src="https://images.pexels.com/photos/10305035/pexels-photo-10305035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            className="rounded-full w-16 h-16 content-center"
                        />
                        <AvatarNormal 
                            src="https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            className="rounded-full w-14 h-14 content-center"
                        />
                        <AvatarNormal 
                            src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            className="rounded-full w-10 h-10 content-center"
                        />
                        <AvatarNormal 
                            src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            className="rounded-full w-8 h-8 content-center"
                        />
                    </div>
                }
                title2="Code"
                code={code2}
                color="secondary"
                title3="AvatarNormal"
                code1={code0}
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Colors</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <img 
                            src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600"
                        />
                        <img 
                            src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-full ring-2 ring-blue-600"
                        />
                        <img 
                            src="https://images.pexels.com/photos/11726076/pexels-photo-11726076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-full ring-2 ring-pink-600"
                        />
                        <img 
                            src="https://images.pexels.com/photos/10305035/pexels-photo-10305035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-full ring-2 ring-green-600"
                        />
                        <img 
                            src="https://images.pexels.com/photos/10339049/pexels-photo-10339049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-full ring-2 ring-purple-600"
                        />
                        <img 
                            src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-full ring-2 ring-yellow-600"
                        />
                    </div>
                }
                title2="Code"
                code={code3}
                color="secondary"
            />

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Radius</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center mb-6">
                        <img 
                            src="https://images.pexels.com/photos/13426867/pexels-photo-13426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded ring-2 ring-gray-600"
                        />
                        <img 
                            src="https://images.pexels.com/photos/12054972/pexels-photo-12054972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-md ring-2 ring-gray-600"
                        />
                        <img 
                            src="https://images.pexels.com/photos/10339049/pexels-photo-10339049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-lg ring-2 ring-gray-600"
                        />
                        <img 
                            src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/trucos-de-maquillaje-para-rostro-cuadrado/05-maybelline-rostro-cuadrado-maquillaje-contouring.jpg?rev=0fafda1a4fad40fc9ea745c4a4137aba" 
                            alt="" 
                            className="w-10 h-10 p-[2px] rounded-full ring-2 ring-gray-600"
                        />
                    </div>
                }
                title2="Code"
                code={code4}
                color="secondary"
            />
        </div>
    )
}
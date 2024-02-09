import {Tabs, Tab} from "@nextui-org/react"; 
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function TabExample({title1, content1, title2, code, color, title3, code1}){
    const [copy, setCopy] = useState(false);

    return(
        <Tabs variant="underlined" aria-label="Options" color={color}>
            <Tab title={title1} className="text-[17px]">
                {content1}
            </Tab>
            <Tab title={title2} className="text-[17px]">
                <div className="media media-cod flex gap-4 mt-4 mx-8 p-10 border-[1px]  border-zinc-700 rounded-lg items-center">
                    <div className="code-im bg-[#262626] rounded-md overflow-hidden">
                        <div className="flex justify-between px-4 text-white text-[15px] items-center">
                            <p className="text-[15px]">Code</p>
                            {
                                copy ? (
                                    <button className="btn-copy py-1 inline-flex items-center gap-1">
                                        <span className="text-base mt-1">
                                            <ion-icon name="checkmark-sharp"></ion-icon>
                                        </span>
                                        Copied!
                                    </button>
                                ) : (
                                    <button className="btn-copy py-1 inline-flex items-center gap-1" onClick={()=>{
                                        navigator.clipboard.writeText({code});
                                        setCopy(true)
                                        setTimeout(()=>{
                                            setCopy(false)
                                        }, 3000)
                                    }}>
                                        <span className="text-base mt-1">
                                            <ion-icon name="clipboard-outline"></ion-icon>
                                        </span>
                                        Copy code
                                    </button>
                                )
                            }
                        </div>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={materialDark} 
                            customStyle={{padding: "25px"}}
                            wrapLongLines={true}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </Tab>
            {title3 && 
                <Tab title={title3} className="text-[17px]">
                    <div className="media media-cod flex gap-4 mt-4 mx-8 p-10 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="code-im bg-[#262626] rounded-md overflow-hidden">
                            <div className="flex justify-between px-4 text-white text-[15px] items-center">
                                <p className="text-[15px]">Code</p>
                                {
                                    copy ? (
                                        <button className="py-1 inline-flex items-center gap-1">
                                            <span className="text-base mt-1">
                                                <ion-icon name="checkmark-sharp"></ion-icon>
                                            </span>
                                            Copied!
                                        </button>
                                    ) : (
                                        <button className="py-1 inline-flex items-center gap-1" onClick={()=>{
                                            navigator.clipboard.writeText({code1});
                                            setCopy(true)
                                            setTimeout(()=>{
                                                setCopy(false)
                                            }, 3000)
                                        }}>
                                            <span className="text-base mt-1">
                                                <ion-icon name="clipboard-outline"></ion-icon>
                                            </span>
                                            Copy code
                                        </button>
                                    )
                                }
                            </div>
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={materialDark} 
                                customStyle={{padding: "25px"}}
                                wrapLongLines={true}
                            >
                                {code1}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </Tab>}
        </Tabs>
    )
} 
import Modal from "../Components/Modal";
import TabExample from "../Components/TabExample";
import { useState } from "react";

export default function Modals(){
    const code = useState(
        `
import { useState } from "react";
import Modal from "../Components/Modal";

export default function Modals(){
    const [openModal, setOpenModal] = useState(false);
    const handleButtonClick = () => {
        setOpenModal(false)
    }

    return(
        <div className="flex gap-4 mt-4 p-6 items-center">
            <div className="example text-[17px] text-[#fff]">
                <button className="bg-primary py-2 px-4 rounded-lg text-[#fff] hover:bg-[#3170c0]" onClick={() => setOpenModal(true)}>Open the modal</button>
                {openModal && (<Modal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick}/>)}
            </div>
        </div>
    );
}
    `);

    const code0 = useState(
        `
export default function Modal({onSubmit, onCancel, onClose}){
    return(
        <div className="modal flex fixed left-0 top-0 w-[100%] h-[100%] items-center justify-center bg-[#3d3d3de7]">
            <div className="modal-container w-[450px] bg-[#fff] text-[#000] p-6 rounded-xl">
                <div className="flex modal-header justify-end pb-6">
                    <p className="font-bold text-[20px] cursor-pointer" onClick={() => onClose()}>X</p>
                </div>
                <div className="modal-content pb-6">
                    <h1 className="font-bold text-[22px]">Title of the modal</h1>
                    <p className="text-[17px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum culpa animi autem quod assumenda molestias est deleniti magnam vero excepturi delectus dignissimos, similique aliquam incidunt, reprehenderit maxime sit quae.</p>
                </div>
                <div className="flex modal-footer justify-evenly">
                    <button className="bg-success py-2 px-4 rounded-lg text-[#fff] hover:bg-[#60ec98] hover:text-[#000]" onClick={() => onSubmit()}>Submit</button>
                    <button className="bg-danger py-2 px-4 rounded-lg text-[#fff] hover:bg-[#e74c6a] hover:text-[#000]" onClick={() => onCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
    `);

    const [openModal, setOpenModal] = useState(false);
    const handleButtonClick = () => {
        setOpenModal(false)
    }

    return(
        <div className="modal mt-[80px] mx-[100px]">
            <h2 className="title-component text-[#ffffff] text-[40px]">Modal</h2>
            <p className="text-[#ffffff] text-[17px] mt-[20px] mb-[20px]">The modal is used to display information in a box that is opened by a button.</p>

            <h3 className="text-[#ffffff] text-[20px] font-bold mt-10">Usage</h3>

            <TabExample
                title1="Component"
                content1={
                    <div className="media grid grid-cols-1 gap-4 mt-4 p-6 border-[1px] border-zinc-700 rounded-lg items-center">
                        <div className="example text-[17px] text-[#fff]">
                            <button className="bg-primary py-2 px-4 rounded-lg text-[#fff] hover:bg-[#3170c0]" onClick={() => setOpenModal(true)}>Open the modal</button>
                            {openModal && (<Modal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick}/>)}
                        </div>
                    </div>
                }
                title2="Code"
                code={code}
                color="secondary"
                title3="Modal"
                code1={code0}
            />
        </div>
    )
}
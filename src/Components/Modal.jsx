export default function Modal({onSubmit, onCancel, onClose}){
    return(
        <div className="modal flex fixed left-0 top-0 w-[100%] h-[100%] items-center justify-center bg-[#3d3d3de7]">
            <div className="modal-container w-[450px] bg-[#fff] text-[#000] p-6 rounded-xl">
                <div className="flex modal-header justify-end pb-6">
                    <p className="font-bold text-[20px] cursor-pointer" onClick={() => onClose()}>X</p>
                </div>
                <div className="modal-content pb-6">
                    <h1 className="modal-title font-bold text-[22px]">Title of the modal</h1>
                    <p className="modal-text text-[17px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum culpa animi autem quod assumenda molestias est deleniti magnam vero excepturi delectus dignissimos, similique aliquam incidunt, reprehenderit maxime sit quae.</p>
                </div>
                <div className="flex modal-footer justify-evenly">
                    <button className="modal-text bg-success py-2 px-4 rounded-lg text-[#fff] hover:bg-[#60ec98] hover:text-[#000]" onClick={() => onSubmit()}>Submit</button>
                    <button className="modal-text bg-danger py-2 px-4 rounded-lg text-[#fff] hover:bg-[#e74c6a] hover:text-[#000]" onClick={() => onCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
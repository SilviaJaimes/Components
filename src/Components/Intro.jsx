export default function Intro({ toggle }) {
    return (
        <div className={`flex gap-4 items-center ${toggle ? "bg-none transition-all duration-500 delay-200" : "bg-black text-white rounded-xl p-2"}`}>
            <div className="min-w-[3rem] h-[3rem]">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" className="w-full h-full rounded-full object-cover"/>
            </div>
            <div className={toggle ? "opacity-0 delay-200" : ""}>
                <h3 className="text-xl">Components</h3>
            </div>
        </div>
    );
}
import logo from "../public/logo.png";
import Image from "next/image";

export default function Sidebar() {
    return (
        <div
            className="bg-[#f7faf9] md:inline md:w-[200px] md:min-w-[200px] fixed 
    top-0 left-0 h-screen transition-all duration-300 max-[768px]:-translate-x-full"
        >

            <div className="flex items-center justify-center h-[60px] pt-4 max-w-[160px] mx-auto">
                <Image src={logo} className="w-full h-10" alt="logo" />
            </div>
        </div>
    )
}
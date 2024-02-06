import logo from "../public/logo.png";
import Image from "next/image";
import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { BsBookmark, BsPen } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
    return (
        <div
            className="bg-[#f7faf9] md:inline md:w-[200px] md:min-w-[200px] fixed 
    top-0 left-0 h-screen transition-all duration-300 max-[768px]:-translate-x-full"
        >

            <div className="flex items-center justify-center h-[60px] pt-4 max-w-[160px] mx-auto">
                <Image src={logo} className="w-full h-10" alt="logo" />
            </div>


            <div className="flex-grow flex-shrink basis-0 mt-10">
                <a
                    className="flex items-center h-14 text-[#032b41] hover:bg-[#f0efef] 
          mb-2 cursor-pointer"

                >
                    <div className="bg-transparent w-[5px] h-full mr-4" />
                    <div className="icon--scaled flex items-center justify-center mr-2">
                        <AiOutlineHome />
                    </div>
                    <div>For you</div>
                </a>
                <a
                    className="flex items-center h-14 text-[#032b41] hover:bg-[#f0efef] 
          mb-2 cursor-pointer"

                >
                    <div className="bg-transparent w-[5px] h-full mr-4" />
                    <div className="icon--scaled flex items-center justify-center mr-2">
                        <BsBookmark />
                    </div>
                    <div>My Library</div>
                </a>
                <a className="flex items-center h-14 text-[#032b41] mb-2 cursor-not-allowed">
                    <div className="bg-transparent w-[5px] h-full mr-4" />
                    <div className="icon--scaled flex items-center justify-center mr-2">
                        <BsPen />
                    </div>
                    <div>Highlights</div>
                </a>
                <a className="flex items-center h-14 text-[#032b41] mb-2 cursor-not-allowed">
                    <div className="bg-transparent w-[5px] h-full mr-4" />
                    <div className="icon--scaled flex items-center justify-center mr-2">
                        <AiOutlineSearch />
                    </div>
                    <div>Search</div>
                </a>
            </div>
            <div>
                <a className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer hover:bg-[#f0efef] ">
                    <div className="bg-transparent w-[5px] h-full mr-4" />
                    <div className="icon--scaled flex items-center justify-center mr-2">

                        <AiOutlineSetting />
                    </div>
                    <div >Settings</div>
                </a>
            </div>
            <div>

                <a className="flex items-center h-14 text-[#032b41] mb-2 cursor-not-allowed">
                    <div className="bg-transparent w-[5px] h-full mr-4" />
                    <div className="icon--scaled flex items-center justify-center mr-2">
                        <AiOutlineQuestionCircle />
                    </div>
                    <div>Help & Support</div>
                </a>
                <div
                    className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer
           hover:bg-[#f0efef]"
                //onClick={handleSignOut}
                >
                    <div className="bg-transparent w-[5px] h-full mr-4" />
                    <div className="icon--scaled flex items-center justify-center mr-2">
                        <BiLogOut />
                    </div>
                    <div>Logout</div>
                </div>
            </div >
        </div >


    )
}
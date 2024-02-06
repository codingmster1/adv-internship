import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";

export default function SearchBar() {
    return (
        <div className="border-b h-20 z-10 border-[#e1e7ea]">
            <div
                className="relative flex items-center justify-between px-8 max-w-[1100px] 
            mx-auto h-full"
            >
                <figure>
                    <img src="logo" alt="" />
                </figure>

                <div className="flex items-center gap-6 max-w-[340px] w-full">
                    <div className="flex items-center w-full">
                        <div className="relative gap-2 flex items-center w-full">
                            <input

                                type="text"
                                placeholder="Search for books"

                                className="h-10 w-full p-4 outline-none bg-[#f1f6f4]
                    text-[#042330] border-2 border-[#e1e7ea] rounded-lg"
                            />
                            <div
                                className="flex items-center absolute h-full right-2 justify-end 
                    border-l-2 border-[#e1e7ea] pl-2 icon--scaled"

                            >
                                <BiSearch />
                            </div>
                        </div>
                    </div>

                    <div
                        className="hidden items-center justify-center cursor-pointer 
              max-[768px]:flex"

                    >
                        <AiOutlineMenu size={24} />
                    </div>
                </div>
            </div>

        </div>
    );

}
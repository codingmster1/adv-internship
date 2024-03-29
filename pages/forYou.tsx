import Recommended from "@/components/Recommended"
import SearchBar from "@/components/SearchBar"
import Selected from "@/components/Selected"
import Sidebar from "@/components/Sidebar"
import Suggested from "@/components/Suggested";

export default function Foryou() {
    return (
        <div
            className="md:relative md:flex md:flex-col md:ml-[200px] max-[768px]:ml-0 
        max-[768px]:w-full transition-all duration-300"
        >
            <Sidebar />
            <SearchBar />
            <div className="max-w-[1100px] w-full px-6 mx-auto">
                <div className="py-6 w-full">
                    <Selected />

                    <div className="text-[22px] mb-4 text-[#032b41] font-bold">
                        Recommended For You
                    </div>
                    <div className="font-light text-[#394547] mb-7">
                        We think you will like these
                    </div>
                    <Recommended />

                    <div className="text-[22px] mb-4 text-[#032b41] font-bold">
                        Suggested Books
                    </div>
                    <div className="font-light text-[#394547] mb-7">
                        Explore these books
                    </div>
                    <Suggested />
                </div>
            </div>
        </div>
    );
}
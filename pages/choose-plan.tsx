import Footer from "@/components/Footer";
import LoginModal from "@/components/modal/LoginModal";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import { openLoginModal } from "@/redux/modalSlice";
import { useRouter } from "next/router";
import { BiSolidHand } from "react-icons/bi";
import { RiBookFill, RiPlantFill, RiShakeHandsFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

export default function Plan() {

    return (
        <div className="w-full ml-0">
            <div className="w-full">
                <div className="relative text-center w-full pt-12 mb-6 plan__header--wrapper">
                    <div className="mx-auto text-white px-6 max-w-[1000px]">
                        <div className="text-5xl font-bold mb-10">
                            Get unlimited access to many amazing books to read
                        </div>

                        <div className="mb-8 text-xl">
                            Turn ordinary moments into amazing learning opportunities
                        </div>

                        <figure
                            className="flex justify-center max-w-[340px] mx-auto overflow-hidden
                 rounded-t-[180px] text-transparent"
                        >
                            <img
                                src="pricing-top.png"
                                className="w-full h-full"
                                alt="pricing image"
                            />
                        </figure>
                    </div>
                </div>
                <div className="mx-auto max-w-[1070px] px-6 w-full">
                    <div className="py-10 w-full">
                        <div
                            className="flex justify-center text-center gap-6 max-w-[800px] 
                mx-auto mb-14"
                        >
                            <div>
                                <figure className="flex justify-center text-[#032b41] mb-3">
                                    <RiBookFill size={60} />
                                </figure>

                                <div className="leading-normal text-[#394547]">
                                    <b>Key ideas in few min</b> with many books to read
                                </div>
                            </div>
                            <div>
                                <figure className="flex justify-center text-[#032b41] mb-3">
                                    <RiPlantFill size={60} />
                                </figure>

                                <div className="leading-normal text-[#394547]">
                                    <b>3 million</b> people growing with Summarist everyday
                                </div>
                            </div>

                            <div>
                                <figure className="flex justify-center text-[#032b41] mb-3">
                                    <RiShakeHandsFill size={60} />
                                </figure>

                                <div className="leading-normal text-[#394547]">
                                    <b>Precise recommendations</b> collections curated by experts
                                </div>
                            </div>
                        </div>
                        <div
                            className="text-[#032b41] text-[32px] text-center font-bold
              mb-6"
                        >
                            Choose the plan that fits you
                        </div>

                        <div
                            className="relative flex items-center justify-center 
                rounded-[50%] border-2 border-[black] w-6 h-6"
                        >



                        </div>
                        <div className="premium-plus">
                            <div className="text-[#032b41] text-lg font-semibold mb-2">
                                Premium Plus Yearly
                            </div>

                            <div className="text-[#032b41] text-2xl font-bold mb-2">
                                $99.99/year
                            </div>

                            <div className="text-[#6b757b] text-sm">
                                7-day free trial included
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex items-center text-[#6b757b] auth__separator gap-2 
              max-w-[240px] text-sm my-6 mx-auto"
                    >
                        <span className="mx-6 text-sm text-[#394547]">or</span>
                    </div>
                    <div
                        className="relative flex items-center justify-center 
                rounded-[50%] border-2 border-[black] w-6 h-6"
                    >
                    </div>
                    <div className="premium-monthly">
                        <div className="text-[#032b41] text-lg font-semibold mb-2">
                            Premium Monthly
                        </div>

                        <div className="text-[#032b41] text-2xl font-bold mb-2">
                            $9.99/month
                        </div>

                        <div className="text-[#6b757b] text-sm">No trial included</div>
                    </div>
                </div>
                <div
                    className="bg-[white] sticky flex flex-col items-center bottom-0 
              z-[1] py-8 gap-4"
                // onClick={handleSubscribe}
                >
                    <span className="w-[300px]">
                        <button
                            className="bg-[#2bd97c] text-[#032b41] w-full h-10 rounded
                flex items-center justify-center text-base transition duration-200 
                hover:bg-[#20ba68] min-w-[180px]"
                        >
                            <span>
                                first month
                            </span>
                        </button>
                    </span>

                    <div className="text-xs text-[#6b757b] text-center">
                        Cancel your trial at any time before it ends, and you won’t be charged
                    </div>
                </div>

                <div className="text-xs text-[#6b757b] text-center">

                    Cancel your trial at any time before it ends, and you won’t be charged.
                </div>
            </div>
            <Footer />
        </div>

    )
}
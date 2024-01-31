import { closeLoginModal, openLoginModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal"
import { useState } from "react"
import { BiSolidUser } from "react-icons/bi"
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import SignupModal from "./SignupModal";

export default function LoginModal() {


    const isOpen = useSelector((state: any) => state.modal.loginModal)
    const dispatch = useDispatch()
    console.log(isOpen)


    return (
        <>




            <Modal
                open={isOpen}
                onClose={() => dispatch(closeLoginModal())}
                className="fixed top-0 left-0 mt-8  h-[80%] flex justify-center 
                items-center flex-col w-full bg-[rgba(0,0,0,0.5)]">

                <div className="w-[80%] bg-white md:w-[560px]
                md:h-[600px] rounded-lg
                flex justify-center">


                    <div className="w-[70%]  mt-8 flex flex-col" >


                        <h1 className="text-center mt-4 mb-4 font-bold text-[#032b41] text-2xl">Sign Into Summarist

                        </h1>


                        <button className="relative w-full flex bg-[#4285f4] text-white 
                  justify-center items-center min-w-[180px] h-12 rounded text-base transition 
                  duration-200 hover:bg-[#25396b] mt-4 mb-4"

                        >

                            <figure
                                className="bg-transparent flex justify-center items-center w-9 
                    h-9 absolute left-[2px] icon--scaled"
                            >

                                <BiSolidUser />
                            </figure>
                            Sign in as Guest
                        </button>
                        <div className="flex items-center mb-4 auth__separator">
                            <span className="mx-6 text-sm text-[#394547] font-medium">
                                or
                            </span>
                        </div>

                        <input
                            placeholder="Email"
                            className="h-10 mt-2 rounded-md bg-transparent border border-[#bac8ce] p-6"
                            type={"email"}
                        />
                        <input
                            placeholder="Password"
                            className="h-10 mt-3 rounded-md bg-transparent border border-[#bac8ce] p-6"
                            type={"password"}
                        />

                        <button className="bg-[#2bd97c] text-#032b41] w-full h-10 rounded 
                text-base transition duration-200 hover:bg-[#20ba68] flex 
                justify-center items-center min-w-[180px] mt-4"

                        >
                            Login
                        </button>

                        <button
                            className="hover:bg-[#e1e9e8] h-10 text-center bg-[#f1f6f4]
             text-[#116be9] w-full rounded-b mb-4 mt-4"

                            onClick={() => {
                                dispatch(closeLoginModal())
                                dispatch(openSignupModal())
                            }

                            }
                        >
                            Don't have an account?
                        </button>


                    </div>
                </div>

            </Modal>
            <SignupModal />
        </>
    )
}
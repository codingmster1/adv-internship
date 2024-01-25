import Modal from "@mui/material/Modal"
import { useState } from "react"
import { BiSolidUser } from "react-icons/bi"

export default function LoginModal() {

    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => setIsOpen(false)
    const handleOpen = () => setIsOpen(true)
    return (
        <>
            <button
                className="btn home__cta--btn"
                onClick={handleOpen}
            >
                Login
            </button>


            <Modal
                open={isOpen}
                onClose={handleClose}
                className="fixed top-0 left-0 h-full flex justify-center 
                items-center flex-col w-full bg-[rgba(0,0,0,0.5)]">

                <div className="w-[60%] h-[400px] bg-white md:w-[560px]
                md:h-[600px] border border-blue-500 rounded-lg
                flex justify-center">


                    <div className="w-[70%] mt-8 flex flex-col" >

                        <h1 className="text-center mt-4 mb-4 font-bold text-2xl">Sign into Summarist</h1>
                        <button className="relative w-full flex bg-[#3a579d] text-white 
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
                        <button className="relative w-full flex bg-[#4285f4] text-white 
                justify-center items-center min-w-[180px] h-12 rounded text-base transition 
                duration-200 hover:bg-[#3367d6] mb-4"

                        >
                            <figure
                                className="bg-transparent flex justify-center items-center w-9 
                      h-9 absolute left-[2px] rounded bg-white"
                            >
                                <img
                                    className="h-6 w-6"
                                    src="../google.png"
                                    alt="google.png"
                                />
                            </figure>
                            Login with Google
                        </button>
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


                    </div>
                </div>

            </Modal>

        </>
    )
}
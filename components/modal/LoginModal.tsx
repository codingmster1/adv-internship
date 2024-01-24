import Modal from "@mui/material/Modal"
import { useState } from "react"

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
                items-center flex-col w-full bg-[rgba(0,0,0,0.5)]"
            >

                <div>
                    <div className="pt-12 px-8 pb-6">
                        <h2 className="text-center font-bold text-[#032b41] text-xl mb-6">Log in to Summarist</h2>
                    </div>
                    <h3
                        className="relative w-full flex bg-[#3a579d] text-white 
                      justify-center items-center min-w-[180px] h-10 rounded text-base transition 
                      duration-200 hover:bg-[#25396b]"
                    >Login as Guest</h3>
                    <h3>or</h3>
                    <h3>Login with Google</h3>
                    <input
                        type="text"
                        className="h-10 border-2 text-[#394547] border-[#bac8ce] 
                     focus:border-[#2bd97c] rounded px-4"
                        placeholder="Email Address" />
                    <input
                        className="h-10 border-2 border-[#bac8ce] rounded 
                    text-[#394547] focus:border-[#2bd97c] p-3"
                        type="password"
                        placeholder="Password" />
                    <button>Login</button>
                    <button>Forgot your password</button>
                    <button>Don't have an account </button>
                </div>


            </Modal>
        </>

    )
}
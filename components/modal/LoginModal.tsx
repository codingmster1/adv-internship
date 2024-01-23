import Modal from "@mui/material/Modal"
import { useState } from "react"

export default function LoginModal() {

    const [isOpen, setIsOpen] = useState(true)
    const handleClose = () => setIsOpen(false)
    return (
        <>
            <button
                className="btn home__cta--btn"

            >
                Login
            </button>

            <Modal
                open={isOpen}
                onClose={handleClose}
            >
                <div className="w-[400px] h-[400px] bg-black">
                    <h2 className="text-white">Log in to Summarist</h2>
                    <h3 className="text-white">Login as Guest</h3>
                    <h3 className="text-white">or</h3>
                    <h3 className="text-white">Login with Google</h3>
                </div>

            </Modal>
        </>
    )
}
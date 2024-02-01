import { closeSignupModal, openLoginModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal"
import { useEffect, useState } from "react"
import { BiSolidUser } from "react-icons/bi"
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { setUser } from "@/redux/userSlice";

export default function SignupModal() {


    const isOpen = useSelector((state: any) => state.modal.signupModal)
    const dispatch = useDispatch()
    //console.log(isOpen)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignUp() {
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        dispatch(closeSignupModal())
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) return
            console.log(currentUser)
            dispatch(setUser(
                {
                    email: currentUser.email,
                    uid: currentUser.uid
                }
            ))

        })

        return unsubscribe;

    }, [])


    return (
        <>
            <Modal
                open={isOpen}
                onClose={() => dispatch(closeSignupModal())}
                className="fixed top-0 left-0 mt-8  h-[80%] flex justify-center 
                items-center flex-col w-full bg-[rgba(0,0,0,0.5)]">

                <div className=" bg-white md:w-[560px]
                md:h-[600px] rounded-lg
                flex justify-center">


                    <div className="w-[70%]  mt-8 flex flex-col" >


                        <h1 className="text-center mt-4 mb-4 font-bold text-[#032b41] text-2xl">Create an account

                        </h1>

                        <input
                            placeholder="Email"
                            className="h-10 mt-2 rounded px-4 bg-transparent border-2 focus:border-[#2bd97c] border-[#bac8ce] p-6"
                            type={"email"}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            className="h-10 mt-3 rounded px-4 bg-transparent border-2 focus:border-[#2bd97c] border-[#bac8ce] p-6"
                            type={"password"}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="bg-[#2bd97c] text-#032b41] w-full h-10 rounded 
                text-base transition duration-200 hover:bg-[#20ba68] flex 
                justify-center items-center min-w-[180px] mt-4"
                            onClick={handleSignUp}


                        >
                            Sign up
                        </button>

                        <button
                            className="hover:bg-[#e1e9e8] h-10 text-center bg-[#f1f6f4]
             text-[#116be9] w-full rounded-b mb-2 mt-4"
                            onClick={() => {
                                dispatch(closeSignupModal())
                                dispatch(openLoginModal())

                            }}

                        >
                            Already have an account?
                        </button>


                    </div>
                </div>

            </Modal>

        </>
    )
}
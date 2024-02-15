import LoginModal from "@/components/modal/LoginModal";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Skeleton from "@/components/ui/Skeleton";
import { openLoginModal } from "@/redux/modalSlice";
import { auth, initFirebase } from "@/firebase";
import { getPremiumStatus } from "checkStatus";
import { getPortalUrl } from "stripePayment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Settings() {
    const [skelLoad, setSkelLoad] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [isPremium, setIsPremium] = useState(false);
    const user = useSelector((state: any) => state.user);
    const router = useRouter();
    const app = initFirebase();

    function handleSignIn() {
        dispatch(openLoginModal());
    }

    useEffect(() => {
        const checkPremium = async () => {
            const newPremiumStatus = auth.currentUser
                ? await getPremiumStatus(app)
                : false;
            setIsPremium(newPremiumStatus);
            console.log(newPremiumStatus);
        };
        checkPremium();
    }, [auth.currentUser]);
    const manageSubscription = async () => {
        const portalUrl = await getPortalUrl(app);
        router.push(portalUrl);
    };
    return (
        <div className="relative flex flex-col md:ml-[200px]">
            <SearchBar />
            <Sidebar />
            <LoginModal />
            <div className="w-full py-10">
                <div className="max-w-[1070px] w-full mx-auto px-6">
                    <div
                        className="pb-4 border-b border-[#e1e7ea] mb-8 font-bold text-[32px]
              text-[#032b41]"
                    >
                        Settings
                    </div>

                    {!user.email ? (
                        <>
                            <div className="flex flex-col items-center mx-auto max-w-[490px]">
                                <img src="login.png" alt="login image" />

                                <div
                                    className="text-[#032b41] text-2xl font-bold text-center
                    mb-4"
                                >
                                    Log in to your account to see your details.
                                </div>

                                <button
                                    className="flex items-center justify-center bg-[#2bd97c] 
                    text-[#032b41] h-10 rounded text-base transition duration-200 
                    min-w-[180px] hover:bg-[#20ba68]"
                                    onClick={handleSignIn}
                                >
                                    Login
                                </button>
                            </div>
                        </>
                    ) : (
                        <div>
                            {!skelLoad ? (
                                <>
                                    <div
                                        className="flex flex-col items-start mb-8 border-b 
                border-[#e1e7ea] pb-6 gap-2"
                                    >
                                        <div className="font-bold text-lg text-[#032b41]">
                                            Your Subscription plan
                                        </div>

                                        {isPremium ? (
                                            <div className="text-[#032b41]">Premium</div>
                                        ) : (
                                            <>
                                                <div className="text-[#032b41]">Basic</div>
                                                <button
                                                    className="flex items-center justify-center bg-[#2bd97c] 
                        text-[#032b41] h-10 rounded text-base transition duration-200 
                        min-w-[180px] hover:bg-[#20ba68]"
                                                    onClick={() => router.push("/choose-plan")}
                                                >
                                                    Upgrade to Premium
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-start mb-8 pb-6 gap-2">
                                        <div className="font-bold text-lg text-[#032b41]">
                                            Email
                                        </div>

                                        <div className="text-[#032b41]">{user.email}</div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="flex flex-col items-start mb-8 border-b 
                border-[#e1e7ea] pb-6 gap-2"
                                    >
                                        <Skeleton width={160} height={24} />
                                        <Skeleton width={110} height={24} />
                                    </div>

                                    <div className="flex flex-col items-start mb-8 pb-6 gap-2">
                                        <Skeleton width={70} height={24} />
                                        <Skeleton width={130} height={24} />
                                    </div>
                                </>
                            )}

                        </div>

                    )}
                </div>
            </div>
        </div>

    )
}
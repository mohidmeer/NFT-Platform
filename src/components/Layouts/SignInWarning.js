import { useContext } from "react"
import { useAuth } from "../../hooks/useAuth"
import { AuthContext } from "../../Provider/AuthProvider"

const SignInWarning = () => {
    const {signInUser} = useAuth()
    const {isConnected, openModal} = useContext(AuthContext)
    
    return (
        <div className="flex h-[60vh] w-full h-full items-center justify-center m-auto flex-col gap-2">
            <h1 className="font-bold text-2xl">Sign in to create your collection</h1>
            {
                isConnected ? 
                <button className="bg-pink-600 text-white py-1 px-4 rounded font-bold" onClick={() => signInUser()}>Sign In</button>
                :
                <button className="bg-pink-600 text-white py-1 px-4 rounded font-bold" onClick={() => openModal()}>Connect Wallet</button>
            }
        </div>
    )
}

export default SignInWarning
import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useContext} from "react";
import {useAuth} from "../../hooks/useAuth";
import {AuthContext} from "../../Provider/AuthProvider";
import {truncateAddress} from "../../utils/global";

const SignModal = ({open, setOpen}) => {
  const {address, openModal} = useContext(AuthContext)
  const {signUser} = useAuth()

  return (
    <>
      {
        open &&
        <div className="fixed w-full h-screen bg-black/75 top-0 left-0 z-[100] flex items-center justify-center">
          <div className="bg-white max-w-[80%] w-max p-10 rounded-lg flex flex-col items-center gap-5 relative">
            <button className="absolute right-0 mr-5 text-xl top-10" onClick={() => setOpen(false)}>&times;</button>
            <div>
              <h1 className="text-xl">Verify Wallet</h1>
            </div>
            <div className="flex flex-col w-full items-center">
              <p>Sign a message to prove ownership of wallet.</p>
              <p className="bg-gray-200 py-1 px-10 rounded-lg mt-2">{truncateAddress(address)}</p>
            </div>
            <div className="flex flex-col w-full items-center">
              <button
                className="py-2 w-1/2  rounded-md font-bold text-white px-3  bg-pink-600"
                onClick={() => {signUser(); setOpen(false)}}
              >
                Sign Message
              </button>
              <button className="mt-2" onClick={() => {openModal(); setOpen(false)}}>Change Wallet</button>
            </div>
          </div>
        </div >
      }
    </>
  );
};
export default SignModal;

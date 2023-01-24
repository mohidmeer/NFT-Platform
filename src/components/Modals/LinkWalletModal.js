import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useContext} from "react";
import {RxCross2} from "react-icons/rx";
import {Alert} from "antd";
// import Loading from "./Loading/Loading";
// import {AppContext} from "../Provider/AppProvider";
import {AuthContext} from "../../Provider/AuthProvider";
import {truncateAddress} from "../../utils/global";
import {useUser} from "../../hooks/useUser";
import {useAuth} from "../../hooks/useAuth";
import { ApplicationContext } from "../../Provider/ApplicationProvider";
import Loading from "../Loading/Loading";

const LinkWalletModal = () => {
  const {
    address, isOpen, islinkWalletModal, handleLinkWalletModal, connectorName, user
  } = useContext(AuthContext);
  const {addNewWallet} = useUser()
  const {call, linkError} = addNewWallet()
  const {appLoading, setAppLoading} = useContext(ApplicationContext)
  const {signOut} = useAuth()

  return (
    <>
      {appLoading ? <Loading /> : null}
      <Transition appear show={islinkWalletModal}>
        <Dialog as="div" onClose={() => handleLinkWalletModal(true)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 py-10 text-left align-middle shadow-xl transition-all text-center">
                  <Dialog.Title
                    as="h2"
                    className="text-3xl mb-5 font-bold leading-6 text-black"
                  >
                    <span>Link Wallet</span>
                    <div className="absolute top-0 w-[95%] right-0 flex justify-end p-5 ">
                    </div>
                  </Dialog.Title>
                  {
                    linkError && (
                      <Alert
                        message={linkError.message}
                        type="error"
                        className="mb-2"
                        closable
                      />
                    )
                  }
                  <div className="mt-2">
                    <p className="text-base text-black">
                      The current wallet is not linked with your profile.
                    </p>
                  </div>

                  <div className="text-center mt-5">
                    <p className="text-secondary">
                      {truncateAddress(address)}
                    </p>
                    <div className="flex gap-4 items-center justify-between mx-auto w-[50%] mt-1">
                      <button className="bg-pink-600 text-white px-2 py-1 mt-2 rounded border-none" onClick={() => {
                        call(connectorName, address, user._id)
                      }}>Link Wallet</button>
                      <button
                        onClick={() => {
                          signOut()
                          handleLinkWalletModal(false)
                        }}>Sign Out</button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition >
    </>
  )
}

export default LinkWalletModal;

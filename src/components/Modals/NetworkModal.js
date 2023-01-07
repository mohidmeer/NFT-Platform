import { Dialog, Transition } from "@headlessui/react";
import { Modal } from "antd";
import { Fragment, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ethImage, polygonImage } from "../../constants/constants";
import { AuthContext } from "../../Provider/AuthProvider";

const NetworksModal = () => {
  const { handleNetworkModal, switchNetwork, isNetworkModal } =
    useContext(AuthContext);

  return (
    <>
      <Transition appear show={isNetworkModal}>
        <Dialog as="div" onClose={() => handleNetworkModal(true)}>
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
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white px-6 py-10 text-left align-middle shadow-xl transition-all text-center">
                  <Dialog.Title
                    as="h2"
                    className="text-3xl mb-5 font-bold leading-6 text-black"
                  >
                    <span>Switch Network</span>
                    {/* <div className="absolute top-0 w-[95%] right-0 flex justify-end p-5 ">
                      <span
                        className="cursor-pointer"
                        onClick={() => handleNetworkModal(false)}
                      >
                        <RxCross2 size={20} className="" />
                      </span>
                    </div> */}
                  </Dialog.Title>
                  <div className="flex py-10 gap-2">
                    <div
                      onClick={() => {
                        switchNetwork(5);
                        handleNetworkModal(false);
                      }}
                      className="w-1/2 bg-[#f5f5f7] py-2 px-2 font-bold flex flex-col items-center gap-3 justify-center cursor-pointer"
                    >
                      <img src={ethImage} className="h-20" alt="" />
                      <p>Ethereum</p>
                    </div>

                    <div
                      onClick={() => {
                        switchNetwork(80001);
                        handleNetworkModal(false);
                      }}
                      className="w-1/2 bg-[#f5f5f7] py-2 px-2 font-bold flex flex-col items-center gap-3 justify-center cursor-pointer"
                    >
                      <img src={polygonImage} className="h-20" alt="" />
                      <p>Polygon</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default NetworksModal;

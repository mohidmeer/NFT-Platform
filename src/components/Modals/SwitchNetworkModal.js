import { Dialog, Transition } from "@headlessui/react";
import { Modal } from "antd";
import { Fragment, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../Provider/AuthProvider";

const SwitchNetWorkModal = () => {
  const {
    handleNetworkModal,
    isNetworkWarningModal,
    handleNetworkWarningModal,
  } = useContext(AuthContext);

  return (
    <div>
      <Transition appear show={isNetworkWarningModal}>
        <Dialog as="div" onClose={() => handleNetworkWarningModal(true)}>
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
                    className="text-3xl mb-0 leading-6 text-black"
                  >
                    <span className="font-bold">Wrong Network !!</span>
                    <div className="flex justify-end p-5 ">
                      <p className="text-lg font-regular font-body">
                        Please Select a network that is compatible with platform
                      </p>
                    </div>
                  </Dialog.Title>
                  <div className="flex py-0 gap-2 justify-center font-display font-bold text-white text-lg">
                    <button
                      className="bg-pink-600 p-2 rounded"
                      onClick={() => {
                        handleNetworkModal(true);
                        handleNetworkWarningModal(false);
                      }}
                    >
                      Switch Network
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SwitchNetWorkModal;

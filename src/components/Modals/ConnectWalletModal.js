import {Dialog, Transition} from "@headlessui/react"
import {Fragment, useContext} from "react";
import {AuthContext} from "../../Provider/AuthProvider";
import OneKey from "../../Assets/Wallets/OneKey.png";
import Crypto from "../../Assets/Wallets/Crypto.png";
import Metamask from "../../Assets/Wallets/metamask.png";
import WalletConnect from "../../Assets/Wallets/Walletconnect.png";
import Coinbase from "../../Assets/Wallets/Coinbase.png";
import Fortmatic from "../../Assets/Wallets/Formatic.png";
import Tokenpocket from "../../Assets/Wallets/Tokenpocket.png";
import ImToken from "../../Assets/Wallets/imToken.png";
import Mathwallet from "../../Assets/Wallets/Mathwallet.png";
import Bit from "../../Assets/Wallets/Bit.png";
import Safepal from "../../Assets/Wallets/Safepal.png";
import Hyperpay from "../../Assets/Wallets/Hyperpay.png";
import Trustwallet from "../../Assets/Wallets/Trustwallet.png";
import {RiMenu4Line} from "react-icons/ri";

const ConnectWalletModal = () => {
  const {connectAsync, connectors, isOpen, closeModal} =
    useContext(AuthContext);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full  max-w-lg   transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Connect a wallet to continue
                </Dialog.Title>
                <div className="mt-2">
                  <div class="p-4 relative pt-0">
                    <div className="flex justify-between">
                      <ul>
                        <li class=" border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10  hover:border-green-200 border-2 transition-all rounded-lg">
                          <button
                            class="flex items-center w-full text-white-primary text-lg font-medium text-left"
                            onClick={() =>
                              connectAsync({connector: connectors[0]}).then(
                                () => closeModal()
                              )
                            }
                          >
                            <img
                              height="28"
                              width="28"
                              src={Metamask}
                              alt="MetaMask icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>MetaMask</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button
                            class="flex items-center w-full text-white-primary text-lg font-medium text-left"
                            onClick={() =>
                              connectAsync({connector: connectors[1]}).then(
                                () => closeModal()
                              )
                            }
                          >
                            <img
                              height="28"
                              width="28"
                              src={WalletConnect}
                              alt="WalletConnect icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>WalletConnect</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button
                            class="flex items-center w-full text-white-primary text-lg font-medium text-left"
                            onClick={() =>
                              connectAsync({connector: connectors[2]}).then(
                                () => closeModal()
                              )
                            }
                          >
                            <img
                              height="28"
                              width="28"
                              src={Coinbase}
                              alt="Coinbase icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>Coinbase</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={Trustwallet}
                              alt="Crypto.com icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>Trust Wallet</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={OneKey}
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>Crypto.com</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={Fortmatic}
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>Fortmatic</span>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <ul>
                        <li class=" border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10  hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={Tokenpocket}
                              alt="MetaMask icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>TokenPocket</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={ImToken}
                              alt="WalletConnect icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>imToken</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={Mathwallet}
                              alt="Coinbase icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>MathWallet</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={Bit}
                              alt="Crypto.com icon"
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>BitKeep</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={Safepal}
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>SafePal</span>
                            </div>
                          </button>
                        </li>
                        <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
                          <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
                            <img
                              height="28"
                              width="28"
                              src={Hyperpay}
                              class="mr-3"
                            />
                            <div class="flex flex-col">
                              <span>HyperPay</span>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ConnectWalletModal;

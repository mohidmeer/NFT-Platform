import { Dialog, Transition } from "@headlessui/react";
import { ConfigProvider, DatePicker, Form, InputNumber } from "antd";
import { Fragment, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ChainsInfo } from "../../config/config-chains";
import { useNft } from "../../hooks/useNft";
import { ApplicationContext } from "../../Provider/ApplicationProvider";
import { AuthContext } from "../../Provider/AuthProvider";
import { decimalConverter } from "../../utils/global";

const PlaceBidModal = ({ isBidModal, handleBidModal, nft }) => {
    const { chain } = useContext(AuthContext)
    const { handlePlaceBid } = useNft()

    const handleBidding = async (values) => {
        handlePlaceBid(nft?.collectionAddress, values.price, nft?.auctionMetadata?._id, handleBidModal)
    }

    return (
        <Transition appear show={isBidModal}>
            <Dialog as="div" onClose={() => handleBidModal(false)}>
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
                                    <span>Place Bid</span>
                                    <div className="absolute top-0 w-[95%] right-0 flex justify-end p-5 ">
                                        <span
                                            className="cursor-pointer"
                                            onClick={() => handleBidModal(false)}
                                        >
                                            <RxCross2 size={20} className="" />
                                        </span>
                                    </div>

                                </Dialog.Title>
                                <div className="w-[80%] mx-auto">
                                    <Form layout="vertical" onFinish={(values) => handleBidding(values)}>
                                        <Form.Item label={"Bid Amount"} name="price" required>
                                            <InputNumber className="w-full" placeholder="Amount" />
                                        </Form.Item>
                                        <Form.Item>
                                            <button type="submit" className="font-bold text-white w-full bg-pink-600 py-2 rounded mt-3">Submit</button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default PlaceBidModal
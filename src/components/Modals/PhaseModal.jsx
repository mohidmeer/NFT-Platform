import { Dialog, Transition } from "@headlessui/react"
import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { Fragment } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { ethers } from "ethers";
import dayjs from "dayjs"
const PhaseModal = ({ isOpen, closeModal, phases, setPhases }) => {
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

        <div className="fixed w-[50%] inset-0 overflow-y-auto mx-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full  transform overflow-hidden  bg-[#eaeae9] p-6 text-left align-middle shadow-xl transition-all">
                <AiOutlineCloseCircle size={30} onClick={closeModal} />{" "}
                <div className="mt-5 bg-bgPrimary rounded-lg container ">
                  <h1 className="text-2xl  font-bold leading-10 text-black">
                    Launchpad Phases
                  </h1>
                  <div className="flex gap-10 h-full py-10">
                    <div className="flex-1 w-full">
                      <Form
                        name="dynamic_form_nest_item"

                        className=""
                        onFinish={(e) => {

                          console.log(e.phases)
                          let stages = []
                          e.phases.forEach(element => {
                            console.log(element)
                            stages.push({
                              price: ethers.utils.parseUnits(element.price.toString()),
                              nftDrop: element.nftDrop,
                              claimPerWallet: (element.claimPerWallet),
                              startDate: dayjs(element.startDate).unix(),
                              endDate: dayjs(element.endDate).unix(),
                            })
                          });
                          setPhases(stages)

                        }}
                        layout="vertical"
                        autoComplete="off"
                        initialValues={{
                          phases: phases,
                        }}
                      >
                        <Form.List name="phases" className="divide-y divide-solid">
                          {(fields, { add, remove }) => (
                            <>
                              {fields.map(({ key, name, ...restField }) => (
                                <div className="pt-5">
                                  <div className="flex items-center justify-between text-xl mb-4">
                                    <h1 className="font-bold">Stage {key + 1}</h1>
                                    <button className='text-red-500' onClick={() => {
                                      remove(name)
                                    }}><FaRegTrashAlt /></button>
                                  </div>

                                  <div className="flex gap-10 w-full">
                                    <Form.Item
                                      {...restField}
                                      label="When will this phase start?"
                                      name={[name, "startDate"]}
                                      className="w-full"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing Start Date",
                                        },
                                      ]}
                                    >
                                      <DatePicker className="w-full" />
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      label="When will this phase end?"
                                      name={[name, "endDate"]}
                                      className="w-full"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing End Date",
                                        },
                                      ]}
                                    >
                                      <DatePicker className="w-full" />
                                    </Form.Item>
                                  </div>
                                  <div className="flex gap-10">
                                    <Form.Item
                                      {...restField}
                                      label="How much do you want to charge to claim each NFT?"
                                      name={[name, "price"]}
                                      className="w-full"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing price",
                                        },
                                      ]}
                                    >
                                      <InputNumber className="w-full" placeholder="Price per NFT" />
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      name={[name, "nftDrop"]}
                                      label="How many NFTs will you drop in this phase?"
                                      className="w-full"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing nftDrop",
                                        },
                                      ]}
                                    >
                                      <InputNumber className="w-full" placeholder="12" />
                                    </Form.Item>
                                  </div>
                                  <div className="flex gap-10">
                                    <Form.Item
                                      {...restField}
                                      name={[name, "claimPerWallet"]}
                                      label="How many NFTs can be claimed per wallet?"
                                      className="w-full"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing Wallet Supply",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="2" />
                                    </Form.Item>
                                  </div>
                                  <div>

                                    <Form.Item
                                      {...restField}
                                      label="Enable Whitelist User"
                                      name={[name, "isWhitelist"]}
                                      className="w-full"
                                      valuePropName="checked"

                                    >
                                      <Switch defaultChecked />
                                    </Form.Item>
                                  </div>
                                  {/*<AiFillCloseCircle
                                    onClick={() => remove(name)}
                                    className="my-10"
                                  />*/}
                                </div>
                              ))}

                              <button
                                className="border border-dashed border-3 border-black text-sky-500 w-full py-2"
                                onClick={() => add()}
                              >
                                + Add field
                              </button>
                            </>
                          )}
                        </Form.List>
                        <div className="my-8"></div>
                        <Form.Item>
                          <button
                            className="mt-2 p-3 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600 w-full"
                            type="submit"
                          >
                            Save Phases
                          </button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default PhaseModal;

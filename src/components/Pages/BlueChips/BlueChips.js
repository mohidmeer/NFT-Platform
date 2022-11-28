import { Disclosure, Listbox, RadioGroup } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import TableItem from './TableItem'
const timeline = [
    { id: 1, name: "Last 24 hours", unavailable: false },
    { id: 2, name: "Last 12 hours", unavailable: false },
    { id: 3, name: "Last 7 days", unavailable: false },
    { id: 4, name: "Last 30 days", unavailable: false },]
const BlueChips = () => {

    const [selectedTime, setSelectedTime] = useState(timeline[3]);
    const [currency, setCurrency] = useState('solana')
  return (
    <div className="mt-7 p-4 ">

      <div className="flex justify-between lg:flex-row flex-col">
        <Disclosure as="div" className={`w-2/3 bg-dark-2 rounded-lg`}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-gray-400 hover:bg-dark focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="">Search</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 rounded  text-lg ">
              Select collections which match the following conditions:
              <div className='mt-2'>
                <button type="button" class="border border-pink-600 py-1 px-2  inline-flex justify-center items-center rounded-md ">+ Add filter</button>
                <button type="button" class=" bg-pink-600 py-1 px-2 inline-flex justify-center items-center rounded-md  ml-3 ">Search</button>
            </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div>
          <RadioGroup
            as="div"
            className={
              "flex justify-between p-1 border border-dark   justify-items-center mt-1 rounded-full  "
            }
            value={currency}
            onChange={setCurrency}
          >
            <RadioGroup.Option value="solana">
              {({ checked }) => (
                <span
                  className={`text-sm px-4 py-1 rounded-full ${
                    checked ? "bg-pink-600" : ""
                  }`}
                >
                  Solana
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="ethereium">
              {({ checked }) => (
                <span
                  className={`text-sm px-4 py-1 rounded-full  ${
                    checked ? "bg-pink-600" : ""
                  }`}
                >
                  Ethereium
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="all">
              {({ checked }) => (
                <span
                  className={`text-sm px-4 py-1 rounded-full  ${
                    checked ? "bg-pink-600" : ""
                  }`}
                >
                  Show all
                </span>
              )}
            </RadioGroup.Option>
          </RadioGroup>
        </div>

        <div>
          <Listbox
            as="div"
            className={
              "  lg:block  relative  text-left border border-dark   px-6 py-1  rounded"
            }
            value={selectedTime}
            onChange={setSelectedTime}
          >
            <Listbox.Button
              className={
                "justify-center text-sm font-medium  shadow-sm "
              }
            >
              {" "}
              {selectedTime.name}
            </Listbox.Button>
            <Listbox.Options
              as="div"
              className={
                "absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-dark-2   shadow-lg  ring-opacity-5 focus:outline-none"
              }
            >
              {timeline.map((timeline) => (
                <Listbox.Option
                  className={" block px-4 py-1 text-sm hover:bg-dark"}
                  key={timeline.id}
                  value={timeline}
                  disabled={timeline.unavailable}
                >
                  {timeline.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-4 border border-dark">
    <table class="w-full text-sm text-left  ">
        <thead class="text-xs  uppercase bg-dark ">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Collection
                </th>
                <th scope="col" class="py-3 px-6">
                    Volume Total
                </th>
                <th scope="col" class="py-3 px-6">
                   {selectedTime.name}
                </th>
                <th scope="col" class="py-3 px-6">
                  {selectedTime.name} %
                </th>
                <th scope="col" class="py-3 px-6">
                    Sales
                </th>
                <th scope="col" class="py-3 px-6">
                    Floor Price
                </th>
                <th scope="col" class="py-3 px-6">
                    Owners
                </th>
                <th scope="col" class="py-3 px-6">
                   Total Supply
                </th>
            </tr>
        </thead>
        <tbody>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            
            
            
            
            
           
        </tbody>
    </table>
      </div>



    </div>
  )
}

export default BlueChips
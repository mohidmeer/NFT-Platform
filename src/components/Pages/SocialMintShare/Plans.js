import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { renderIntoDocument } from "react-dom/test-utils";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Free",
    description: "Best option for personal use  for your next project.",
    price: "0",
    features: ["1 person", "1 Projects"],
  },
  {
    name: "Solo",
    description: "Relevant for multiple users, extended & premium support.",
    price: "20",
    features: ["1 person", "2 Projects"],
    
  },
  {
    name: "Community",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: "15",
    features: ["2+ person", "Unlimited Projects"],
  },
];

export default function Plans() {
  const [selected, setSelected] = useState(plans[0]);
   let [period, setPeriod] = useState(true);
   const handleChange = () => {
    return setPeriod(!period);
  };

  return (
    <div className="w-full px-4 py-16 ">
      <div className="bg-pink-600 p-8 rounded-xl">
        <h2 className="font-bold text-white  text-5xl text-center mb-5">
          Simple and Flexible Pricing
        </h2>
        <h2 className="font-bold   text-5xl text-center mb-5">
          Commission Free Trading
        </h2>
      </div>
      <div className="mt-5 mb-5 flex justify-center gap-2">
        <p className="font-bold">Pay Monthly</p>
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input onChange={handleChange} type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            Pay Yearly (Save 10%)
          </span>
        </label>
      </div>

      <div className=" grid grid-cols-3 gap-4 mt-4  ">
        {plans.map((plan, i) => {
          return (
            <div className="bg-white p-6 shadow-xl  rounded-xl border border-green-400">
              <h3 class="mb-4 text-3xl font-bold text-pink-600 text-center">
                {plan.name}
              </h3>
              <ul role="list" class="mb-8 mt-10 ">
                {plan.features.map((feature) => {
                  return (
                    <li className="mt-4 text-center text-lg font-bold flex gap-3 ">
                      <FaCheck className="mt-2 text-pink-600" /> {feature}
                    </li>
                  );
                })}
              </ul>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">${period ? plan.price : Math.round(plan.price*12-(plan.price*12*0.10)) }</span>
                <span class="text-gray-500 dark:text-gray-400">{ period ? '/month': '/year'}</span>
              </div>

              <a
                href="#"
                class="flex justify-center text-white font-extrabold bg-pink-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200  rounded-lg text-xl px-5 py-2.5 text-center dark:text-white  dark:focus:ring-pink-900"
              >
                {plan.name + " Mint"}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

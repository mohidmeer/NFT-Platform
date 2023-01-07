import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Background = ({ stateChanger }) => {
  const [val, setVal] = useState([1, 2]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  const handleChange = (OnChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = OnChangeValue.target.value;
  };

  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
  };
  return (
    <div className="p-6 w-2/3">
      {/* <p className='font-bold text-sm text-gray-700'>Step 5 of 6</p> */}

      <div className="  ">
        <div className="text-center ">
          <h2 className="font-bold text-2xl">Add Team</h2>
          {val.map((data, i) => {
            return (
              <div className="flex gap-3  mt-4">
                <div className="flex ">
                  <div class="mb-3 w-full flex">
                    <button
                      onClick={() => handleDelete(i)}
                      className="mt-8 text-3xl text-red-600"
                    >
                      <MdClose className="" />
                    </button>
                    <div>
                      <label
                        for="exampleFormControlInput1"
                        class="font-bold inline-block mb-2 text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        class="c-input-box"
                        id="exampleFormControlInput1"
                      />
                    </div>
                  </div>
                  <div class="mb-3 w-full ">
                    <label
                      for="exampleFormControlInput1"
                      class="font-bold inline-block mb-2 text-gray-700"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      class="c-input-box"
                      id="exampleFormControlInput1"
                    />
                  </div>
                </div>
                <div className="flex ">
                  <div class="mb-3 w-full ">
                    <label
                      for="exampleFormControlInput1"
                      class="font-bold inline-block mb-2 text-gray-700"
                    >
                      Linkedin
                    </label>
                    <input
                      type="text"
                      class="c-input-box"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div class="mb-3 w-full ">
                    <label
                      for="exampleFormControlInput1"
                      class="font-bold inline-block mb-2 text-gray-700"
                    >
                      KYC Verified
                    </label>
                    <input
                      type="text"
                      class="c-input-box"
                      id="exampleFormControlInput1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className=" flex justify-start">
            <button
              onClick={() => handleAdd()}
              className="mt-4 bg-pink-600 px-4  font-bold py-2 rounded focus:ring-4  text-white "
            >
              Add More
            </button>
          </div>
        </div>
      </div>
      <div class="mb-4 mt-4">
        <label class="block mb-2 font-bold  text-gray-900 dark:text-white">
          White Paper
        </label>
        <input
          type="text"
          id="disname"
          placeholder="External Link"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 font-bold  text-gray-900 dark:text-white">
          Road Map
        </label>
        <input
          type="text"
          id="disname"
          placeholder="External Link"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="flex justify-center gap-6">
        <button
          onClick={() => stateChanger(6)}
          className=" mt-2 p-3  w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600"
        >
          Save and Proceed
        </button>

        <button
          onClick={() => stateChanger(4)}
          className=" mt-2 p-3 w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Background;

import React, {useState} from "react";
import {
  FaCross,
  FaDiscord,
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaPinterest,
  FaReddit,
  FaSquare,
  FaTelegram,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import {GiCancel} from "react-icons/gi";
import {Link} from "react-router-dom";

const Detail = ({stateChanger, values, setValues}) => {
  const [val, setVal] = useState([1, 2, 3, 4]);
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

  const handleCharacteristics = (e, key, type) => {
    const characteristics = values.characteristics ? {...values.characteristics} : {}

    let valueObject = characteristics[key] ? characteristics[key] : {}

    if (type) {
      valueObject.type = e.target.value
    } else {
      valueObject.name = e.target.value
    }

    characteristics[key] = valueObject

    setValues({
      ...values,
      characteristics: characteristics
    })
  }

  return (
    <div className="w-1/3">
      {/* <p className="font-bold text-sm text-gray-700">Step 3 of 5</p> */}
      <h3 className="font-bold text-4xl">Listing details</h3>
      <div>
        <h3 className="mt-4 text-2xl font-bold block mb-2  text-gray-900 dark:text-white">
          Catagories
        </h3>
        <div class="mb-6 mt-6">
          <label
            for="default-input"
            class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
          >
            Primary Catagory
          </label>
          <input
            placeholder=""
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <p className="text-sm font-bold">
            Select the primary category that you would like for this collection
            to be listed under
          </p>
        </div>
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-lg font-bold  text-gray-900 dark:text-white"
          >
            Secondary Catagory
          </label>
          <input
            placeholder=""
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <p className="text-sm font-bold">
            Select the secondary category for this collection to be listed under
          </p>
        </div>

        <div className="text-center ">
          <h2 className="font-bold text-2xl">Add Characteristics</h2>
          {val.map((data, i) => {
            return (
              <div className=" mt-4">
                <div className="flex justify-between">
                  <div class="mb-3 w-full">
                    <label
                      for="exampleFormControlInput1"
                      class="font-bold inline-block mb-2 text-gray-700"
                    >
                      Type
                    </label>
                    <input
                      type="text"
                      class="c-input-box"
                      id="exampleFormControlInput1"
                      name={data}
                      placeholder="Hair"
                      onChange={(e) => {
                        handleCharacteristics(e, data, true)
                      }}
                    />
                  </div>
                  <div class="mb-3 w-full flex">
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
                        placeholder="Blonde"
                        onChange={(e) => {
                          handleCharacteristics(e, data, false)
                        }}
                      />
                    </div>
                    <button
                      onClick={() => handleDelete(i)}
                      className="mt-6 text-3xl text-red-600"
                    >
                      <GiCancel />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => handleAdd()}
            className="mt-4 bg-pink-600 w-full font-bold py-2 rounded focus:ring-4  text-white "
          >
            Add More
          </button>
        </div>

        <h3 className="mt-4 text-lg font-bold block mb-2  text-gray-900 dark:text-white">
          Unlockable Content
        </h3>
        <label class="inline-flex relative items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Include unlockable content that can only be revealed by owner of
            item.
          </span>
        </label>

        <button
          onClick={() => stateChanger(4)}
          className=" mt-2 p-3 w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600"
        >
          Save and Proceed
        </button>
      </div>
    </div>
  );
};

export default Detail;

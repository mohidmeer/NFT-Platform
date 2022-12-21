import React, { useState } from 'react'
import { GiCancel } from 'react-icons/gi';

const WhitelistRequirements = () => {

    const [val, setVal] = useState([1, 2, 3]);
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
    <div className="">
          <h2 className="font-bold text-3xl mt-4">Whitelist Requirements</h2>
          { val.map((data, i) => {
            return (
              <div className="">
                <div className="flex justify-between">
                <button
                      onClick={() => handleDelete(i)}
                      className="mb-2 text-3xl text-red-600">
                      <GiCancel />
                    </button>
                  <div class="mb-1 w-full">
                    <input
                      type="text"
                      class="c-input-box"
                      id="exampleFormControlInput1"
                      placeholder={'Requirement '+data}
                    />
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
  )
}

export default WhitelistRequirements
import {useMutation} from "@apollo/client";
import React, {useContext, useState} from "react";
import {UPDATE_USER} from "../../../graphql/mutations/userMutations";
import {AuthContext} from "../../../Provider/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const [updatedData, setUpdatedData] = useState({})
  const [UpdateUser] = useMutation(UPDATE_USER)

  const updateUser = (async (e) => {
    e.preventDefault()
    await UpdateUser({
      variables: {...updatedData, userId: user._id}
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <div className="p-5 lg:w-1/3">
      <div className="text-3xl font-bold ">Profile Settings</div>

      <form className=" p-4 border border-white mt-8 rounded-lg  ">
        <div class="mb-4">
          <label class=" block mb-2 text-xs font-bold  text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            defaultValue={user?.username}
            id="disname"
            placeholder="Item Name"
            onChange={(e) => setUpdatedData({...updatedData, username: e.target.value})}
            class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <p className="text-xs ml-1 text-gray-500">
            Your profile name on socialmint
          </p>
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">
            Display Name
          </label>
          <input
            type="text"
            id="disname"
            defaultValue={user?.displayName}
            onChange={(e) => setUpdatedData({...updatedData, displayName: e.target.value})}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <label
          for="message"
          class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white"
        >
          Short Bio
        </label>
        <textarea
          id="message"
          rows="4"
          defaultValue={user?.bio}
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tell us about yourself in few words"
          onChange={(e) => setUpdatedData({...updatedData, bio: e.target.value})}
        ></textarea>
        <div class="mb-4">
          <label class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="text"
            id="disname"
            defaultValue={user?.email}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setUpdatedData({...updatedData, email: e.target.value})}
          />
          <p className="text-xs ml-1 text-gray-500">
            Your email for marketplace notifications
          </p>
        </div>

        <button
          onClick={(e) => updateUser(e)}
          className="mt-4 block bg-white border border-pink-600 rounded-lg text-sm font-bold p-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;

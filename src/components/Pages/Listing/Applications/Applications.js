import { Tab } from "@headlessui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Drafts from "./Drafts";
import Listed from "./Listed";
import Rejected from "./Rejected";
import Reviewed from "./Reviewed";
import Submissions from "./Submissions";

const Applications = () => {
  return (
    <div className=" mt-6 flex justify-between">
      <div className=" w-2/3">
        <Tab.Group >
          <Tab.List className={`p-4 bg-white rounded-xl flex gap-x-3  w-fit`}>
            <Tab className={`tab-listing`} >Draft</Tab>
            <Tab className={`tab-listing`} >Submissions</Tab>
            <Tab className={`tab-listing`} >Reviewed</Tab>
            <Tab className={`tab-listing`} >Listed</Tab>
            <Tab className={`tab-listing`} >Rejected</Tab>
            
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel><Drafts/></Tab.Panel>
            <Tab.Panel><Submissions/></Tab.Panel>
            <Tab.Panel><Reviewed/></Tab.Panel>
            <Tab.Panel><Listed/></Tab.Panel>
            <Tab.Panel><Rejected/></Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
      </div>
      <div>

      <NavLink className="bg-pink-600 py-3 px-4 hover:opacity-80 text-sm font-bold text-white rounded-xl  " to='/create-collection' >Create New Collection</NavLink>
      <button class="bg-pink-600 py-3 px-4 hover:opacity-80 text-sm font-bold text-white rounded-xl  ml-2" >Create a whitelist</button>
      </div>

      
    </div>
  );
};

export default Applications;

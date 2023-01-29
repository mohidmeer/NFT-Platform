import { Tab } from '@headlessui/react'
import React from 'react'
import Applications from './Applications/Applications';
import Collection from './Collections/Collection';

import Whitelists from './Whitelists';

const Listing = () => {
  return (
    <div className="p-4">
      <Collection/>

      {/* <Tab.Group  >
      <Tab.List  className={`flex gap-3 mb-3`}>
        <Tab as='button' className={ `tab-menu  `}>Applications</Tab>
        <Tab as='button'  className={`tab-menu `}>Whitelists</Tab>
        
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><Applications/></Tab.Panel>
        <Tab.Panel><Whitelists/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group> */}
    </div>
  );
}

export default Listing
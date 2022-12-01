import Topbar from './components/Topbar/Topbar'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import Launchpad from './components/Pages/Launchpad/Launchpad';
import Auction from './components/Pages/Auction/Auction';
import Landing from './components/Pages/Landing/Landing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-tippy/dist/tippy.css'
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PopularCollections from './components/Pages/PopularCollections/PopularCollections';
import UpcomingDrops from './components/Pages/UpcomingDrops/UpcomingDrops';
import Tickets from './components/Pages/Tickets/Tickets';
import Error from './components/Pages/404/Error';
import { useEffect } from 'react';
import Communities from './components/Pages/Communities/Communities';
import Whitelist from './components/Pages/WhiteList/Whitelist';
import CreateC from './components/Pages/Creator/CreateC';
import BlueChips from './components/Pages/BlueChips/BlueChips';
import Celebrity from './components/Pages/Celebrity/Celebrity';
import LaunchServices from './components/Pages/LaunchServices/LaunchServices';
import SocialMintShare from './components/Pages/SocialMintShare/SocialMintShare';
import Discord from './components/Pages/Discord/Discord';

function App( ) {
 




  return (


   <div className=' '>
    <Topbar/>
    
    <Navbar/>
    <div className='lg:flex md:flex '>
    <Sidebar/>
     <div className='container mx-auto  h-full app-text '>
    <Routes>
    
        <Route path="/" element={<Landing/>} />
        <Route path="launchpad" element={<Launchpad/>} />
        <Route path="auctions" element={<Auction/>} />
        <Route path="collection" element={<PopularCollections tindex={0} />} />
        <Route path="collections" element={<PopularCollections tindex={1}  />} />
        <Route path="createwhitelist" element={<Whitelist/>} />
        <Route path="blue-chips" element={<BlueChips/>} />
        <Route path="createcollection" element={<CreateC/>} />
        <Route path="socialmint-share" element={<SocialMintShare/>} />
        <Route path="celebrity" element={<Celebrity/>} />
        <Route path="launch-services" element={<LaunchServices/>} />
        <Route path="drops" element={<UpcomingDrops/>} />
        <Route path="communities" element={<Communities/>} />
        <Route path="discord" element={<Discord/>} />
        <Route path="tickets" element={<Tickets/>} />
        <Route path="*" element={<Error/>} />
     
    </Routes>

     </div>
    

    </div>
    <ToastContainer />
   </div>
   
  );
}

export default App;

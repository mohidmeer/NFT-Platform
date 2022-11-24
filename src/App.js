import Topbar from './components/Topbar/Topbar'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import Launchpad from './components/Pages/Launchpad/Launchpad';
import Auction from './components/Pages/Auction/Auction';
import Landing from './components/Pages/Landing/Landing';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PopularCollections from './components/Pages/PopularCollections/PopularCollections';
import UpcomingDrops from './components/Pages/UpcomingDrops/UpcomingDrops';
import Tickets from './components/Pages/Tickets/Tickets';
import Error from './components/Pages/404/Error';

function App() {
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
        <Route path="popular-collection" element={<PopularCollections/>} />
        <Route path="drops" element={<UpcomingDrops/>} />
        <Route path="tickets" element={<Tickets/>} />
        <Route path="*" element={<Error/>} />
     
    </Routes>

     </div>
    

    </div>
     
   </div>
   
  );
}

export default App;

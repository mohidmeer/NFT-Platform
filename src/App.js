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

function App() {
  return (

   <div className=' '>
    <Topbar/>
    <Navbar/>
    <div className='flex'>
    <Sidebar/>
     <div className='container  mx-auto  text-white bg-black h-full'>
    <Routes>
    
        <Route path="/" element={<Landing/>} />
        <Route path="launchpad" element={<Launchpad/>} />
        <Route path="auctions" element={<Auction/>} />
        <Route path="*" element={<>404</>} />
     
    </Routes>

     </div>
    

    </div>
     
   </div>
   
  );
}

export default App;

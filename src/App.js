import Topbar from './components/Topbar/Topbar'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import Launchpad from './components/Pages/Launchpad/Launchpad';
import Auction from './components/Pages/Auction/Auction';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

   <div className='bg-black '>
    <Topbar/>
    <Navbar/>
    <div className='flex'>
    <Sidebar/>
    <div className='container  mx-auto  text-white'>


    <Routes>
      <Route path= "/">
        <Route path="launchpad" element={<Launchpad/>} />
        <Route path="auctions" element={<Auction/>} />
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>





      {/* <Launchpad/> */}
      {/* <Auction/> */}
    </div>
    

    </div>
     
   </div>
   
  );
}

export default App;

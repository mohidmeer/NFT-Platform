import Launchpad from "./components/Pages/Launchpad/Launchpad";
import Auction from "./components/Pages/Auction/Auction";
import Landing from "./components/Pages/Landing/Landing";
import {ToastContainer, toast} from "react-toastify";
import "react-tippy/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PopularCollections from "./components/Pages/PopularCollections/PopularCollections";
import UpcomingDrops from "./components/Pages/UpcomingDrops/UpcomingDrops";
import Tickets from "./components/Pages/Tickets/Tickets";
import Error from "./components/Pages/404/Error";
import {useEffect, useState} from "react";
import Communities from "./components/Pages/Communities/Communities";
import Whitelist from "./components/Pages/WhiteList/Whitelist";
import CreateC from "./components/Pages/Creator/CreateC";
import LaunchServices from "./components/Pages/LaunchServices/LaunchServices";
import SocialMintShare from "./components/Pages/SocialMintShare/SocialMintShare";
import Discord from "./components/Pages/Discord/Discord";
import Listing from "./components/Pages/Listing/Listing";
import CreateCollection from "./components/Pages/CreateCollection/CreateCollection";
import Watchlist from "./components/Pages/Watchlist/Index";
import WhitelistRegister from "./components/Pages/WhitelistRegister/WhitelistRegister";
import WhitelistRegisterItem from "./components/Pages/WhitelistRegister/WhitelistRegisterItem";
import AuctionItem from "./components/Pages/Auction/AuctionItem";
import LiveDropItem from "./components/Pages/Auction/LiveDrops/LiveDropItem";
import CollectionItem from "./components/Pages/PopularCollections/CollectionItem/CollectionItem";
import AppContext from "./AppContext";
import AppLayout from "./components/Layouts/AppLayout";
import CollectionDetail from "./components/Layouts/CollectionDetail";
import DiscordLayout from "./components/Layouts/DiscordLayout";
import Profile from "./components/Pages/Profile/Profile";
import ProfileLayout from "./components/Layouts/ProfileLayout";
import Wallets from "./components/Pages/Profile/Wallets";
import Rewards from "./components/Pages/Profile/Rewards";
import Notifications from "./components/Pages/Profile/Notifications";
import Offers from "./components/Pages/Profile/Offers";
import Plans from "./components/Pages/Profile/Plans";
import WalletProvider from "./Provider/WalletProvider";
import AuthProvider from "./Provider/AuthProvider";
function App() {
  const [sidebarstate, setSideBarState] = useState(1);

  const userSettings = {
    sidebarstate: sidebarstate,
    setSideBarState,
  };

  return (
    <WalletProvider>
      <AuthProvider>
        <AppContext.Provider value={userSettings}>
          <div className=" ">
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Landing />} />
                <Route path="launchpad" element={<Launchpad />} />
                <Route path="auctions" element={<Auction />} />
                <Route
                  path="auctions/:name"
                  element={<AuctionItem name={"Rifter Demigod Solana"} />}
                />
                <Route
                  path="collection"
                  element={<PopularCollections tindex={0} />}
                />
                <Route
                  path="collection-t"
                  element={<PopularCollections tindex={1} />}
                />
                <Route
                  path="collection-b"
                  element={<PopularCollections tindex={2} />}
                />
                <Route
                  path="collection-c"
                  element={<PopularCollections tindex={3} />}
                />
                <Route
                  path="createwhitelist"
                  element={<CreateCollection title={"Create Whitelist"} />}
                />
                <Route
                  path="create-collection"
                  element={
                    <CreateCollection title={"Create Your Collection"} />
                  }
                />
                <Route path="watchlist" element={<Watchlist />} />
                <Route path="whitelist" element={<WhitelistRegister />} />
                <Route
                  path="whitelist/:name"
                  element={<WhitelistRegisterItem name={"Galactic Robots"} />}
                />
                <Route path="socialmint-share" element={<SocialMintShare />} />
                <Route path="launch-services" element={<LaunchServices />} />
                <Route path="drops" element={<UpcomingDrops />} />
                <Route
                  path="drops/:name"
                  element={<LiveDropItem name={"Glactic Robots"} />}
                />
                <Route path="communities" element={<Communities />} />
                <Route path="list" element={<Listing />} />
                <Route path="list-collection" element={<CreateCollection />} />
                <Route path="tickets" element={<Tickets />} />
              </Route>

              <Route path="/" element={<ProfileLayout />}>
                <Route path="profile" element={<Profile />} />
                <Route path="wallets" element={<Wallets />} />
                <Route path="rewards" element={<Rewards />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="plans" element={<Plans />} />
                <Route path="offers" element={<Offers />} />
              </Route>

              <Route path="collection/:name" element={<CollectionDetail />}>
                <Route index element={<CollectionItem />} />
              </Route>

              <Route path="discord" element={<DiscordLayout />}>
                <Route index element={<Discord />} />
              </Route>

              <Route path="*" element={<Error />} />
            </Routes>
            <ToastContainer />
          </div>
        </AppContext.Provider>
      </AuthProvider>
    </WalletProvider>
  );
}

export default App;

import React, { useState, Fragment, useContext } from "react";
import { FaSearch, FaWallet } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";

import Logo from "../../logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import AppContext from "../../AppContext";
import Profilebar from "./Profilebar";
import { AuthContext } from "../../Provider/AuthProvider";
import ConnectWalletModal from "../Modals/ConnectWalletModal";
import { Link } from "react-router-dom";
import SwitchNetWorkModal from "../Modals/SwitchNetworkModal";
import NetworksModal from "../Modals/NetworkModal";

const Navbar = () => {
  const myContext = useContext(AppContext);
  const { isConnected, openModal, closeModal, isOpen } =
    useContext(AuthContext);

  function toggle() {
    myContext.setSideBarState(
      (myContext.sidebarstate = !myContext.sidebarstate)
    );
  }

  return (
    <>
      <SwitchNetWorkModal />
      <NetworksModal />
      <div className="p-4 bg-app  flex  justify-between border-b-2 border-white">
        <Link to="/">
          <img src={Logo} width={160} alt="" />
        </Link>

        <div className="w-1/3 hidden sm:block rounded-full  border border-pink-600    ">
          <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-app overflow-hidden">
            <div className="grid place-items-center h-full w-12 ">
              <FaSearch />
            </div>

            <input
              className=" autofill:bg-slate-600    h-full w-full outline-none text-sm bg-app text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>

        <div className="flex gap-x-2">
          <button onClick={toggle}>
            <GiHamburgerMenu className="  text-3xl" />{" "}
          </button>

          {!isConnected ? (
            <button
              onClick={openModal}
              className=" truncate flex bg-transparent hover:bg-pink-600 text-blue-dark font-semibold hover:text-gray-700 py-2 px-4 border border-pink-600 hover:border-transparent rounded  "
            >
              <span className="border-r mr-2 border-pink-600">
                <FaWallet className="mt-1  mr-2" />
              </span>
              Connect Wallet
            </button>
          ) : (
            <Profilebar />
          )}
        </div>

        <ConnectWalletModal link={false} />
      </div>
    </>
  );
};

export default Navbar;

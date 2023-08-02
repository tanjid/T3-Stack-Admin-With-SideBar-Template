
import { Menu, Transition } from "@headlessui/react";

import { BellIcon } from "lucide-react";
import React, { Fragment } from "react";
import { DarkModeToggle } from "./ModeToggle";


const TopBar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-card shadow">
      <div className="flex flex-1 justify-between px-4 md:px-0">
        <div className="flex flex-1">

        </div>
        <div className="ml-4 flex items-center md:ml-6 gap-2 bg-card">
          <button
            type="button"
            className="rounded-full  p-1  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6  bg-card" aria-hidden="true" />
          </button>

          

          <DarkModeToggle />
          {/* <UserNav /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

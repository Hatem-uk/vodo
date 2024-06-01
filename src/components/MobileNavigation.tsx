import React from "react";
import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../contants/navigation";
import { NavigationItem } from "../types/types";

const MobileNavigation: React.FC = () => {
  return (
    <section className="lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav: NavigationItem) => (
          <NavLink
            key={nav.label + "mobilenavigation"}
            to={nav.href}
            className={({ isActive }) =>
              `px-3 flex h-full items-center flex-col justify-center ${
                isActive ? "text-white" : ""
              }`
            }
          >
            <div className="text-2xl">{nav.icon}</div>
            <p className="text-sm">{nav.label}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MobileNavigation;

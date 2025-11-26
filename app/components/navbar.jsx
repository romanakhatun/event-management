"use client";
import { HiOutlineBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";
import DisEventLogo from "@/public/dishvent.png";
import Image from "next/image";
import ActiveLink from "./ActiveLink";

// Define the navigation items
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menus", path: "/menus" },
  { name: "Chefs", path: "/chefs" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
];
// User Dropdown Links
const userLinks = [
  { name: "Add Menus", path: "/add-menus" },
  { name: "My Menus", path: "/my-menus" },
  { name: "My Favorites", path: "/my-favorites" },
];

const Navbar = () => {
  return (
    <div className="absolute text-white pt-8 top-0 left-0 w-full ">
      <div className="flex justify-between container mx-auto px-4 lg:px-0">
        <div>
          <Image src={DisEventLogo} alt="LOGO" />
        </div>

        <div className="bg-[#2D2C2B] rounded-full flex items-center">
          {navLinks.map((nav, i) => (
            <ActiveLink key={i} href={nav.path}>
              {nav.name}
            </ActiveLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

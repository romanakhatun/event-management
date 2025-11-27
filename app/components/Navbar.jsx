"use client";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import DisEventLogo from "@/public/dishvent.png";
import ActiveLink from "./ActiveLink";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menus", path: "/menus" },
  { name: "Chefs", path: "/chefs" },
  // { name: "Login", path: "/login" },
  // { name: "Register", path: "/register" },
];
const userLinks = [
  { name: "Add menus", path: "/add-menus" },
  { name: "Manage Menus", path: "/manage-menus" },
];

const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute text-white pt-6 top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src={DisEventLogo} alt="LOGO" className="w-28" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-[#2D2C2B] rounded-full px-6 py-2 items-center gap-6">
          {navLinks.map((nav, i) => (
            <ActiveLink key={i} href={nav.path}>
              {nav.name}
            </ActiveLink>
          ))}

          {session ? (
            <>
              {userLinks.map((nav, i) => (
                <ActiveLink key={i} href={nav.path}>
                  {nav.name}
                </ActiveLink>
              ))}
              <button
                className="auth-btn cursor-pointer"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href={"/login"} className="auth-btn">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white text-3xl border border-white px-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <IoMenuOutline />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-start transition-opacity duration-300 `}
        >
          <div className="w-64 bg-[#2D2C2B] h-full p-6 flex flex-col gap-6">
            {/* Close */}
            <button
              className="text-2xl self-end cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <TfiClose />
            </button>

            {/* Links */}
            {navLinks.map((nav, i) => (
              <ActiveLink
                key={i}
                href={nav.path}
                onClick={() => setOpen(false)}
              >
                {nav.name}
              </ActiveLink>
            ))}

            {session ? (
              <>
                {userLinks.map((nav, i) => (
                  <ActiveLink
                    key={i}
                    href={nav.path}
                    onClick={() => setOpen(false)}
                  >
                    {nav.name}
                  </ActiveLink>
                ))}
                <button
                  className="auth-btn cursor-pointer"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href={"/login"}
                onClick={() => setOpen(false)}
                className="auth-btn"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

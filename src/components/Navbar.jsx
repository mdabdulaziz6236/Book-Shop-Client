"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check Active Link
  const getLinkClass = (path) => {
    return pathname === path
      ? "text-secondary font-bold"
      : "text-primary font-medium hover:text-secondary transition-colors";
  };

  const navOptions = (
    <>
      <li>
        <Link href="/" className={getLinkClass("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/items" className={getLinkClass("/items")}>
          All Books
        </Link>
      </li>
    </>
  );

  if (!mounted)
    return (
      <div className="navbar bg-base-200 shadow-sm sticky top-0 z-50 h-16"></div>
    );

  return (
    <div className="navbar bg-base-200 text-base-content backdrop-blur-md  shadow-sm sticky top-0 z-50 ">
      {/* 1. Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-primary"
          >
            {/* 2. Menu Icon (FaBars) */}
            <FaBars className="h-6 w-6" />
          </div>
          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200"
          >
            {navOptions}
          </ul>
        </div>

        <Link href="/" className="px-2 hover:bg-transparent">
          <Logo />
        </Link>
      </div>

      {/* 2. Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-base">
          {navOptions}
        </ul>
      </div>

      {/* 3. End */}
      <div className="navbar-end gap-3">
        {/* Theme Toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle text-secondary border-2 bg-base-200 ">
          <input
            type="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            checked={theme === "dark"}
          />

          {/* 3. Sun Icon (Light Mode) */}
          <FaSun className="swap-on h-6 w-6" />

          {/* 4. Moon Icon (Dark Mode) */}
          <FaMoon className="swap-off h-6 w-6" />
        </label>

        {/* Login Button */}
        <Link
          href="/login"
          className="btn btn-primary border-none text-white font-bold px-6 shadow-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

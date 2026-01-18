"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { FaBars, FaSun, FaMoon, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { logoutUser } from "@/app/actions/auth";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkLoginStatus = () => {
      const allCookies = document.cookie;
      if (allCookies.includes("session_token")) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, [pathname]); 
  const handleLogout = async () => {
    setIsLoggedIn(false);
    await logoutUser();
  };

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-secondary font-bold"
      : "text-primary font-medium hover:text-secondary transition-colors";
  };

  const navOptions = (
    <>
      <li><Link href="/" className={getLinkClass("/")}>Home</Link></li>
      <li><Link href="/items" className={getLinkClass("/items")}>All Books</Link></li>
      {
        isLoggedIn&& <li><Link href="/add-items" className={getLinkClass("/add-items")}>Add Books</Link></li>
      }
    </>
  );

  if (!mounted)
    return <div className="navbar bg-base-200 shadow-sm sticky top-0 z-50 h-16"></div>;

  return (
    <div className="navbar bg-base-200 text-base-content backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-primary">
            <FaBars className="h-6 w-6" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200">
            {navOptions}
          </ul>
        </div>
        <Link href="/" className="px-2 hover:bg-transparent"><Logo /></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-base">{navOptions}</ul>
      </div>

      <div className="navbar-end gap-3">
        <label className="swap swap-rotate btn btn-ghost btn-circle text-secondary border-2 bg-base-200 ">
          <input
            type="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <FaSun className="swap-on h-6 w-6" />
          <FaMoon className="swap-off h-6 w-6" />
        </label>

        {isLoggedIn ? (
          <button
            onClick={handleLogout} 
            className="btn btn-error btn-outline text-error hover:text-white font-bold px-4 shadow-md gap-2"
          >
            Logout <FaSignOutAlt />
          </button>
        ) : (
          <Link
            href="/login"
            className="btn btn-primary border-none text-white font-bold px-6 shadow-md gap-2"
          >
            Login <FaSignInAlt />
          </Link>
        )}
      </div>
    </div>
  );
}
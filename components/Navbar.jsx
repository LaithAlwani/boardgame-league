"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton, useUser, ClerkLoading } from "@clerk/nextjs";
import { FaUserLock } from "react-icons/fa";
import { MdContactSupport, MdHome, MdInfo, MdLogin } from "react-icons/md";
import { ImBubbles } from "react-icons/im";
import { GiOpenBook } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const size = 24

  const links = [
    { href: "/", label: "Home", icon: <MdHome size={size} /> },
    { href: "/leagues", label: "Leagues", icon: <ImBubbles size={size} /> },
    { href: "/boardgames", label: "Board Games", icon: <GiOpenBook size={size} /> },
    { href: "/about", label: "About", icon: <MdInfo size={size} /> },
    { href: "/contact", label: "Contact", icon: <MdContactSupport size={size} /> },
  ];

  if (user?.publicMetadata.role === "admin") {
    links.push({ href: "/admin", label: "Admin", icon: <FaUserLock size={size} /> });
  }

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative w-full p-3 shadow-sm z-50 bg-slate-700 text-white">
      <div className="flex justify-end items-center mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 mr-auto">
          <img src="/icons/icon-96x96.png" alt="logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold">OBL</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3 items-center">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <ClerkLoading>
             <div className="w-[48px] h-[48px] rounded-full bg-gray-300 animate-pulse" />
          </ClerkLoading>
          <SignedIn>
            <div className="flex flex-col items-center">
              <UserButton /> <span className="text-sm">Settings</span>
            </div>
          </SignedIn>
          <SignedOut>
            <NavLink href="/sign-in" label="Sign In" icon={<MdLogin size={24} />} />
          </SignedOut>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 z-20" onClick={toggleMenu}>
          {isOpen ? <FiX size={size} /> : <FiMenu size={size} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={` md:hidden fixed top-0 right-0 h-full w-64 pt-[2rem] z-10 bg-slate-700 shadow-lg 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-5 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink key={link.href} {...link} onClick={closeMenu} />
          ))}

          <SignedIn>
            <div className=" flex items-center gap-4">
              <UserButton /> <span className="text-sm">Settings</span>
            </div>
          </SignedIn>
          <SignedOut>
            <NavLink href="/sign-in" label="Sign In" icon={<MdLogin size={size} />} onClick={closeMenu} />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label, icon, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex md:flex-col items-center gap-1 ${isActive ? "underline" : ""}`}
    >
      {icon} <span className="text-sm">{label}</span>
    </Link>
  );
}

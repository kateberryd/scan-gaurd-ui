import { Logo, TwitterLogo, UknownOne, UnknownTwo } from "@/public/svg";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React icons for menu and close
import { Btn } from ".";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full flex justify-between items-center border-b border-b-[#666] px-5 py-3 md:px-10 md:py-5">
      {/* Logo and Navigation Links */}
      <div className="flex items-center gap-5">
        <Logo />
        <span className="hidden md:block">|</span>
        <div className="hidden md:flex items-center gap-5">
          <Link href="/">
            <span className="font-medium text-[20px] font-poppins">Home</span>
          </Link>
          <Link href="/">
            <span className="font-medium text-[20px] font-poppins">Producers</span>
          </Link>
        </div>
      </div>

      {/* Desktop Icons and Button */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-3">
          <TwitterLogo />
          <UknownOne />
          <UnknownTwo />
        </div>
        <Btn text="Launch App" color="bg-[#3383E2]" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden p-2 focus:outline-none"
        onClick={handleMenuToggle}
      >
        <FaBars size={24} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50 p-5 md:hidden">
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={handleMenuToggle}
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center mt-10">
            <Link href="/" onClick={handleMenuToggle}>
              <span className="font-medium text-[20px] font-poppins">Home</span>
            </Link>
            <Link href="/" onClick={handleMenuToggle}>
              <span className="font-medium text-[20px] font-poppins">Producers</span>
            </Link>
            <div className="flex items-center pt-5 gap-3">
          <TwitterLogo />
          <UknownOne />
          <UnknownTwo />
        </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Btn text="Launch App" color="bg-[#3383E2]" />
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  ChevronDown, ChevronUp, Package, ShieldCheck, Layers, Search, Menu, X 
} from "lucide-react";

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Image src="/slack-logo.png" alt="Slack Logo" width={100} height={40} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-5">
          <li
            className="relative font-semibold flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
            Products
            {isProductOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {isProductOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2">
                <ul className="space-y-2">
                  <DropdownItem icon={<Package size={18} className="text-blue-500" />} text="Slack Pro" />
                  <DropdownItem icon={<ShieldCheck size={18} className="text-green-500" />} text="Slack Secure" />
                  <DropdownItem icon={<Layers size={18} className="text-purple-500" />} text="Slack Teams" />
                </ul>
              </div>
            )}
          </li>

          <NavItem text="Enterprise" />
          <NavItem text="Resources" />
          <NavItem text="Prices" />
        </ul>

        {/* Right Side */}
        <ul className="hidden lg:flex items-center gap-5">
          <li className="cursor-pointer"><Search /></li>
          <NavItem text="Sign In" />
          <Button className="border-2 border-[#642067] text-[#642067] hover:bg-[#642067] hover:text-white">
            TALK TO SALES
          </Button>
          <Button className="bg-[#642067] text-white border-2 border-[#642067] hover:bg-transparent hover:text-[#642067]">
            TRY FOR FREE
          </Button>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-white shadow-lg p-4 space-y-3 rounded-md">
          <li
            className="font-semibold flex items-center gap-1 cursor-pointer"
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            Products
            {isProductOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </li>

          {isProductOpen && (
            <ul className="space-y-2 pl-4">
              <DropdownItem icon={<Package size={18} className="text-blue-500" />} text="Slack Pro" />
              <DropdownItem icon={<ShieldCheck size={18} className="text-green-500" />} text="Slack Secure" />
              <DropdownItem icon={<Layers size={18} className="text-purple-500" />} text="Slack Teams" />
            </ul>
          )}
          <NavItem text="Enterprise" />
          <NavItem text="Resources" />
          <NavItem text="Prices" />
          <NavItem text="Sign In" />
          <Button className="border-2 border-[#642067] text-[#642067] hover:bg-[#642067] hover:text-white">
            TALK TO SALES
          </Button>
          <Button className="bg-[#642067] text-white border-2 border-[#642067] hover:bg-transparent hover:text-[#642067]">
            TRY FOR FREE
          </Button>
        </ul>
      )}
    </header>
  );
};

const NavItem = ({ text }: { text: string }) => (
  <li className="font-semibold cursor-pointer hover:text-[#642067] transition">
    {text}
  </li>
);

const DropdownItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
    {icon} <span>{text}</span>
  </li>
);

const Button = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <li className={`p-2 font-semibold cursor-pointer transition ${className}`}>
    {children}
  </li>
);

export default Navbar;

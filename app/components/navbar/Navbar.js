"use client";

import { navigationData } from "./navData";
import { NavLink, AuthButton, BrandLink } from "./NavLink";
import { DropdownNavLink, SingleDropdownContainer } from "./Dropdown";
import { useState } from "react";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleNavAreaEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleNavAreaLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setIsDropdownVisible(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleDropdownItemEnter = (itemLabel) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemLabel);
    setIsDropdownVisible(true);
  };

  const getActiveDropdownData = () => {
    if (!activeDropdown) return null;
    const item = navigationData.mainNavItems.find(
      (item) => item.label === activeDropdown
    );
    return item?.dropdownData || null;
  };
  return (
    <nav className="bg-[#001D21] py-3">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <BrandLink
              href={navigationData.brand.href}
              className="text-xl font-semibold"
            >
              {navigationData.brand.name}
            </BrandLink>
          </div>

          {/* Main Navigation */}
          <div 
            className="hidden md:block relative"
            onMouseEnter={handleNavAreaEnter}
            onMouseLeave={handleNavAreaLeave}
          >
            <div className="flex items-center bg-[#012B31] rounded-full px-4 py-2">
              {navigationData.mainNavItems.map((item) =>
                item.hasDropdown ? (
                  <DropdownNavLink
                    key={item.label}
                    item={item}
                    isActive={activeDropdown === item.label}
                    onMouseEnter={() => handleDropdownItemEnter(item.label)}
                  />
                ) : (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    hasDropdown={false}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>

            {/* Single Dropdown Container */}
            <SingleDropdownContainer
              activeDropdown={activeDropdown}
              dropdownData={getActiveDropdownData()}
              isVisible={isDropdownVisible}
            />
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationData.authItems.map((item) => (
              <AuthButton
                key={item.label}
                href={item.href}
                variant={item.variant}
              >
                {item.label}
              </AuthButton>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

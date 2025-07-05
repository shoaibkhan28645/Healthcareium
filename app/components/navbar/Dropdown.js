"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function ProductsDropdown({ dropdownData }) {
  return (
    <div className="p-12">
      <div className="grid grid-cols-3 gap-12">
        {/* Fund Administration - Left Column */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-2xl flex-shrink-0 mt-1">
              {dropdownData.sections[0].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {dropdownData.sections[0].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {dropdownData.sections[0].description}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {dropdownData.sections[0].items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href}
                className="block text-sm text-gray-700 hover:text-black hover:bg-gray-50 px-2 py-1 rounded transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Investor Management - Middle Column */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-2xl flex-shrink-0 mt-1">
              {dropdownData.sections[1].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {dropdownData.sections[1].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {dropdownData.sections[1].description}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {dropdownData.sections[1].items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href}
                className="block text-sm text-gray-700 hover:text-black hover:bg-gray-50 px-2 py-1 rounded transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Intelligence - Right Column */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-2xl flex-shrink-0 mt-1">
              {dropdownData.sections[2].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {dropdownData.sections[2].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {dropdownData.sections[2].description}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {dropdownData.sections[2].items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href}
                className="block text-sm text-gray-700 hover:text-black hover:bg-gray-50 px-2 py-1 rounded transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {dropdownData.footer && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {dropdownData.footer.text}{" "}
            <Link
              href={dropdownData.footer.linkHref}
              className="text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              {dropdownData.footer.linkText}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

function SolutionsDropdown({ dropdownData }) {
  return (
    <div className="p-12">
      <div className="grid grid-cols-2 gap-16">
        {dropdownData.columns.map((column, index) => (
          <div key={index}>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
              {column.title}
            </h3>
            <div className="space-y-6">
              {column.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {item.icon ? (
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-base text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourcesDropdown({ dropdownData }) {
  return (
    <div className="p-12">
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
            {dropdownData.columns[0].title}
          </h3>
          <div className="space-y-3">
            {dropdownData.columns[0].items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-base text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
            {dropdownData.columns[1].title}
          </h3>
          <div className="space-y-4">
            {dropdownData.columns[1].blogPosts.map((post, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {post.category}
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 leading-tight">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SingleDropdownContainer({
  activeDropdown,
  dropdownData,
  isVisible,
}) {
  const [currentContent, setCurrentContent] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const [animationState, setAnimationState] = useState('idle');
  const contentRef = useRef(null);

  const getNavOrder = (type) => {
    const order = { 'products': 0, 'solutions': 1, 'resources': 2 };
    return order[type] ?? 0;
  };

  const getDropdownHeight = (type) => {
    switch (type) {
      case "products":
        return 420;
      case "solutions":
        return 320;
      case "resources":
        return 380;
      default:
        return 400;
    }
  };

  useEffect(() => {
    if (activeDropdown && dropdownData) {
      if (currentContent?.type !== dropdownData.type) {
        const currentOrder = getNavOrder(currentContent?.type);
        const newOrder = getNavOrder(dropdownData.type);
        
        // Set new height immediately when starting transition
        setContainerHeight(getDropdownHeight(dropdownData.type));
        
        setSlideDirection(newOrder > currentOrder ? 'right' : 'left');
        setAnimationState('slideOut');
        setIsTransitioning(true);

        setTimeout(() => {
          setCurrentContent(dropdownData);
          setAnimationState('slideIn');
          
          setTimeout(() => {
            setIsTransitioning(false);
            setAnimationState('idle');
          }, 250);
        }, 250);
      } else {
        setCurrentContent(dropdownData);
        setContainerHeight(getDropdownHeight(dropdownData.type));
      }
    } else if (!activeDropdown) {
      setCurrentContent(null);
      setContainerHeight(0);
    }
  }, [activeDropdown, dropdownData, currentContent]);

  const getDropdownWidth = () => {
    if (!currentContent) return 700;
    switch (currentContent.type) {
      case "products":
        return 700;
      case "solutions":
        return 600;
      case "resources":
        return 800;
      default:
        return 700;
    }
  };

  const getContentAnimationClass = () => {
    if (animationState === 'slideOut') {
      return slideDirection === 'right' 
        ? 'animate-[slideOutLeft_0.25s_ease-out_forwards]'
        : 'animate-[slideOutRight_0.25s_ease-out_forwards]';
    } else if (animationState === 'slideIn') {
      return slideDirection === 'right'
        ? 'animate-[slideInRight_0.25s_ease-out_forwards]'
        : 'animate-[slideInLeft_0.25s_ease-out_forwards]';
    }
    return 'opacity-100';
  };

  const renderDropdownContent = () => {
    if (!currentContent) return null;

    switch (currentContent.type) {
      case "products":
        return <ProductsDropdown dropdownData={currentContent} />;
      case "solutions":
        return <SolutionsDropdown dropdownData={currentContent} />;
      case "resources":
        return <ResourcesDropdown dropdownData={currentContent} />;
      default:
        return <ProductsDropdown dropdownData={currentContent} />;
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`absolute top-full left-1/2 mt-2
        bg-white rounded-2xl shadow-2xl border border-gray-100 z-50
        transition-all duration-300 ease-out overflow-hidden
        ${
          isVisible && currentContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      style={{
        transform: "translateX(-50%)",
        width: `${getDropdownWidth()}px`,
        height: `${containerHeight}px`,
        transition: "width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
      <div
        ref={contentRef}
        className={`${getContentAnimationClass()}`}
      >
        {renderDropdownContent()}
      </div>
    </div>
  );
}

export function DropdownNavLink({ item, isActive, onMouseEnter }) {
  return (
    <div onMouseEnter={onMouseEnter} className="px-2">
      <Link
        href={item.href}
        className={`flex items-center px-4 py-2 rounded-full transition-colors duration-200 ${
          isActive
            ? "bg-white text-gray-900"
            : "text-white hover:bg-white hover:text-gray-900"
        }`}
      >
        {item.label}
        {item.hasDropdown && (
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </Link>
    </div>
  );
}

import Link from "next/link";

export function BrandLink({ href, children, className = "" }) {
  return (
    <Link 
      href={href}
      className={`text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}

export function NavLink({
  href,
  children,
  hasDropdown = false,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors duration-200 ${className}`}
    >
      {children}
      {hasDropdown && (
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
  );
}

export function AuthButton({ href, children, variant = "text" }) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variantClasses = {
    text: "text-white hover:text-gray-300",
    primary: "bg-[#bcbcff] text-black hover:bg-[#F9F9F7]",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
}

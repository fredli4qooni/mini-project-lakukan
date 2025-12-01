import Link from "next/link";

export const NavBar = () => {
  const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "Contact", href: "/contact", active: false },
    { label: "About", href: "/about", active: false },
    { label: "Sign Up", href: "/signup", active: false },
  ];

  return (
    <nav className="hidden md:flex gap-12">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-base transition-colors hover:text-primary ${
            item.active 
              ? "text-black border-b border-gray-400 pb-0.5" 
              : "text-black"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
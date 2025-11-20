// components/Navbar.tsx
import Image from "next/image";

const links = ["Home", "Shop", "About Us", "FAQ", "Blog", "Contact Us"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
      <div className="mx-auto container-max px-6 h-20 flex items-center gap-6">
        <Image src="/logo-health.png" alt="Health Desk Clinic" width={100} height={40} priority />

        <div className="ml-auto hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6 text-[17px] font-semibold text-slate-800">
            {links.map((link) => (
              <a key={link} href="#" className="transition-colors hover:text-[#1f6bd8]">
                {link}
              </a>
            ))}
          </nav>

          <Image src="/cart.png" alt="Cart" width={26} height={26} />
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="">
      <nav>
        <ul className="ul">
          <li>
            <Link href="/" className={pathname === "/" ? "li-active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "li-active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link href="/shop" className={pathname === "/shop" ? "li-active" : ""}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .active {
          text-decoration: underline;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
};

export default Header;

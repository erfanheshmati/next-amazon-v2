import Link from "next/link";
import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="bg-base-300">
      <nav>
        <div className="navbar justify-between max-w-7xl mx-auto px-0">
          <Link href="/" className="btn btn-ghost text-lg">
            Next Amazon V2
          </Link>
          
          <Menu />
        </div>
      </nav>
    </header>
  );
}

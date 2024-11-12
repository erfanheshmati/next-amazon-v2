import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            Next Amazon V2
          </Link>
          <ul className="flex">
            <li>
              <Link href="/cart" className="btn btn-ghost rounded-btn">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/signin" className="btn btn-ghost rounded-btn">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

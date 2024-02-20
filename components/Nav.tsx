import React from "react";
import { ThemeButton } from "./ThemeButton";
import Link from "next/link";

export const Nav = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <Link href={"/"} className="text-xl">
              Countries
            </Link>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

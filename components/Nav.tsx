import React from "react";

import { ThemeButton } from "./themeButton";

export const Nav = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <strong className="text-xl">Countries</strong>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Children } from "react";

export const metadata = {
  title: "PromptPop",
  description: "Created by Adrian",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          {/* background  */}
          <div className="gradient"></div>
        </div>
        <div className="app">
          <Nav></Nav>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

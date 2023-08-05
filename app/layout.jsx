import "@styles/globals.css";
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
        <div className="app">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;

import React from "react";
import MainPage from "./MainPage";
import "./Layout.css";

/**
 * Layout and Routes of the application
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="">
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default Layout;

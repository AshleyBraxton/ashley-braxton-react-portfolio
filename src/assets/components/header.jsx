import React from "react";
import Nav from "./nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div className='header'>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Ashley Braxton</h1>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
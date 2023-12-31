import React, { useState } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  const [currentTab, setCurrentTab] = useState('About');


  return (

   
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <div className="btn">
          <a
            href="#about-page"
            onClick={() => setCurrentTab('About')}
            // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          ><span>
            About
          </span>
          </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="btn">
          <a
            href="#portfolio-page"
            onClick={() => setCurrentTab('Portfolio')}
            // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          ><span>
            Portfolio
          </span>
          </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="btn">
          <a
            href="#contact-page"
            onClick={() => setCurrentTab('Contact')}
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          ><span>
            Contact
          </span>  
          </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="btn">
          <a
            href="#resume-page"
            onClick={() => setCurrentTab('Resume')}
            // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          ><span>
            Resume
          </span>  
          </a>
          </div>
        </li>
    </ul>
    </nav>

  );
}
export default Nav;

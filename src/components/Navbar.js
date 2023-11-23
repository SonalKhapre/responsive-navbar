import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <nav>
        <a href="index.html" className="brand">
        <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" fill="none" viewBox="0 0 40 40"><path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
        </a>

        <div className="title"><h3 className="animate-character">Yoliday</h3></div>

        <div className="menu" onClick={handleToggle}>

        {mobileOpen? (<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" name="CloseIcon"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>):(<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><title>Combined Shape@1.5x</title><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="02_Components/01_Global/Nav/Mobile/Transparent" transform="translate(-324.000000, -34.000000)" fill="#000000" fill-rule="nonzero"><g id="Header" transform="translate(24.000000, 18.000000)"><g id="Misc-/-BurgerMenu-/-Static" transform="translate(295.000000, 8.000000)"><g id="Icons-/-Functional-/-icon-burger-menu"><g><g transform="translate(16.000000, 16.000000) scale(-1, 1) translate(-16.000000, -16.000000) "><path d="M25.1559311,21.969498 C25.722291,21.969498 26.1805032,22.4236892 26.1805032,22.984749 C26.1805032,23.5458088 25.722291,24 25.1289615,24 L6.35817512,24 C5.79181519,24 5.33333333,23.5458088 5.33333333,22.984749 C5.33333333,22.4236892 5.79181519,21.969498 6.35817512,21.969498 L25.1559311,21.969498 Z M21.3093229,14.8722825 C21.7657797,14.8722825 22.1350751,15.3264738 22.1350751,15.8875335 C22.1350751,16.4485933 21.7657797,16.9027846 21.2875868,16.9027846 L6.15930286,16.9027846 C5.70284602,16.9027846 5.33333333,16.4485933 5.33333333,15.8875335 C5.33333333,15.3264738 5.70284602,14.8722825 6.15930286,14.8722825 L21.3093229,14.8722825 Z M25.1559311,8 C25.722291,8 26.1805032,8.45419125 26.1805032,9.01525102 C26.1805032,9.5763108 25.722291,10.030502 25.1289615,10.030502 L6.35817512,10.030502 C5.79181519,10.030502 5.33333333,9.5763108 5.33333333,9.01525102 C5.33333333,8.45419125 5.79181519,8 6.35817512,8 L25.1559311,8 Z"></path></g></g></g></g></g></g></g></svg> )}
        </div>
        
          <ul className={mobileOpen ? "open" : ""}>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Shop</a>
            </li>
            <li>
              <a href="index.html">Blog</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
          </ul>
        
      </nav>
    </>
  );
};

export default Navbar;

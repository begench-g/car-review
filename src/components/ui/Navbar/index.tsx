import React from "react";
import styles from "./style.module.scss";
import Search from "../Inputs/Search";
import NavbarLogo from "../Logos/NavbarLogo";
import Notifiations from "../Notifications/Notifiations";
import ProfileButton from "../Profile/ProfileButton";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavbarLogo />
        <Search />
      </div>
      <ul>
        <li> New Car Pricing</li>
        <li>Used Cars for Sale</li>
        <li>Appraise My Car</li>
        <li>Car Reviews</li>
        <li>
          <Notifiations />
        </li>
        <li>
          <ProfileButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

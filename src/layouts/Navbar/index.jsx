import React, { useState } from 'react'
import styles from './index.module.css'
import { Link } from 'react-scroll'
import { Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { Hero } from '../../components'

export default function Navbar() {

  const [menuVisible, setMenuVisible] = useState(false);
  const menuItems = ["food", "beverages", "desserts", "specials"]

  const handleHamburgerClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavClick = () => {
    setMenuVisible(false)
  };

  return (
    <>
      <nav id="navbar" className={styles["navbar"]}>
        <div className={styles["row"]}>
          <div className={styles["hamburger-icon"]} onClick={handleHamburgerClick}>
            <GiHamburgerMenu />
          </div>
          <ul className={`${styles["nav-list"]} ${menuVisible ? styles["visible"] : ""}`}>
            {menuItems.map((m, i) => (
              <li className={styles["nav-item"]} key={i}>
                <NewLink to={m} onClick={handleNavClick} className={styles["nav-btn"]} content={m} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Hero />
      <Outlet />
    </>
  )
}

function NewLink({ to, content, onClick}) {

  return (
    <Link to={to} spy={true} smooth={true} offset={-150} duration={500} onClick={onClick} className={styles["nav-btn"]}>
      <span >{content}</span>
    </Link>
  )
}
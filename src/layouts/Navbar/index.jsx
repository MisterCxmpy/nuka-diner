import React, { useState } from 'react'
import styles from './index.module.css'
import { Link } from 'react-scroll'
import { Outlet } from 'react-router-dom'
import { Hero } from '../../components'

export default function Navbar() {

  const menuItems = ["food", "beverages", "desserts", "specials"]


  return (
    <>
      <nav id="navbar" className={styles["navbar"]}>
        <div className={styles["row"]}>
          <ul className={`${styles["nav-list"]}`}>
            {menuItems.map((m, i) => (
              <li className={styles["nav-item"]} key={i}>
                <NewLink to={m}className={styles["nav-btn"]} content={m} />
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
    <Link to={to} spy={true} smooth={true} offset={-150} duration={500} className={styles["nav-btn"]}>
      <span >{content}</span>
    </Link>
  )
}
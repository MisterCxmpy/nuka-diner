import React from 'react'
import styles from './index.module.css'

export default function DessertSection({ dessert, fancy, extraFancy, extraContent }) {
  return (
    <section className={`${styles[dessert]} ${fancy ? styles["fancy"] : "null"} ${extraFancy ? styles["extra-fancy"] : ""}`}>
      <ul className={styles['menu-list']}>
        {dessert.map((d, i) => <DessertItem name={d.name} key={i} />)}
        {extraContent ? <li>{extraContent}</li> : null}
      </ul>
    </section>
  )
}

function DessertItem({ name }) {
  return (
    <li className={styles['menu-item']}>
      <span className={styles['name']}>{name}</span>
    </li>
  )
}
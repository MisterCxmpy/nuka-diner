import React from 'react'
import styles from './index.module.css'
import MenuItem from '../MenuItem'

export default function BeverageSection({ beverage, fancy, extraFancy, extraContent }) {
  return (
    <section className={`${styles[beverage]} ${fancy ? styles["fancy"] : "null"} ${extraFancy ? styles["extra-fancy"] : ""}`}>
      <ul className={styles['menu-list']}>
        {beverage.map((b, i) => <MenuItem name={b.name} price={b.price} desc={b.desc} key={i} />)}
        {extraContent ? <li>{extraContent}</li> : null}
      </ul>
    </section>
  )
}
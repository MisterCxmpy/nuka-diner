import React from 'react'
import styles from './index.module.css'
import MenuItem from '../MenuItem'

export default function FoodSection({ food, foodName, fancy, extraFancy, extraContent }) {
  return (
    <section className={`${styles[food]} ${fancy ? styles["fancy"] : null} ${extraFancy ? styles["extra-fancy"] : null}`}>
      <h3 className={styles['title']}>{foodName}</h3>
      <ul className={styles['menu-list']}>
        {food.map((s, i) => <MenuItem name={s.name} price={s.price} desc={s.desc} key={i} />)}
        {extraContent ? <li>{extraContent}</li> : null}
      </ul>
    </section>
  )
}
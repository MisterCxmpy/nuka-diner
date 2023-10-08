import React from 'react'
import styles from './index.module.css'

export default function MenuItem({ name, price, desc }) {
  return (
    <li className={styles['menu-item']}>
      <span className={styles['name']}>{name}</span>
      <span className={styles['price']}>{price} ¢</span>
      <span className={styles['desc']}>{desc}</span>
    </li>
  )
}
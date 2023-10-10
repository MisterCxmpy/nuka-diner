import React from 'react'
import styles from './index.module.css'
import { BeverageItems, FoodItems } from '../../components'

export default function Menu() {
  return (
    <section className={styles['menu']}>
      <FoodItems />
      <BeverageItems />
    </section>
  )
}
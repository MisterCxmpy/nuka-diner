import React from 'react'
import styles from './index.module.css'
import { BeverageItems, DessertItems, FoodItems } from '../../components'

export default function Menu() {
  return (
    <section className={styles['menu']}>
      <FoodItems />
      <BeverageItems />
      <DessertItems />
    </section>
  )
}
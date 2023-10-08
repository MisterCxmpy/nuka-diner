import React from 'react'
import styles from './index.module.css'
import { Appetizers, RandomItems } from '../../components'

export default function Menu() {
  return (
    <section className={styles['menu']}>
      <RandomItems />
      <Appetizers />
    </section>
  )
}
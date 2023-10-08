import React from 'react'
import styles from './index.module.css'
import { Caps } from '../../assets'

export default function Hero() {
  return (
    <header className={styles['header']}>
      <h1>Nuka Diner</h1>
      <p>Taste the Fallout: Nuka Diner,<br /> Where Flavor Meets the Apocalypse!</p>
      <small>
        ★ ★
      </small>
    </header>
  )
}
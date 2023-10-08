import React from 'react'
import styles from './index.module.css'

export default function RandomItems() {
  return (
    <div className='menu'>
      <div className={styles['menu-group']}>
        <section className={styles['intro']}>
          <h2>Welcome to Nuka Diner: A Culinary Adventure in the Wasteland</h2>
          <p>Nuka Diner, Where Every Dish Tells a Tale of Wasteland Ingenuity! Join Us on a Gastronomic Odyssey, Where Bold Flavors Meet Post-Apocalyptic Passion. Come Hungry, Leave Enchanted - It's More Than Just a Meal, It's an Experience!</p>
        </section>
      </div>
    </div>
  )
}
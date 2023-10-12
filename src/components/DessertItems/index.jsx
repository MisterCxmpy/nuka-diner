import React from 'react'
import styles from './index.module.css'
import FoodSection from '../FoodSection'
import menuData from '../../data/menuData.json';
import DessertSection from '../DessertSection';

export default function DessertItems() {
  const { desserts, cakes, candyBars, iceCreamStyles, iceCreamFlavours } = menuData.menuSection3

  return (
    <div className='menu' id='desserts'>
      <section className="wide">
        <h3 className={styles['heading']}>Desserts</h3>
      </section>
      <div className={styles['menu-group']}>
        <FoodSection food={desserts} foodName={"Generic Items"} fancy={false} extraFancy={false} />
        <FoodSection food={cakes} foodName={"Cakes"} fancy={true} extraFancy={false} />
      </div>
      <div className={styles['menu-group']}>
        <FoodSection food={candyBars} foodName={"Candy Bars"} fancy={true} extraFancy={false} />
        <FoodSection food={iceCreamStyles} foodName={"Ice Creams"} fancy={false} extraFancy={false} />
      </div>
      <section className={`wide ${styles['special']}`}>
        <h3 className={styles['heading']}>Ice Cream Flavours</h3>
        <div className={styles['menu-group']}>
          <DessertSection dessert={iceCreamFlavours} fancy={true} extraFancy={false} />
        </div>
      </section>
    </div>
  )
}
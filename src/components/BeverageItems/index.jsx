import React from 'react'
import styles from './index.module.css'
import FoodSection from '../FoodSection'
import menuData from "../../data/menuData.json"
import BeverageSection from '../BeverageSection'

export default function BeverageItems() {

  const { beverageDrinks, wines, softDrinks, beers, energyDrinks, luxuryDrinks } = menuData.menuSection2

  return (
    <div className='menu' id='beverages'>
      <section className="wide">
        <h3 className={styles['heading']}>Beverages</h3>
        <div className={styles['menu-group']}>
          <BeverageSection beverage={beverageDrinks} fancy={true} extraFancy={false} />
        </div>
      </section>
      <div className={styles['menu-group']}>
        <FoodSection food={wines} foodName={"Wines"} fancy={false} extraFancy={false} />
        <FoodSection food={beers} foodName={"Beers"} fancy={true} extraFancy={false} />
      </div>
      <div className={styles['menu-group']}>
        <FoodSection food={softDrinks} foodName={"Soft Drinks"} fancy={true} extraFancy={false} />
        <FoodSection food={energyDrinks} foodName={"Energy Drinks"} fancy={false} extraFancy={false} />
      </div>
      <section className="wide">
        <h3 className={styles['heading']}>Luxurious Drinks</h3>
        <div className={styles['menu-group']}>
          <BeverageSection beverage={luxuryDrinks} fancy={true} extraFancy={false} />
        </div>
      </section>
    </div>
  )
}
import React from 'react'
import styles from './index.module.css'
import FoodSection from '../FoodSection';
import menuData from '../../data/menuData.json';

export default function FoodItems() {

  const { breakfast, soups, ourFavoritesMenu, sandwiches, salads, pastaDishes, snacks, shareables, appetizers, mainCourses, brunch, kidsMenu, vegetarianDishes } = menuData.menuSection1

  return (
    <div className='menu' id='food'>
      <div className={styles['menu-group']}>
        <section className={styles['intro']}>
          <h2>Welcome to Nuka Diner: A Culinary Adventure in the Wasteland</h2>
          <p>Nuka Diner, Where Every Dish Tells a Tale of Wasteland Ingenuity! Join Us on a Gastronomic Odyssey, Where Bold Flavors Meet Post-Apocalyptic Passion. Come Hungry, Leave Enchanted - It's More Than Just a Meal, It's an Experience!</p>
        </section>
        <FoodSection food={breakfast} foodName={"Breakfast Items"} fancy={true} extraFancy={false} />
        <FoodSection food={sandwiches} foodName={"Sandwiches"} fancy={false} extraFancy={false} />
        <FoodSection food={pastaDishes} foodName={"Pasta Dishes"} fancy={true} extraFancy={false} />
        <FoodSection food={shareables} foodName={"Shareables"} fancy={false} extraFancy={false} />
        <FoodSection food={appetizers} foodName={"Appetizers"} fancy={true} extraFancy={false} />
        <FoodSection food={kidsMenu} foodName={"Kids' Menu"} fancy={false} extraFancy={false} />
        <FoodSection food={brunch} foodName={"Brunch"} fancy={true} extraFancy={false} />
      </div>
      <div className={styles['menu-group']}>
        <FoodSection food={soups} foodName={"Soups"} fancy={false} extraFancy={false} />
        <FoodSection food={ourFavoritesMenu} foodName={"Favourites"} fancy={false} extraFancy={true} extraContent={"Note: These items are not only rare but also meticulously crafted with the finest and scarcest ingredients found in the wasteland, making them a truly luxurious and indulgent dining experience for those lucky enough to secure a taste. Enjoy these delicacies at Nuka Diner, where culinary adventures meet the extraordinary!"} />
        <FoodSection food={salads} foodName={"Salads"} fancy={false} extraFancy={false} />
        <FoodSection food={snacks} foodName={"Snacks"} fancy={true} extraFancy={false} />
        <FoodSection food={mainCourses} foodName={"Main Courses"} fancy={true} extraFancy={false} />
        <FoodSection food={vegetarianDishes} foodName={"Vegetarian Dishes"} fancy={false} extraFancy={false} />
      </div>
    </div>
  )
}
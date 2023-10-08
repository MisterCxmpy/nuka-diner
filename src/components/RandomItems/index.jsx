import React from 'react'
import styles from './index.module.css'
import MenuItem from '../MenuItem'

export default function RandomItems() {

  const breakfast = [
    {
      name: "Mirelurk Benedict",
      price: 20,
      desc: "Poached mirelurk eggs served on a toasted wasteland muffin, topped with brahmin bacon and hollandaise sauce made from irradiated butter."
    },
    {
      name: "Nuka-Coffee Pancakes",
      price: 15,
      desc: "Fluffy pancakes made with Nuka-Cola, served with radroot syrup and a side of crispy radroach hash browns."
    }, 
    {
      name: "Wasteland Omelette",
      price: 18,
      desc: "A fluffy omelette filled with sautéed mutant mushrooms, radroach bacon, and grated wasteland cheese. Served with a slice of toasted wasteland bread."
    }, 
    {
      name: "Swamp Plant Smoothie Bowl",
      price: 14,
      desc: "A refreshing smoothie bowl made with blended swamp plant, wild tarberry, and mutant banana. Topped with crunchy radroach granola and fresh wasteland berries."
    }, 
  ]

  const soups = [
    {
      name: "Radstag Stew",
      price: 25,
      desc: "Hearty stew made with tender radstag meat, wild vegetables, and wasteland spices. Served with a slice of crusty wasteland bread."
    },
    {
      name: "Glowing Mirelurk Bisque",
      price: 30,
      desc: "Creamy bisque made from glowing mirelurk meat, mutant potatoes, and a hint of radiated cream. Garnished with sautéed swamp plant leaves."
    },
    {
      name: "Nuka-Noodle Soup",
      price: 20,
      desc: "Comforting noodle soup with Nuka-Cola infused broth, shredded radstag meat, and wild tarberry noodles. Topped with crispy cave fungus strips."
    }
  ];

  const ourFavoritesMenu = [
    {
      name: "Enclave Elixir",
      price: 100,
      desc: "A mysterious and rare cocktail rumored to be a favorite of the elusive Enclave members. Crafted with aged wasteland whiskey, secret Enclave herbs, and a splash of Nuka-Cola Quantum. Served in a specially designed glowing glass."
    },
    {
      name: "Vault 13 Prime Rib",
      price: 90,
      desc: "Exceptionally tender prime rib sourced from the legendary Vault 13 Brahmin. Slow-roasted with wasteland herbs and served with a side of Vault-Tec preserved vegetables and gravy."
    },
    {
      name: "Nuka-Cola Dark Chocolate Truffles",
      price: 75,
      desc: "Handcrafted dark chocolate truffles filled with a Nuka-Cola-infused ganache. Each truffle is delicately dusted with powdered mutant fruit for a unique and exquisite flavor. (Per Dozen)"
    },
    {
      name: "Glowing Radstag Steak",
      price: 110,
      desc: "A premium cut of radstag steak marinated in a rare glowing fungus sauce, giving it a subtle glow. Grilled to perfection and served with a side of brahmin milk mashed potatoes and sautéed wasteland greens."
    },
    {
      name: "Plasma-Infused Soufflé",
      price: 95,
      desc: "A decadent soufflé made with eggs from mutant birds and infused with plasma fruit essence. Baked to a fluffy perfection, it melts in your mouth and is served with a drizzle of caramelized honey mesquite."
    },
    {
      name: "Quantum Starcake",
      price: 80,
      desc: "An otherworldly dessert featuring layers of Quantum-flavored sponge cake, interlaced with glowing frosting. Topped with a sculpted Nuka-Cola Quantum star and a sprinkle of stardust sugar."
    }
  ];

  const sandwiches = [
    { name: "Mega Molerat Melt", price: 18, desc: "Grilled molerat meat with wasteland cheese, radroot, and glowing fungus on toasted bread." },
    { name: "Radroach Reuben", price: 20, desc: "Sliced radroach meat, sauerkraut, thousand island dressing on rye bread." },
    { name: "Wasteland BLT", price: 16, desc: "Radroach bacon, lettuce, mutant tomato, radroot aioli on toasted bread." },
    { name: "Deathclaw Club", price: 22, desc: "Grilled deathclaw meat, brahmin bacon, tarberry jam, mutant lettuce on triple-decker bread." }
  ]

  const salads = [
    { name: "Wasteland Cobb Salad", price: 22, desc: "Mixed greens, brahmin steak, radroot, wild tarberry, mutant egg, radroach bacon, ghoulberry vinaigrette." },
    { name: "Nuka-Caesar Salad", price: 18, desc: "Romaine lettuce, wasteland croutons, radtato, wasteland cheese, Caesar dressing." },
    { name: "Mutant Mushroom Salad", price: 20, desc: "Sautéed mutant mushrooms, glowing fungus, wild greens, wasteland herb vinaigrette, radroot seeds." }
  ]

  const pastaDishes = [
    { name: "Brahmin Bolognese", price: 25, desc: "Meat sauce with brahmin, radstag, radroach meat, wasteland spaghetti, mutant parmesan." },
    { name: "Mutant Mushroom Ravioli", price: 28, desc: "Ravioli with mutant mushrooms, ricotta, wasteland herbs, wild tarberry sauce, radscorpion tails." },
    { name: "Nuka-Pesto Pasta", price: 23, desc: "Pasta with wild basil pesto, radroot, mutant pine nuts, wasteland cheese." },
    { name: "Deathclaw Carbonara", price: 27, desc: "Pasta carbonara with brahmin bacon, mutant eggs, wasteland cheese, black pepper, radroot." },
    { name: "Radroach Primavera", price: 21, desc: "Wasteland spaghetti, sautéed radroach, roasted vegetables, garlic herb sauce, mutant parmesan." }
  ]

  return (
    <div className='menu'>
      <div className={styles['menu-group']}>
        <section className={styles['intro']}>
          <h2>Welcome to Nuka Diner: A Culinary Adventure in the Wasteland</h2>
          <p>Nuka Diner, Where Every Dish Tells a Tale of Wasteland Ingenuity! Join Us on a Gastronomic Odyssey, Where Bold Flavors Meet Post-Apocalyptic Passion. Come Hungry, Leave Enchanted - It's More Than Just a Meal, It's an Experience!</p>
        </section>
        <section className={styles['breakfast']}>
          <h3 className={styles['title']}>Breakfast Items</h3>
          <ul className={styles['menu-list']}>
            {breakfast.map((b, i) => <MenuItem name={b.name} price={b.price} desc={b.desc} key={i} />)}
          </ul>
        </section>
        <section className={styles['sandwiches']}>
          <h3 className={styles['title']}>Sandwiches</h3>
          <ul className={styles['menu-list']}>
            {sandwiches.map((s, i) => <MenuItem name={s.name} price={s.price} desc={s.desc} key={i} />)}
          </ul>
        </section>
        <section className={styles['pasta-dishes']}>
          <h3 className={styles['title']}>Pasta Dishes</h3>
          <ul className={styles['menu-list']}>
            {pastaDishes.map((p, i) => <MenuItem name={p.name} price={p.price} desc={p.desc} key={i} />)}
          </ul>
        </section>
      </div>
      <div className={styles['menu-group']}>
        <section className={styles['soups']}>
          <h3 className={styles['title']}>Soups</h3>
          <ul className={styles['menu-list']}>
            {soups.map((s, i) => <MenuItem name={s.name} price={s.price} desc={s.desc} key={i} />)}
          </ul>
        </section>
        <section className={styles['favourites']}>
          <h3 className={styles['title']}>Our Favourites</h3>
          <ul className={styles['menu-list']}>
            {ourFavoritesMenu.map((f, i) => <MenuItem name={f.name} price={f.price} desc={f.desc} key={i} />)}
            <li>
              <p>Note: These items are not only rare but also meticulously crafted with the finest and scarcest ingredients found in the wasteland, making them a truly luxurious and indulgent dining experience for those lucky enough to secure a taste. Enjoy these delicacies at Nuka Diner, where culinary adventures meet the extraordinary!</p>
            </li>
          </ul>
        </section>
        <section className={styles['salads']}>
          <h3 className={styles['title']}>Salads</h3>
          <ul className={styles['menu-list']}>
            {salads.map((s, i) => <MenuItem name={s.name} price={s.price} desc={s.desc} key={i} />)}
          </ul>
        </section>
      </div>
    </div>
  )
}
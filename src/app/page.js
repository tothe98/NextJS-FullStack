import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'
//src="https://images.pexels.com/photos/15495789/pexels-photo-15495789/free-photo-of-felhok-auto-jarmu-multidezo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Welcome to my website!</h1>
        <p className={styles.description}>This is a website made with Next.js and Tailwind CSS.</p>
        <Button url="portfolio" text="Click me!"/>
      </div>
      <div className={styles.item}>
        <Image width={500} height={500} src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}

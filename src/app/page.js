import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
//src="https://images.pexels.com/photos/15495789/pexels-photo-15495789/free-photo-of-felhok-auto-jarmu-multidezo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
export default function Home() {
  return (
    <div>
      <Image width={500} height={500} src={Hero} alt="" className={styles.img}/>
    </div>
  )
}

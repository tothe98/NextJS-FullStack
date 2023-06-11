import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17130141/pexels-photo-17130141/free-photo-of-ut-hajnal-tajkep-strand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Picture of the author"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17130141/pexels-photo-17130141/free-photo-of-ut-hajnal-tajkep-strand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Picture of the author"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog;

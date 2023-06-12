import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}


const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        return (
          <Link href="/blog/test" className={styles.container} key={item.id}>
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
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.body}</p>
            </div>
          </Link>)
      })}
    </div>
  )
}

export default Blog;

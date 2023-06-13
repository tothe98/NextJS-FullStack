import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: "no-store" });
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
          <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                alt="Picture of the author"
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.description}</p>
            </div>
          </Link>)
      })}
    </div>
  )
}

export default Blog;

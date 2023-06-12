import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}


const BlogPost = async ({ params }) => {

  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore placeat natus repellendus atque molestias eligendi velit molestiae omnis cum, dolores eveniet asperiores dolor suscipit. Consequatur illo ex recusandae ut.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/10106827/pexels-photo-10106827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>totherik</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17130141/pexels-photo-17130141/free-photo-of-ut-hajnal-tajkep-strand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi magnam labore velit, nesciunt illum illo, ut autem vero optio dolores exercitationem deleniti laborum. Deserunt nobis numquam voluptate impedit harum.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi magnam labore velit, nesciunt illum illo, ut autem vero optio dolores exercitationem deleniti laborum. Deserunt nobis numquam voluptate impedit harum.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi magnam labore velit, nesciunt illum illo, ut autem vero optio dolores exercitationem deleniti laborum. Deserunt nobis numquam voluptate impedit harum.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi magnam labore velit, nesciunt illum illo, ut autem vero optio dolores exercitationem deleniti laborum. Deserunt nobis numquam voluptate impedit harum.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi magnam labore velit, nesciunt illum illo, ut autem vero optio dolores exercitationem deleniti laborum. Deserunt nobis numquam voluptate impedit harum.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi magnam labore velit, nesciunt illum illo, ut autem vero optio dolores exercitationem deleniti laborum. Deserunt nobis numquam voluptate impedit harum.
        </p>
      </div>
    </div>
  )
}

export default BlogPost;

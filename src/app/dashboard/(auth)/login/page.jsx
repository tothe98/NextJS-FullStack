"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />
        <button className={styles.button}>Login</button>
      </form>

      <Link href="/dashboard/login">Login with an existing account</Link>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login
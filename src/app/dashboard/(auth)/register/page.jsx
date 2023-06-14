"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { set } from 'mongoose'

const Register = () => {
  const [error, setError] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      })
      res.status === 201 ? router.push('/dashboard/login?success=Account has been created') : setError(true)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="Username" required />
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />
        <button className={styles.button}>Register</button>
      </form>
      {error && <p className={styles.error}>Something went wrong!</p>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register
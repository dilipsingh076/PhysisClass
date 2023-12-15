import React from 'react'
import heroStyles from "@/app/ui/styles/herosection.module.css"
import styles from "@/app/ui/styles/common.module.css"
const Herosection = () => {
  return (
    <>
    <main className={heroStyles.main_section} >
    <div>
      <header className={styles.header}>
        <h1>Physics Classes for IIT JEE and NEET</h1>
      </header>

      <section className="section">
        <h2>About Us</h2>
        <p>
          Welcome to our Physics classes designed for IIT JEE and NEET
          preparation. Our experienced faculty is dedicated to providing
          high-quality education and guidance to help you excel in your exams.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Subjects Covered</h2>
        <p>
          Our classes cover a wide range of physics topics, including
          mechanics, electromagnetism, optics, thermodynamics, and more. We aim
          to build a strong foundation and ensure conceptual clarity.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Class Schedule</h2>
        <p>
          Check out our class schedule to plan your study routine effectively.
          We offer flexible timings to accommodate different needs and ensure
          that our students get the most out of their learning experience.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Physics Classes for IIT JEE and NEET</p>
      </footer>
    </div>
    </main>
    </>
  )
}

export default Herosection

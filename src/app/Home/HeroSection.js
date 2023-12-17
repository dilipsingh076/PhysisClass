import React from 'react'
import heroStyles from "@/app/ui/styles/herosection.module.css"
import styles from "@/app/ui/styles/common.module.css"
import Box from '@/components/atoms/box'
const Herosection = () => {
  return (
    <>
    <main className={heroStyles.main_section} >
    {/* <Box
       sx={{
        border: '1px solid red',
        width: "100%",
        bgcolor: "#dde9ff",
        color: "#2D2D2Dck",
        height:'30%'
        // clipPath: "ellipse(99% 100% at center bottom)",
      }}
      >
        Hello dear

      </Box> */}
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

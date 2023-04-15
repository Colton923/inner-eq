import Image from 'next/image'
import logo from 'public/logo.png'
import styles from './Navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={logo}
            alt="logo"
            width={405}
            height={141}
            className={styles.image}
          />
        </div>
        <div className={styles.wordsWrapper}>
          <h2 className={styles.words}>Empowering Balance Within</h2>
        </div>
      </div>
      <div className={styles.navigation}>
        <Link className={styles.navItem} href="/">
          Home
        </Link>

        <Link className={styles.navItem} href="/about">
          About
        </Link>

        <Link className={styles.navItem} href="/calendar">
          Calendar
        </Link>

        <Link className={styles.navItem} href="/products">
          Products & Services
        </Link>

        <Link className={styles.navItem} href="/resources">
          Resources
        </Link>
      </div>
    </>
  )
}

export default Navbar

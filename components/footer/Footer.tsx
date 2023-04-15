import styles from './Footer.module.scss'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <div className={styles.inline}>
            <span>
              The Harmon House Shoppes
              <Link
                className={styles.link}
                href="https://www.google.com/maps/place/Inner+Equinox/@38.3212932,-76.4585003,17z/data=!4m15!1m8!3m7!1s0x89b7627f0564029b:0xe678f4179438bd69!2s14560+Solomons+Island+Rd+S,+Solomons,+MD+20688!3b1!8m2!3d38.3212932!4d-76.4585003!16s%2Fg%2F11c0pvhdgw!3m5!1s0x89b7627fa62a23e7:0x640f0945dbc7dc94!8m2!3d38.321288!4d-76.458512!16s%2Fg%2F1vhq4llq"
              >
                14560 Solomons Island Rd.
              </Link>
            </span>
            <span>
              Email us at
              <Link
                className={styles.link}
                href="mailto:
          InnerEquinox@verizon.net
          "
              >
                InnerEquinox@verizon.net.
              </Link>
            </span>
            <span>
              Call us at
              <Link className={styles.link} href="tel:410-326-6586">
                410-326-6586.
              </Link>{' '}
            </span>
            <span>
              Check out our upcoming events and specials at our
              <Link
                className={styles.link}
                href="https://www.facebook.com/InnerEquinox"
              >
                facebook
              </Link>{' '}
              page.
            </span>
          </div>
        </div>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Hours</h3>
          <span>Monday: 10:00am - 6:00pm</span>
          <span>Tuesday: 10:00am - 6:00pm</span>
          <span>Wednesday: 10:00am - 6:00pm</span>
          <span>Thursday: 10:00am - 6:00pm</span>
          <span>Friday: 10:00am - 6:00pm</span>
          <span>Saturday: 10:00am - 6:00pm</span>
          <span>Sunday: 10:00am - 6:00pm</span>
        </div>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Services</h3>
          <span> Massage Therapy</span>
          <span>Reiki Energy</span>
          <span>Healing Chakra </span>
          <span>Balancing Crystal Healing</span>
          <span> Aromatherapy Reflexology Sound Healing</span>
        </div>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Products</h3>
          <span>Essential Oils </span>
          <span>Crystals</span>
          <span>Jewelry</span>
          <span>Incense</span>
          <span>Candles</span>
          <span>Books</span>
          <span>Cards</span>
          <span>Gifts</span>
        </div>
      </div>
    </div>
  )
}

export default Footer

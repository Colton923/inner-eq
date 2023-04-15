import styles from 'styles/App.module.scss'

export default function Calendar() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Calendar</h2>
      <p className={styles.missionText}>
        Please register for all events by emailing, or calling below. Classes are
        limited and reservations are required. Please include title of workshop in
        the subject line.
      </p>
      <div className={styles.calendar}>
        <div>
          <h3>
            We can put a google calendar here. So if you go to any Google Calendar,
            maybe make one specifically for your events when they come up, and we can
            link the calendar here, and have it auto-update.
          </h3>
        </div>
      </div>
    </div>
  )
}

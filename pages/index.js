import styles from '../styles.module.css'
import Link from 'next/link'

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Rewrites with Next.js</h1>
      <hr className={styles.hr} />
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/" locale="en">
              <a>Visit /</a>
            </Link>
          </li>
          <li>
            <Link href="/fr" locale="fr">
              <a>Visit /fr</a>
            </Link>
          </li>
          <li>
            <Link href="/about" locale="en">
              <a>Visit /about (try this one first)</a>
            </Link>
          </li>
          <li>
            <Link href="/fr/a-propos" locale="fr">
              <a>Visit /fr/a-propos</a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className={styles.hr} />
    </div>
  </div>
)

export default Index

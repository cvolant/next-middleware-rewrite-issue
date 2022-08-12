import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles.module.css'

const Code = (p) => <code className={styles.inlineCode} {...p} />

export const getStaticProps = () => {
  console.log('Log from pages/about, getStaticProps.')
  return ({ props: { fromGSSP: 'Hi!' } })
}

const aboutJsonPath = '/_next/data/development/fr/about.json'

export default function About({ fromGSSP }) {
  const { asPath, route, locale, reload } = useRouter()
  const [path, setPath] = useState()
  const [hasAboutMiddleware, setHasAboutMiddleware] = useState()

  // `asPath` is always `/about` in Node.js (server render), because the page is statically generated
  // so we wait for the browser to load, and use the updated `asPath`, which may be a path
  // other than `/about` when using a rewrite. This way we can avoid a content mismatch
  useEffect(() => setPath(asPath), [asPath])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const middlewareManifest = window.__DEV_MIDDLEWARE_MANIFEST || window.__MIDDLEWARE_MANIFEST || {}
      const location = middlewareManifest?.location
      setHasAboutMiddleware(location && aboutJsonPath.match(location) && !'!@#$%^'.match(location))
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Path: {path}</h1>
        <hr className={styles.hr} />
        <p>
          {' '}
          This page was rendered by <Code>{`pages${route}.js`}</Code>.
        </p>
        <p>"{fromGSSP}" from getStaticProps</p>
        {hasAboutMiddleware === undefined ? undefined : hasAboutMiddleware ? (
          <>
            {locale === 'en' && <p>On default locale, we received our static prop, no error in the console: all good. Check on non default locale:</p>}
            {fromGSSP && locale === 'fr' && (
              <p>When you arrive here using SSR, no problem! Now click on the link below to go to the same page using CSR.</p>
            )}
            {!fromGSSP && (
              <>
                <p>See? Nothing is returned from getStaticProps.</p>
                <p>Now, open the network tab of your browser dev tools, then click the "Visit /fr/a-propos" link: you will get the same result.</p>
                <p>Then check the network tab: you will see something as below for the about.json request.</p>
                <Code>
                  <br />
                  GET: http://localhost:3000{aboutJsonPath}<br />
                  &nbsp;&nbsp;Status: 307<br />
                  &nbsp;&nbsp;Response Headers:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Location: /fr/a-propos<br />
                </Code>
                <p>
                  From:
                  <Code>{aboutJsonPath}</Code>
                  {' '}
                  to:
                  <Code>/fr/a-propos</Code>?!?
                </p>
                <p>
                  Now try:
                </p>
                <p>
                  - either to
                  {' '}
                  <button onClick={reload}>reload</button>
                  , which will give you the SSR result;

                </p>
                <p>
                  - or to delete the '/about' matcher in middleware config.
                </p>
              </>
            )}
          </>
        ): (
          <p>Without an '/about' matcher in middleware config, no problem!</p>
        )}
        <p>
          <Link href="/fr/a-propos">Visit /fr/a-propos</Link>
        </p>
        <p>
          <Link href="/">&larr; Back home</Link>
        </p>
      </div>
    </div>
  )
}

import { Outlet } from 'react-router-dom'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'

import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main} role="main">
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

import React from 'react'
import styles from './index.module.css'
import Header from '../components/header'
import Aside from '../components/aside'
import Footer from '../components/footer'

function PageWrapper(props) {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <main className={styles.main}>
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
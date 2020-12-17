import React from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'

function ErrorPage() {
  return (
    <PageWrapper>
      <div className={styles.error}>
      <Title title="Something went wrong..." />
    </div>
    </PageWrapper>
  );
}
export default ErrorPage;
import React from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'
import SubmitButton from '../../components/button'
import Posts from '../../components/posts'


function ShareThoughtsPage() {
  return (
    <PageWrapper>
      <div className={styles.input}>
      <Title title="Share your thougths..." />
      <textarea></textarea>
      <SubmitButton title="Post"/>
      </div>
      <div>
        <h2>Last 3 posts on your wall</h2>
         <Posts length={3} />
      </div>
    </PageWrapper>
  );
}
export default ShareThoughtsPage;
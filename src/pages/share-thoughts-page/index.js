import React, { useState } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'
import SubmitButton from '../../components/button'
import Posts from '../../components/posts'
import getCookie from '../../utils/cookie'
import getOrigamis from '../../utils/origamis'

const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState('')
  const [updatedPosts, setUpdatedPosts] = useState([])

  const handleSubmit = async () => {
    const promise = await fetch('http://localhost:9999/api/origami', {
      method: 'POST',
      body: JSON.stringify({
        description: publication
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('x-auth-token')
      }
    })
    setPublication('') 
    const posts = await getOrigamis(3) 
    setUpdatedPosts(posts)
  }

  return (
    <PageWrapper>
      <div className={styles.input}>
        <Title title="Share your thougths..." />
        <textarea className={styles.textarea} value={publication} onChange={e => setPublication(e.target.value)} />
        <SubmitButton title="Post" onClick={handleSubmit} />
      </div>
      <div>
        <h2>Last 3 posts on your wall</h2>
        <Posts length={3} updatedPosts={updatedPosts}/>
      </div>
    </PageWrapper>
  )
}
export default ShareThoughtsPage;
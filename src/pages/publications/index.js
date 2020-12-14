import React from 'react'
import styles from './index.module.css'
import PageWrapper from '../../page-wrapper'
import Posts from '../../components/posts'
import Title from '../../components/title'

const Publications = () => {
        return (
          <PageWrapper>
                <Title title="Publications" />
               
                   <Posts/>
        
          </PageWrapper>
        )
}
export default Publications;

import React from 'react'
import PageWrapper from '../../page-wrapper'
import Posts from '../../components/posts'
import Title from '../../components/title'

const Publications = () => {
        return (
          <PageWrapper>
                <Title title="Publications" />
                <div>
                   <Posts/>
                </div>
            </PageWrapper>
        )
}
export default Publications;

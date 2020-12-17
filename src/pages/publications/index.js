import React, { Component } from 'react'
import PageWrapper from '../../page-wrapper'
import Posts from '../../components/posts'
import Title from '../../components/title'
import UserContext from '../../context'

class Publications extends Component {
  static contextType = UserContext

  render() {
    console.log(this.context)
    return (
      <PageWrapper>
        <Title title="Publications" />
        <Posts />
      </PageWrapper>
    )
  }
}
export default Publications;

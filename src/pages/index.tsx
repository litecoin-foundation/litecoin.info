import { Redirect } from '@docusaurus/router'
import React from 'react'

const index: React.FC = (props) => {
  return (
    <Redirect to="docs" />
  )
}

export default index
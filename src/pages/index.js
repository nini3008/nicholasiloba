import React, { Component } from "react"
import Layout from "../components/layout"

import Welcome from "../components/welcome"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Welcome />
      </Layout>
    )
  }
}

export default Index

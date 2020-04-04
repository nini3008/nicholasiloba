import React, { Component } from "react"
import Layout from "../components/layout"
import WorkPage from "../components/workContent"

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <WorkPage />
      </Layout>
    )
  }
}

export default Work

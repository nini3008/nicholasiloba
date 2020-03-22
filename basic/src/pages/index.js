import React, { Component } from "react"
import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Work from "../components/work"
import Contact from "../components/contact"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Welcome />
        <Work />
        <Contact />
      </Layout>
    )
  }
}

export default Index

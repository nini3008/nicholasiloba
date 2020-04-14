import React, { Component } from "react"
import Layout from "../components/layout"
import ContactPage from "../components/contact"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <ContactPage />
      </Layout>
    )
  }
}

export default Contact

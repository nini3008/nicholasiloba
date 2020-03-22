import React, { Component } from "react"
import Navigation from "../components/navigation.js"
import Work from "../components/work.js"
import Contact from "../components/contact.js"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Navigation />
        <Work />
        <Contact />
      </div>
    )
  }
}

export default Index

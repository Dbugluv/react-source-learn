
import React, { Component, Suspense, Fragment } from 'react';

export default class Child extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
  }

  componentDidMount() {
  }


  render() {
    const {imgSrc} = this.state;
      return (
          <React.Fragment>
            --------------------
          </React.Fragment>
      )
  }
}

import React, { Component, Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';
import img1 from './1.jpg'
import img2 from './2.jpg'
import Child from './Child'

export default class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          text: '测试内容',
          version: '1.0',
          imgSrc: img1,
      }
  }

  componentDidMount() {
      this.setState({text: '更新测试内容', version: '2.0',/*  imgSrc: img2 */})
  }

  renderText() {
      return (<span>dawfawfa</span>)
  }

  render() {
    const {imgSrc} = this.state;
      return (
          <div>
            <img src={imgSrc}/>
              <h1>React <span>源码解析{this.state.version}</span></h1>
              {/* {this.state.text}
              <p>
                作者：<span>{this.props.author}</span>
              </p> */}
              <Child/>
          </div>
      )
  }
}
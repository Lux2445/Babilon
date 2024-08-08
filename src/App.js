import React, { Component } from 'react'
import Second from './components/section/second-section';
import First from './components/section/first-section';
import Third from './components/section/third-section';
import Four from './components/section/four-section'
import Fife from './components/section/fife-section'
import Slide from './components/section/slide'
import './components/style/reset.css'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
      <First />
      <Second/>
      <Third />
      <Four />
      <Fife />
      </div>
    )
  }
}

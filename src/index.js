import React from 'react'
import ReactDOM from 'react-dom'
import desktop from './img/desktop1.jpg'
import './style.css'
import './style.less'

class App extends React.Component {
  state = {
    reset:true
  }

  onClick = () => {
    this.setState({
      reset:!this.state.reset
    })
  }

  render () {
    return (
      <div className="content">
        <img className="img" src={desktop} alt='玫瑰' />
        <img 
          className={this.state.reset?"img":"img img--rotate"} 
          src={desktop} 
          onClick={this.onClick} />
        <div className="flex">
          <div>aaa</div>
          <div>bbb</div>
          <div>ccc</div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"))
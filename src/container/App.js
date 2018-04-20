import React from 'react'
import desktop from '../img/desktop1.jpg'
import '../css/style.less'
import List from '../component/List'
class App extends React.Component {
  constructor(props) {
    //调用父类（React.Component）的构造函数
    super(props)
    this.state = {
      show:true,
      animating:false,
      list:["a","bb","ccc"]
    }
  }
  componentDidMount = ()=>{
    this.refs.ani.addEventListener("webkitAnimationEnd",()=>{
      this.setState({
        animating:false
      })
    })
  }
  onClick = () => {
    this.setState({
      show:!this.state.show,
      animating:true
    })
  }
  render () {
    return (
      <div className="content">
        <div className="wrapper1">
          <div className="flex">
            <div>
              <div className="img-frame">
                <img className="img" src={desktop} alt='图片' />
              </div>
            </div>
            <div>
              <div className="img-frame">
                <img 
                  ref="ani"
                  className={"img " + (this.state.show?"img-in":(this.state.animating?"img-out":"img-hide")) } 
                  src={desktop} 
                  onClick={this.onClick} />
              </div>
            </div>
            <div>
              <List list={this.state.list} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
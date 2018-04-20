import React from 'react'
import PropTypes from 'prop-types'
import style from "./style.less"
class List extends React.Component {
  render () {
    const { list } = this.props;
    return (
      <div className="list">
        <ul>
          {
            list.map((item,index)=>{
              return <li key={index}><i className="fa fa-angle-right"></i>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
List.propTypes = {
  list: PropTypes.array.isRequired
}

export default List
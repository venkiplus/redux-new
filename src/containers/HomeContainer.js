import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Counter } from '../components'
import { getData, sendData } from '../actions/datarequest'
import { connect } from 'react-redux'


class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.props.getData()
  }
  render() {
    if(this.props && this.props.params){
      return (
      <div>
        <table border='1'>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Writer</th>
          <th>IMDB Rating</th>
        </tr>
        <tr>
          <td>{this.props.params['Title']}</td>
          <td>{this.props.params['Year']}</td>
          <td>{this.props.params['Writer']}</td>
          <td>{this.props.params['imdbRating']}</td>
        </tr>
        </table>
        <select onChange={this.props.sendData}>
          <option value='india'>India</option>
          <option value='usa'>USA</option>
        </select>
      </div>
      )
    }else{
      return (
      <div>Loading data..</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    params: state.datarequest.params
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ getData: getData, sendData: sendData }, dispatch)
}
export default connect(mapStateToProps, mapDispatchtoProps)(HomeContainer)

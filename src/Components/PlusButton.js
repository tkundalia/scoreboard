import React, { Component } from 'react'
import PropTypes from 'prop-types'                  //----?? prop-types
import './PlusButton.css'

export default class PlusButton extends Component {
    static propTypes = {                            //----?? static---
       onPress: PropTypes.func.isRequired           //-----?? PropTypes p capital or small difference.
      }


    render() {
        console.log(this.props)
        return <button className="plus-button" onClick={this.props.onPress}>  +  </button>
    }

}









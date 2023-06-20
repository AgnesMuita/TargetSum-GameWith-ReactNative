import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from "prop-types"

export default class RandomNumber extends Component {
  static PropTypes = {
    number:PropTypes.number.isRequired, 
    id:PropTypes.number.isRequired, 
    isDisabled:PropTypes.bool.isRequired,
    onPress:PropTypes.func.isRequired,

  }

  handlePress=()=>{
    this.props.onPress(this.props.id)
    console.log(this.props.number)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
         <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>{this.props.number}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

  random:{
    backgroundColor:"purple",
    color:"white",
    width:100,
    marginHorizontal:15,
    marginVertical:25,
    fontSize:35,
    textAlign:"center"
  }, 
  disabled:{
    opacity:0.3,
  }
})
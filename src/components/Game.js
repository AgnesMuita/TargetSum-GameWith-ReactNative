import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PropTypes from "prop-types";


export default class Game extends Component {
  static PropTypes={
    randomNumberCount:PropTypes.number.isRequired,
  }
  // target = 10+ Math.floor(40* Math.random()) 
  randomNumbers = Array
    .from({length:this.props.randomNumberCount})
    .map(()=>1+ Math.floor(10* Math.random()))

  target = this.randomNumbers
    .slice(0,this.props.randomNumberCount-2)
    .reduce((acc, curr)=>acc+curr,0);
  render() {
    console.log(this.randomNumbers)
    console.log("randomnumbers")
    return (
      <View style={styles.container}>
          <Text style={styles.target}>{this.target}</Text>
          {this.randomNumbers.map((randomNumber, index)=>
            <Text key={index}>{randomNumber}</Text>
          )}
          <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop:30,
    
  },
  target:{
    textAlign:'center',
    backgroundColor:"#aaa",
    marginHorizontal:50,
    fontSize:40,
  }
});
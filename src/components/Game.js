import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import propTypes from "prop-types";
import RandomNumber from "./RandomNumber"


export default class Game extends Component {
  static propTypes={
    randomNumberCount:propTypes.number.isRequired,
  }
  state = {
    selectedNumbers:[],
  }
  randomNumbers = Array
    .from({length:this.props.randomNumberCount})
    .map(()=>1+ Math.floor(10* Math.random()))

  target = this.randomNumbers
    .slice(0,this.props.randomNumberCount-2)
    .reduce((acc, curr)=>acc+curr,0);

  isNumberSelected = (numberIndex)=>
  {
    return this.state.selectedNumbers.indexOf(numberIndex)>=0;
  }

  selectNumber=(numberIndex)=>{
    this.setState((prevState)=>({selectedNumbers:[...prevState.selectedNumbers, numberIndex],
    }));
  }
  gameStatus=()=>{
    const sumSelected = this.state.selectedNumbers.reduce((acc,curr)=>{
      return acc + this.randomNumbers[curr];
    },0)
    if(sumSelected < this.target){
      return 'PLAYING'
    }
    if(sumSelected == this.target)
    {
      return "WON"
    }
    if(sumSelected > this.target)
    {
      return 'LOST'
    }
  }
 
  render() {
    const gameStatus = this.gameStatus();
    return (
      <View style={styles.container}>
          <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
          <View style={styles.randomContainer}>
            {this.randomNumbers.map((randomNumber, index)=>
              <RandomNumber 
                style={styles.random} 
                key={index}
                id={index}
                number={randomNumber}
                isDisabled = {this.isNumberSelected(index)|| gameStatus!='PLAYING'}
                onPress={this.selectNumber}
              />
            )}
          </View>
          <StatusBar style="auto" />
          <Text>{gameStatus}</Text>
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
    color:"white",
    marginHorizontal:50,
    fontSize:40,
  },
  randomContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:"wrap",  
    justifyContent:'space-around'
  },
  STATUS_PLAYING:{
    backgroundColor:"#bbb",

  },
  STATUS_WON:{
    backgroundColor:"green",
  },
  STATUS_LOST:{
    backgroundColor:"red",

  }

});
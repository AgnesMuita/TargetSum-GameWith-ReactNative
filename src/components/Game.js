import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default class Game extends Component {
  target = 10+ Math.floor(40* Math.random())
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.target}>{this.target}</Text>
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
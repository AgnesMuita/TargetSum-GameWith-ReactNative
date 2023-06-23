import { StyleSheet, Text, View } from 'react-native';
import Game from "./src/components/Game"


export default function App() {
  return (
      <Game randomNumberCount={6} initialSeconds={10}/>
  );
}



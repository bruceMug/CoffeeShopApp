import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomIcon from './components/CustomIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open it up App.js to start working on your apps!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
    
  // },
});

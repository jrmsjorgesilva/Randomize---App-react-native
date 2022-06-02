import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const App = () => {

  const [random, setRandom] = useState(() => 0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <View>
        <Text style={styles.pannel}>{random}</Text>
        <TouchableOpacity onPress={() => setRandom(() => Math.floor(Math.random() * 10000))}>
          <Text style={styles.btn}>Gerar Numero</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pannel: {
    color: 'lime',
    fontSize: 120,
    fontWeight: 'bold',
    transition: 'all .3s ease',
  },
  btn: {
    alignSelf: 'center',
    fontSize: 32,
    minWidth: 280,
    width: '100%',
    height: '100%',
    backgroundColor: 'lime',
    borderRadius: '3px',
    color: 'white',
    padding: 30,
    boxShadow: 'rgba(0, 255, 1, .8) 4px 4px 5px',
    transition: 'all .3s ease',
  },
});

export default App;
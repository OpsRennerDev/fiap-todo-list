import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Home({navigation}) {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton text='Incrementar' onPress={()=> setCount(count + 1) }/>
        <CustomButton text='Decrementar' onPress={()=> setCount(count - 1)}/>
      </View>
      <View style={styles.footer}>
        <CustomButton text='Ir para detalhes' onPress={()=> navigation.navigate("Details")}/>
      </View>  
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4CAF50', 
    marginVertical: 20,
  },
  buttonContainer:{
    flexDirection: 'row',
    gap: 10,
  },
  footer:{
    position: 'absolute',
    bottom: 40,
  },
})
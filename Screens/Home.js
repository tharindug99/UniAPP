import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    padding:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    alignItems:'center',
    justifyContent:'center'
  }
})
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <Text>SplashScreen</Text>
      <Button title='Login' onPress={ () => navigation.navigate('Login')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    padding:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
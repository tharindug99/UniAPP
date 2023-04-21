import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Your login logic here
  };
  return (
    
    <ScrollView>
    <View>
      <View style={styles.container}>
      {/* <Text style={styles.introHeading}>Welcome Back !!</Text> */}

      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/Images/LoginImg.jpg')}
          style={styles.logo}
          resizeMode='center'/>
      </View>

      <View style={styles.formContainer}>
      {/* <Text style={styles.title}>Login</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      </View>
      
      <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.LoginBtn}
            onPress={ () => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      </View>
      
      
      </View>
    </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    paddingTop:'20%',
    backgroundColor:'white',
    height:'100%'
  },
  introHeading:{
    textAlign:'center',
    fontSize:20,
    paddingBottom:10
  },
  imgContainer:{
    borderColor:'black',
    borderRadius:10,
    backgroundColor:'blue'
  },
  title:{
    paddingBottom:10,
    fontSize:20,
    fontWeight:'600'
  },
  input: {
    height: 60,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 16,
    paddingHorizontal: 16,
    alignItems:'center'
  },
  formContainer:{
    paddingBottom:'8%',
    borderRadius:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 400,
    height: 350,
  },

  imgContainer:{
    // borderWidth:1,
    borderRadius:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    alignItems:'center',
    marginBottom:'40%'
  },
  button: {
    borderRadius: 20,
  },
  LoginBtn:{
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 70,
    borderRadius: 8,
    borderWidth:2,
    marginBottom:26
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  
})
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const About = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.GreetingsCard}>
        <Text style={styles.heading}>Welcome back Jonathan !!</Text>
      </View>

      <View style={styles.menuCard}>
        <Text style={styles.Menuheading}>Recently Viewed Courses</Text>

        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>

        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'/>
          </View>
          <Text style={styles.SubjectName}>Digital Innovation</Text>
        </View>

        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>

      </View>
      
    </View>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    backgroundColor:'transparent',
    height:'100%'
  },
  GreetingsCard:{
    margin:'2%',
    paddingTop:'1%',
    paddingBottom:'3%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  heading:{
    fontSize: 20,
    fontWeight:'900',
    backgroundColor:'white',
    padding:15,
    borderRadius:15,
  },
  menuCard:{
    backgroundColor:'white',
    
  },
  Menuheading:{
    fontSize: 20,
    
  },
  menuItemContainer:{
    backgroundColor:'grey',
    alignItems:'center',
    textAlign:'center',
    borderColor:'black',
    borderWidth:2,
  },
  ImgContainer:{
    backgroundColor:'white',
  },
  SubjectName:{
    textAlign:'center'
  }

  

})
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
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

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity> 
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity> 
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
          </View>
          <Text style={styles.SubjectName}>Digital Innovation</Text>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
          </View>
          <Text style={styles.SubjectName}>Digital Innovation</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        </ScrollView>
      </View>





      <View style={styles.menuCard}>
        <Text style={styles.Menuheading}>Semester I Courses</Text>
        
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity> 
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity> 
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
          </View>
          <Text style={styles.SubjectName}>Digital Innovation</Text>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
          </View>
          <Text style={styles.SubjectName}>Digital Innovation</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        </ScrollView>
      </View>







      <View style={styles.menuCard}>
        <Text style={styles.Menuheading}>Semester II Courses</Text>
        
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity> 
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity> 
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
          </View>
          <Text style={styles.SubjectName}>Digital Innovation</Text>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
          </View>
          <Text style={styles.SubjectName}>Digital Innovation</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuItemContainer}>
          <View style={styles.ImgContainer}>
            <Image 
            source={require('../assets/Images/SubjectIcons/Digital-Innovation.png')}
            resizeMode='center'
            style={styles.logo}/>
            <Text style={styles.SubjectName}>Digital Innovation</Text>
          </View>
        </View>
        </TouchableOpacity>

        </ScrollView>
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
    paddingBottom:30,
    marginVertical:10
  },
  Menuheading:{
    fontSize: 20,
    paddingLeft:15,
    paddingVertical:20
  },
  menuItemContainer:{
    backgroundColor:'white',
    alignItems:'center',
    textAlign:'center',
    borderColor:'black',
    borderWidth:1,
    padding:10,
    margin:10,
    borderRadius:10,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 4,}
  },
  ImgContainer:{
    backgroundColor:'white',
  },
  SubjectName:{
    textAlign:'center'
  },
  logo:{
   width: 100,
  height: 100, 
  }

  

})
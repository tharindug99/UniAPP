import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DS = () => {
  return (
    <View style={styles.container}>
      <Text>DS</Text>
    </View>
  )
}

export default DS

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
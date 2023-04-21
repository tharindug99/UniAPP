import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SE = () => {
  return (
    <View style={styles.container}>
      <Text>SE</Text>
    </View>
  )
}

export default SE

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
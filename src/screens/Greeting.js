import { View, Text, Pressable, StyleSheet, Image, } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const Greeting = ({ navigation }) => {
  const { name } = useSelector((state) => state.userAuth)
  return (
    <View style={styles.container} >
      <View>
        <Text style={styles.mainFont}> Hi!!<Text style={{ color: 'green' }}> {name} </Text> </Text>
        <Text style={styles.secondFont}> Let's make your life happier </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../images/Graphic.png')}
          style={{ width: 400, marginTop: 10 }}
          resizeMode='contain'
        />
      </View>
      <View>
        <Pressable style={styles.input} onPress={() => navigation.navigate('problems')}>
          <Text style={{ color: 'white', fontSize: 20, }}>Let's Begin</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Greeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  input: {
    height: 50,
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: '#31ac47',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center'
  },

  mainFont: {
    fontSize: 39,
    paddingTop:20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  secondFont: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 20,
  }
})  

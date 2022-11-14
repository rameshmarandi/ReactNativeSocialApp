import React,{useEffect} from 'react'
import {View, Text, SafeAreaView} from 'react-native'

const Splash = ({navigation}) => {
  console.log("Navigation", navigation)
    useEffect(() => {
      setTimeout(()=>{
        navigation.navigate('Login')
      },3000)
    }, [])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{
            fontSize: 30,
            color : "black",
            fontWeight:"800",
            letterSpacing:10
        }}>Firebase</Text>
        <Text style={{
            fontSize: 18,
            color : "red",
            fontWeight:"800",
            marginTop:"2%"
        }}>The Social App</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash

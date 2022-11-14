import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'

import * as PN from '../../Components/FirebaseToken'
import firestore from '@react-native-firebase/firestore'
const Registration = ({navigation}) => {
  let token
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    token = PN.requestUserPermission()
    console.log("Token", token)
  }, [])
  const SubmitFormData = () => {
    firestore()
      .collection('Users')
      .add({
        name,
        email,
        password,
        // token,
      })
      .then(() => {
        console.log('User added!')
        navigation.navigate("Login")
        setEmail('')
        setPassword('')
        setName('')
      })
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <KeyboardAvoidingView> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '800',
              paddingBottom: '10%',
            }}
          >
            THE SOCIAL APP
          </Text>
        </View>
        <TextInput
          placeholder='Enter your name'
          value={name}
          onChangeText={text => {
            setName(text)
          }}
          style={{
            borderWidth: 1,
            width: '90%',
            borderRadius: 10,
            paddingLeft: '5%',
          }}
        />
        <TextInput
          placeholder='Enter email'
          value={email}
          onChangeText={text => {
            setEmail(text)
          }}
          style={{
            borderWidth: 1,
            width: '90%',
            borderRadius: 10,
            paddingLeft: '5%',
            marginTop: '5%',
          }}
        />
        <TextInput
          placeholder='Enter password'
          value={password}
          onChangeText={text => {
            setPassword(text)
          }}
          style={{
            borderWidth: 1,
            width: '90%',
            borderRadius: 10,
            paddingLeft: '5%',
            marginVertical: '5%',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            SubmitFormData()
          }}
          style={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: '2.5%',
            borderRadius: 10,
            backgroundColor: 'orange',
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}
          style={{
            marginTop: '5%',
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: 'black',
              fontWeight: '500',
              textDecorationLine: 'underline',
              lineHeight: 24,
            }}
          >
            Already have an account ?
          </Text>
        </TouchableOpacity>
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  )
}

export default Registration

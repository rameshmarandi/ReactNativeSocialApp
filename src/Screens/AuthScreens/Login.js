import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'

import firestore from '@react-native-firebase/firestore'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const SubmitFormData = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          console.log(querySnapshot.docs[0]._data.email)
          if (
            querySnapshot.docs[0]._data.email == email &&
            querySnapshot.docs[0]._data.password == password
          ) {
            navigation.navigate('Home')
          }
        } else {
          alert('User not exist!')
        }
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
            // paddingTop: '50%',
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
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Registration')
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
            Don't have account ?
          </Text>
        </TouchableOpacity>
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  )
}

export default Login

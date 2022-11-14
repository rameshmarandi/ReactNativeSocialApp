import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native'

import ImagePicker from 'react-native-image-crop-picker'
import storage from '@react-native-firebase/storage'
import {utils} from '@react-native-firebase/app'

const Home = () => {
  const [imageData, setImageData] = useState(null)
  const [ImageURL, setImageDownload] = useState(null)

  const openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(async image => {
          setImageData(image.path)
        })
      } else {
        console.log('Camera permission denied')
      }
    } catch (err) {
      console.warn(err)
    }

    // console.log('Photo path', result)
  }

  const UploadImage = async () => {
    const reference = storage().ref(`${imageData}`)
    const pathToFile = imageData
    // uploads file
    await reference.putFile(pathToFile)
    const DownloadURL = await storage()
      .ref(imageData)
      .getDownloadURL()

    setImageDownload(DownloadURL)
    alert("Image Uploaded Successfully :)")
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {imageData !== null ? (
        <>
          <Image source={{uri: imageData}} style={{width: 200, height: 200}} />
          
        </>
      ) : null}
      {setImageDownload}
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            UploadImage()
          }}
          style={{
            paddingHorizontal: '30%',
            paddingVertical: '3%',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom:"10%"
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Upload Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            openCamera()
          }}
          style={{
            paddingHorizontal: '30%',
            paddingVertical: '3%',
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Open Camera
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

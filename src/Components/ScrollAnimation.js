import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React, {useState, useRef, useEffect} from 'react'

export default function ScrollAnimation () {
  const DATA = [
    1,
    2,
    3,
    223,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1231,
    3123,
    13112,
  ]

  const [chooseIndex, setChooseIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const RefSelectedIndex = useRef(null)

  useEffect(() => {
    RefSelectedIndex.current.scrollToIndex({
      index: selectedIndex,
      Animated: true,
    })
  }, [selectedIndex])
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <FlatList
          data={DATA}
          horizontal
          ref={RefSelectedIndex}
          initialScrollIndex={selectedIndex}
          containerStyle={{
            width: '100%',
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <>
                <View
                  style={{
                    margin: 10,
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: selectedIndex == index ? 'black' : 'white',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: selectedIndex == index ? 'white' : 'black',
                    }}
                  >
                    {index + 1}
                  </Text>
                </View>
              </>
            )
          }}
        />
        {/* Second flatlist */}
        <FlatList
          data={DATA}
          containerStyle={{
            width: '100%',
          }}
          onScroll={event => {
            const ind = event.nativeEvent.contentOffset.y / 50
            setSelectedIndex(ind.toFixed(0))
          }}
          renderItem={({item, index}) => {
            return (
              <>
                <View
                  // <TouchableOpacity
                  //   onPress={() => {
                  //     setSelectedIndex(index)
                  //   }}
                  style={{
                    margin: 10,
                    width: '90%',
                    height: 50,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    alignSelf: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    {index + 1}
                  </Text>
                </View>
                {/* </TouchableOpacity> */}
              </>
            )
          }}
        />
      </SafeAreaView>
    </>
  )
}

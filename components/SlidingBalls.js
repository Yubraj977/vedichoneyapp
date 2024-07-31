import { View, Text,Image } from 'react-native'
import React from 'react'

export default function SlidingBalls({image,text}) {

  return (
    <View className='bg-secondary mx-2 h-14 min-w-26  rounded-full flex-row items-center px-side'>
      <Image
        className='h-10 w-10 rounded-full'
        source={{
          uri: image
        }}
      />
      <Text className="text-white text-lg font-bold ml-4">{text}</Text>
      </View>
  )
}
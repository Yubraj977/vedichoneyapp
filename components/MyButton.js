import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function MyButton({title}) {
  return (
    <Pressable className='bg-slate-300 w-8 h-8 flex items-center justify-center  '>
      <Text className='text-black font-bold text-2xl text-center'>{title}</Text>
    </Pressable>
  )
}
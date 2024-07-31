import { View, Text,Button,Pressable } from 'react-native'
import React from 'react'

export default function AddToCartButton() {
  return (
   <Pressable className='bg-secondary py-6  rounded-full'>
    <Text className='text-white font-bold text-2xl text-center'>ADD TO CART</Text>
   </Pressable>
  )
}
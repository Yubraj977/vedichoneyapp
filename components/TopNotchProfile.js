import { View, Text,Image } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function TopNotchProfile() {
  return (
    <View className='flex flex-row justify-between w-full px-side mt-4'>
    <View>
      <FontAwesome name="pagelines" size={44} color="black" />
    </View>
    <Link href={'/profile'}>
    
        <View className='h-10 w-10 object-cover '>
      <Image source={{ uri: "https://images.unsplash.com/photo-1718900351979-3e00f88386a3?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
        className='h-full w-full rounded-full'
      />
    </View>
    </Link>

  </View>
  )
}
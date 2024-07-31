import { View, Text, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import MyButton from './MyButton';


export default function CartItem() {
  return (
    <View className='mt-3 flex flex-row justify-between '>
      <View className='w-1/3  '>
        <View className='h-36 w-28 object-cover '>
          <Image source={{ uri: "https://images.unsplash.com/photo-1718900351979-3e00f88386a3?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            className='h-full w-full rounded-md'
          />
        </View>
      </View>

      <View className='  w-[40%] '>
        <Text className='text-lg font-bold'>Honey Bee</Text>
        <Text className='text-lg opacity-75 text-slate-500 font-bold'>₹ 1299</Text>
        <View className='flex flex-row  gap-2 mt-2 '>
          <MyButton title='-' />
          <Text className=' m-1 mx-3'>1</Text>
          <MyButton title='+' />
        </View>
      </View>
      <View className='w-1/12  mt-1'>
        <MaterialIcons name="delete" size={24} color="#FD624B" />
      </View>
    </View>
  )
}
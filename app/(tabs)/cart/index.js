import { View, Text, Image,Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CartItem from '../../../components/CartItem';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function index() {
  const router = useRouter()
  const statusBarHeight = Constants.statusBarHeight;
  return (
    <View  style={{
      // marginTop: statusBarHeight
      }}>

      <View className='flex-row justify-between items-center border-b border-gray-300 px-4 py-1'>
        {/* My Top View */}
        <TouchableOpacity onPress={() => router.back()} className='text-xl font-bold '>
          <AntDesign name="left" size={24} color="#FD624B" className='' />
        </TouchableOpacity>
        <Text className='text-xl font-bold '> My Cart</Text>
        <Link href="/profile"> 
               <View className='h-10 w-10 object-cover '>
          <Image source={{ uri: "https://images.unsplash.com/photo-1718900351979-3e00f88386a3?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            className='h-full w-full rounded-full'
          />
        </View>
        </Link>
 
      </View>


<ScrollView className='  '>

      <View className='mt-top px-side'>

        <CartItem />
        <CartItem />
        <CartItem />
      </View>
      <View className='mt-top px-side py-4'>
        <View className='flex flex-row justify-between mt-3'>
          <Text className='text-xl font-bold opacity-40'>Total</Text>
          <Text className='text-xl font-bold opacity-40'>₹ 1299</Text>
        </View>
        <View className='flex flex-row justify-between mt-3'>
          <Text className='text-xl font-bold opacity-40'>Shipping</Text>
          <Text className='text-xl font-bold opacity-40'>₹ 0</Text>
        </View>
        <View className='flex flex-row justify-between mt-3 pt-4 border-t-rose-600 border-2 border-b-0 border-x-0'>
          <Text className='text-xl font-bold opacity-80 '>Grand Total</Text>
          <Text className='text-xl font-bold opacity-80'>₹ 1000</Text>
        </View>

      </View>

      <View className='mt-top px-side pb-20'>
        <Pressable className='bg-secondary py-4  rounded-xl'>
          <Text className='text-white font-bold text-2xl text-center'>Checkout</Text>
        </Pressable>
      </View>
      
      </ScrollView>

    </View>
  )
}
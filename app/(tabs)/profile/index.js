import { View, Text, ScrollView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import Constants from 'expo-constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { } from 'react-native-web';
import Fontisto from '@expo/vector-icons/Fontisto';
import { MaterialCommunityIcons } from '@expo/vector-icons';





export default function index() {
  const statusBarHeight = Constants.statusBarHeight;
  // const [items, setitems] = useState([
  //   {
  //     id: 1,
  //     name: "Orders",
  //     icon: "shopping-cart"
  //   },
  //   {
  //     id: 2,
  //     name: "Wishlist",
  //     icon: "hearto"
  //   },
  //   {
  //     id: 3,
  //     name: "Saved Cards",
  //     icon: "credit-card"
  //   },
  //   {
  //     id: 4,
  //     name: 'Invite Firends',
  //     icon: "sharealt"
  //   },
  //   {
  //     id: 5,
  //     name: "Shipping Aderess",
  //     icon: "location-pin"
  //   },
  //   {
  //     id: 6,
  //     name: "Settings",
  //     icon: "settings"
  //   },
  //   {
  //     id: 7,
  //     name: "Logout",
  //     icon: "logout"
  //   }
  // ])
  return (
    <View style={{ marginTop: statusBarHeight }} className='px-side'>

      {/* Top Profile view */}

      <View className=' flex  items-center bg-slate-200 rounded-lg relative'>
        <View className='h-40 w-40 object-cover '>
          <Image
            source={{ uri: "data:image/jpeg;base64,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" }}
            className='h-full w-full rounded-full'
          />
        </View>
        <Text className='text-xl font-bold '>Yubraj Khatri</Text>


        <View className='absolute top-2 right-4' >
          <AntDesign name="edit" size={24} color="black" />
        </View>


        <View className='flex flex-row  w-full justify-between px-20 '>
          <Text className='text-lg font-semibold '>Gold</Text>
          <Text className='text-lg font-semibold text-secondary'>1200 points</Text>
        </View>
      </View>

      {/* List of Import Navigation */}
      <ScrollView className='mt-top bg-slate-100 p-4 rounded-xl '>

        <View className='mt-10 flex flex-row  justify-between'>
          <Text className='text-lg font-bold '>My Orders</Text>
          <Entypo name="shopping-cart" size={24} color="black" />

        </View>

        <View className='mt-10 flex flex-row justify-between'>
          <Text className='text-lg font-bold '>My Favourites</Text>
          <AntDesign name="hearto" size={24} color="black" />

        </View>

        <View className='mt-10 flex flex-row justify-between'>
          <Text className='text-lg font-bold '>Invite Friends</Text>
          <FontAwesome5 name="user-friends" size={24} color="black" />

        </View>

        <View className='mt-10 flex flex-row justify-between'>
          <Text className='text-lg font-bold '>Shipping Info</Text>
          <Entypo name="location-pin" size={24} color="black" />

        </View>

        <View className='mt-10 flex flex-row justify-between'>
          <Text className='text-lg font-bold '>Account Settings</Text>
          <Fontisto name="player-settings" size={24} color="black" />

        </View>
        <View className='mt-10 flex flex-row justify-between'>
          <Text className='text-lg font-bold '>Logout</Text>
          <MaterialCommunityIcons name="logout" size={24} color="black" />

        </View>
      </ScrollView>
    </View>
  )
}
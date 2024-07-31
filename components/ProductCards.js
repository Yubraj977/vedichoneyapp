import { View, Image, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
export default function ProductCards({ image, name, price, items,id }) {
  
  return (

<Link href={`/home/productdetials?id=${id}/`} className='m-3 pb-2 '>

    <View className=" w-44   rounded-2xl  justify-start   border-red-500">
      
      <View className="image  h-64  w-full  bg-slate-300 rounded-lg">
        <Image
          className='h-full  object-cover w-full rounded-xl'
          source={{
            uri: image
          }}
        />
      </View>

      <Text className=' text- capitalize text-lg mt-2  w-full  font-bold '>{name}</Text>
      <Text className='font-bold    text-2xl text-secondary opacity-70 '> ₹ {price}</Text>
<Link href={'/cart'}>
Goto Cart
</Link>
   
      
    </View >
    </Link>
  )
}
import { View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
export default function TabsLayout() {
  return (
   <>
   <Tabs screenOptions={{
    headerShown:false,
    tabBarActiveTintColor: '#FD624B',
    tabBarStyle:{
        backgroundColor:'#161622',
        borderTopWidth:4,
        borderTopColor:'#232533'
    }
    }}>
    <Tabs.Screen name='home/index' options={{
        title:"Home",
        
        tabBarIcon:({color,focused})=> (
            <FontAwesome size={28} name="home" color={color} />
        )
        }}/>
        <Tabs.Screen name='home/productdetials/index' options={{href:null}}/>
         <Tabs.Screen name='cart/index' options={{
        title:"cart",
  
        tabBarIcon:({color,focused})=> (
            <FontAwesome size={28} name="shopping-cart" color={color} />
        )
        
        }}/>
    <Tabs.Screen name='profile/index' options={{
        title:"Profile",
      
        tabBarIcon:({color,focused})=> (
            <FontAwesome size={28} name="user" color={color} />
        )
        
        }}/>
        
   </Tabs>
   </>
  )
}
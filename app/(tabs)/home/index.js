import { ScrollView, View, Image, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SlidingBalls from '../../../components/SlidingBalls'
import { StatusBar } from 'expo-status-bar';
import ProductCards from '../../../components/ProductCards';
import { MasonryFlashList } from "@shopify/flash-list";
import { useEffect } from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import { Link } from 'expo-router';
import Constants from 'expo-constants';
import TopNotchProfile from '../../../components/TopNotchProfile'
import {BASE_URL} from '../../configs/baseurl';
console.log(BASE_URL)


export default function home() {
  const [products, setproducts] = useState()
  const [fetching, setfetching] = useState(false)
  const { apiUrl } = Constants.expoConfig.extra;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setfetching(true)
        const response = await fetch(`${BASE_URL}/product/allproducts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
          setfetching(false)
        }
        const data = await response.json();
        // console.log(data);
        setfetching(false)
        setproducts(data.products);
      } catch (error) {
        console.error('Fetch error:', error);
        setfetching(false)
      }
    };

    fetchData();
  }, []);
  const statusBarHeight = Constants.statusBarHeight;
  console.log(`status Bar hieght is ${statusBarHeight}`)
  const slidingData = [
    {
      id: 1,
      title: "Medecine",
      image: 'https://images.unsplash.com/photo-1550411294-098af68c8c2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
    , {
      id: 2,
      title: "Food",
      image: 'https://plus.unsplash.com/premium_photo-1691095182210-a1b3c46a31d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: "Health",
      image: 'https://images.unsplash.com/photo-1548365329-c628c7005461?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: "Cosmetics",
      image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ]


  return (
    <SafeAreaView style={{
      // marginTop: statusBarHeight
    }
      }>
      <ScrollView className=" bg-white  flex  " contentContainerStyle={styles.mainContainer} >

        {/* Profile Section view */}
        <View className='px-2 '>
        <TopNotchProfile />
        </View>

        <View className='px-2 mt-4'>
          <Text className="text-3xl font-bold   ">
            Match Your Taste
          </Text>
          <TextInput />

        </View>



        {/*  Sliding balls */}
        <View className="mx-2 mt-4 h-16  ">


          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: 'auto' }} >

            {
              slidingData.map((item) => {
                return <SlidingBalls key={item.id} image={item.image} text={item.title} />
              })
            }

          </ScrollView>
        </View>


        {/* Test view */}

        <View className>

        </View>



        {/* Fourth View */}
        <View className="h-full w-full mt-4">
          {
            fetching ?
              (
                <AnimatedLoader
                  visible={fetching}
                  overlayColor="rgba(255,255,255,0.75)"
                  animationStyle={styles.lottie}
                  speed={1}>
                  <Text>Loading Producs...</Text>
                </AnimatedLoader>
              ) :
              (
                <MasonryFlashList
                  data={products}
                  numColumns={2}
                  renderItem={({ item }) => <ProductCards image={item.image} name={item.name} price={item.price} items={item.items} id={item._id} />}
                  estimatedItemSize={200}
                />
              )
          }

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {

  },
  lottie: {
    width: 100,
    height: 100,
  },
})
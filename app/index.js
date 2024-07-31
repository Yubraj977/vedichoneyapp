import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { router } from 'expo-router';
import { Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import honey1 from '../assets/honey1.jpg';
import honey2 from '../assets/honey2.jpg';
import honey3 from '../assets/honey3.png';
import vedic from '../assets/vedic.png';
import honeymain from '../assets/honeymain.png';
import CustomButton from '../components/CustomButton';
import path from '../assets/path.png';

export default function App() {
  return (
    <SafeAreaView className="bg-first h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={vedic}
            className="w-[200px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={honeymain}
            className="max-w-[380px] w-full h-[298px] rounded-lg 600"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover New{"\n"}
              Taste with{" "}
              <Text className="text-secondary-200">VedicHoney</Text>
            </Text>

            <Image
              source={path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          {/* <CustomButton
            title="Login with Google"
            handlePress={()=>promptAsync()}
            containerStyles="w-full mt-7"
          /> */}
          <CustomButton
            title="Login"
            handlePress={() => router.push("/SignIn")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}


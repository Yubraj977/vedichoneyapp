import { View, Text } from 'react-native'
import React from 'react'
import vedic from '../../assets/vedic.png'
import { SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import { Link } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import { TextInput } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Navigator } from 'expo-router'
import { useNavigation } from 'expo-router'
import { router } from 'expo-router'

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-first h-full">
      <ScrollView>
        <View
          className="w-full flex  justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={vedic}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to VedicHoney
          </Text>


          <KeyboardAvoidingView>
            <View>      
         <Text className="text-lg text-gray-100 font-semibold mt-4">Email</Text>
              <TextInput
                //   style={
                //     { height: 40,
                //     margin: 12,
                //     borderWidth: 1,
                //     padding: 10,
                //   }
                // }
                className=" py-3 px-4 rounded-lg bg-slate-700 "

              />
            </View>


            <View>     
            <Text className="text-lg text-gray-100 font-semibold mt-4">Password</Text>
              <TextInput
                //   style={
                //     { height: 40,
                //     margin: 12,
                //     borderWidth: 1,
                //     padding: 10,
                //   }
                // }
                className=" py-3 px-4 rounded-lg bg-slate-700 "

              />
            </View>

          </KeyboardAvoidingView>



          <CustomButton
            title="Sign In"
            handlePress={()=>router.push('/home')}
            containerStyles="mt-7"
          // isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/SignUp"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  
  )
}
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView,Link } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
import AnimatedLoader from 'react-native-animated-loader';
import { Dimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import TopNotchProfile from '../../../../components/TopNotchProfile'
import AddToCartButton from '../../../../components/AddToCartButton';
import MyButton from '../../../../components/MyButton';
import {BASE_URL} from '../../../configs/baseurl';

const ProductDetailScreen = () => {
  const [product, setProduct] = useState(null);
  const [fetching, setFetching] = useState(false);
  const { apiUrl } = Constants.expoConfig.extra;
  const { width } = Dimensions.get('window');
  const params = useLocalSearchParams();
  const productId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetching(true);
        const response = await fetch(`${BASE_URL}/product/${productId}`);
        setFetching(false);
        if (!response.ok) {
          throw new Error('Network response was not ok');
          setFetching(false);
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error('Fetch error:', error);
        setFetching(false);
      } 
    };

    fetchData();
  }, [apiUrl, productId]);

  if (fetching || !product) {
    return (
      <View style={styles.loadingContainer}>
        <AnimatedLoader
          visible={fetching}
          overlayColor="rgba(255,255,255,0.75)"
          animationStyle={styles.loaderAnimation}
          speed={1}
        >
          <Text>Loading Products...</Text>
        </AnimatedLoader>
      </View>
    );
  }
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} className={`mt-[${statusBarHeight}]`}>
      <TopNotchProfile />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: product.image }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice} className=''>₹ {product.price}</Text>


          
        
       
          <AddToCartButton />
          <View style={styles.descriptionContainer}>
            <RenderHtml
              contentWidth={width}
              source={{ html: product.description }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderAnimation: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    height: 400, // Adjust height as per your design
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
  },
  detailsContainer: {
    marginTop: 10,
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FD624B',
    marginBottom: 10,
  },
  descriptionContainer: {
    // borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default ProductDetailScreen;

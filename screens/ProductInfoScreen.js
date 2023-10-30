import { addToCart } from '../reduxStore/ProductSlice';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductInfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();
  const height = (width * 100) / 100;
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  const cart = useSelector((state) => state.cart.cart);

  return (
    <ScrollView
      style={{ marginTop: 0, flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
    >

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: 'contain' }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            ></View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>
          {route?.params?.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 6 }}>
          ₦{route?.params?.price}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Text>Color: </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {route?.params?.color}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Text>Size: </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 5 }}>
          Total : ₦{route.params.price}
        </Text>
      </View>

      <Text style={{ color: 'green', marginHorizontal: 10, fontWeight: '500' }}>
        IN Stock
      </Text>

      <Pressable
        onPress={() => addItemToCart(route?.params?.item)}
        style={{
          backgroundColor: '#4b0082',
          color: 'white',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        {addedToCart ? (
          <View>
            <Text
              style={{
                color: 'white',
              }}
            >
              Added to Cart
            </Text>
          </View>
        ) : (
          <Text
            style={{
              color: 'white',
            }}
          >
            Add to Cart
          </Text>
        )}
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#4b0082',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
          }}
        >
          Buy Now
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});

import { addToCart } from '../reduxStore/ProductSlice';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
  const { width } = Dimensions.get('window');
  const height = (width * 100) / 100;
  const [addedToCart, setAddedToCart] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  const { item } = route.params;
  console.log(item);
  return (
    <>
      <ImageBackground
        style={{ width, height, marginTop: 2, resizeMode: 'contain' }}
        source={{ uri: item.image }}
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
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>{item.title}</Text>

        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 6 }}>
          ₦{item.price}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />

      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 5 }}>
          Total : ₦{item.price}
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
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});

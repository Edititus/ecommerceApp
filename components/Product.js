import { addToCart } from '../cart/ProductSlice';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Product = ({ item }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const dispatch = useDispatch();
    const addItemToCart = (item) => {
      setAddedToCart(true);
      dispatch(addToCart(item));
      setTimeout(() => {
        setAddedToCart(false);
      }, 60000);
    };
    return (
      <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
        <Image
          style={{ width: 150, height: 150, resizeMode: 'contain' }}
          source={{ uri: item?.image }}
        />
        <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
          {item?.title}
        </Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            ₦{item?.price}
          </Text>
          <Text style={{ color: '#8b0000', fontWeight: 'bold' }}>
            {item?.rating?.rate} ratings
          </Text>
        </View>
        <Pressable
          onPress={() => addItemToCart(item)}
          style={{
            backgroundColor: '#bdb76b',
            padding: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          {addedToCart ? (
            <View>
              <Text>Added to Cart</Text>
            </View>
          ) : (
            <Text>Add to Cart</Text>
          )}
        </Pressable>
      </Pressable>
    );
}

export default Product

const styles = StyleSheet.create({})
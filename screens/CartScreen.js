import { AntDesign } from '@expo/vector-icons';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../reduxStore/ProductSlice';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);

  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const finalTotal = total.toFixed(2);

  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  const navigation = useNavigation();
  return (
    <>
      <ScrollView
        style={{ marginTop: 55, flex: 1, backgroundColor: 'white' }}
        showsVerticalScrollIndicator={false}
      >

        <View style={{ marginHorizontal: 10 }}>
          {cart?.map((item, index) => (
            <View
              style={{
                backgroundColor: 'white',
                marginVertical: 10,
                borderBottomColor: '#F0F0F0',
                borderWidth: 2,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                borderRightWidth: 0,
              }}
              key={index}
            >
              <Pressable
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Image
                    style={{ width: 140, height: 140, resizeMode: 'contain' }}
                    source={{ uri: item?.image }}
                  />
                </View>

                <View>
                  <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
                    {item?.title}
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: 'bold', marginTop: 6 }}
                  >
                    ₦{item?.price}
                  </Text>
                  <Text style={{ color: 'green' }}>In Stock</Text>
                </View>
              </Pressable>

              <Pressable
                style={{
                  marginTop: 15,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 7,
                  }}
                >
                  {item?.quantity > 1 ? (
                    <Pressable
                      onPress={() => decreaseQuantity(item)}
                      style={{
                        backgroundColor: '#D8D8D8',
                        padding: 7,
                        borderTopLeftRadius: 6,
                        borderBottomLeftRadius: 6,
                      }}
                    >
                      <AntDesign name='minus' size={24} color='black' />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => deleteItem(item)}
                      style={{
                        backgroundColor: '#D8D8D8',
                        padding: 7,
                        borderTopLeftRadius: 6,
                        borderBottomLeftRadius: 6,
                      }}
                    >
                      <AntDesign name='delete' size={24} color='black' />
                    </Pressable>
                  )}

                  <Pressable
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 18,
                      paddingVertical: 6,
                    }}
                  >
                    <Text>{item?.quantity}</Text>
                  </Pressable>

                  <Pressable
                    onPress={() => increaseQuantity(item)}
                    style={{
                      backgroundColor: '#D8D8D8',
                      padding: 7,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                    }}
                  >
                    <Feather name='plus' size={24} color='black' />
                  </Pressable>
                </View>
                <Pressable
                  onPress={() => deleteItem(item)}
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 8,
                    paddingVertical: 10,
                    borderRadius: 5,
                    borderColor: '#C0C0C0',
                    borderWidth: 0.6,
                  }}
                >
                  <Text>Delete</Text>
                </Pressable>
              </Pressable>

              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 15,
                }}
              ></Pressable>
            </View>
          ))}
        </View>
        <View
          style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 18, fontWeight: '400' }}>Total : </Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> ₦{finalTotal}</Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Confirm')}
          style={{
            backgroundColor: '#FFC72C',
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Text>Proceed to Buy ({cart.length}) items</Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

export default CartScreen;

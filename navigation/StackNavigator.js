import { AntDesign } from '@expo/vector-icons';
import CartScreen from '../screens/CartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import React from 'react';
import { StyleSheet } from 'react-native';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: { color: '#4b0082' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name='home' size={24} color='#4b0082' />
              ) : (
                <AntDesign name='home' size={24} color='black' />
              ),
          }}
        />
        <Tab.Screen
          name='Cart'
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: { color: '#4b0082' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name='shoppingcart' size={24} color='#4b0082' />
              ) : (
                <AntDesign name='shoppingcart' size={24} color='black' />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Info'
          component={ProductInfoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

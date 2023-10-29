import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { Deals } from '../data/trendingDealsData';
import DropDownPicker from 'react-native-dropdown-picker';
import { ListData } from '../data/listData';
import ProductItem from '../components/Product';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Searchbar, Button, Menu, Divider, Provider } from 'react-native-paper';
import TrendingDeals from '../components/TrendingDeals';
import List from '../components/List';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [deals] = useState(Deals);
  const [list] = useState(ListData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log('error message:', error);
      }
    };
    fetchData();
  }, []);

  const [category, setCategory] = useState("men's clothing");
  const [items, setItems] = useState([
    { label: "Men's wear", value: "men's clothing" },
    { label: 'Jewelry', value: 'jewelery' },
    { label: 'Electronics', value: 'electronics' },
    { label: "Women's wear", value: "women's clothing" },
  ]);

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('default');
  const [visible, setVisible] = useState(false);

  // Function to sort the products based on sortType
  const sortProducts = () => {
    let sortedProducts = [...products];

    if (sortType === 'priceLowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'priceHighToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View>
            <Searchbar
              placeholder='Search'
              onChangeText={(query) => setSearchQuery(query)}
              value={searchQuery}
              Style={{
                textColor: 'black',
                backgroundColor: 'black', // Background color of the input field
                // You can add more styles here
              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Sort By: </Text>
              <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                  <Button onPress={() => setVisible(true)}>
                    {sortType === 'default'
                      ? 'Default'
                      : sortType === 'priceLowToHigh'
                      ? 'Price Low to High'
                      : sortType === 'priceHighToLow'
                      ? 'Price High to Low'
                      : 'Default'}
                  </Button>
                }
              >
                <Menu.Item
                  onPress={() => {
                    setSortType('default');
                    setVisible(false);
                  }}
                  title='Default'
                />
                <Divider />
                <Menu.Item
                  onPress={() => {
                    setSortType('priceLowToHigh');
                    setVisible(false);
                  }}
                  title='Price Low to High'
                />
                <Divider />
                <Menu.Item
                  onPress={() => {
                    setSortType('priceHighToLow');
                    setVisible(false);
                  }}
                  title='Price High to Low'
                />
              </Menu>
            </View>
          </View>

          <List list={list} />
          <Text
            style={{
              height: 0.5,
              borderColor: '#D0D0D0',
              borderWidth: 2,
              marginTop: 5,
            }}
          />
          <TrendingDeals deals={deals} />
          <Text
            style={{
              height: 1,
              borderColor: '#D0D0D0',
              borderWidth: 2,
              marginTop: 5,
              marginBottom: -25,
            }}
          />
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 80,
              width: '50%',
              marginBottom: open ? 50 : 15,
            }}
          >
            <DropDownPicker
              style={{
                borderColor: '#B7B7B7',
                height: 30,
                marginBottom: open ? 120 : 15,
              }}
              open={open}
              value={category} //genderValue
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder='choose category'
              onOpen={onGenderOpen}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {sortProducts()
              .filter((item) => item.category === category)
              .map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default HomeScreen;

import axios from 'axios';
import { Deals } from '../data/trendingDealsData';
import DropDownPicker from 'react-native-dropdown-picker';
import { ListData } from '../data/listData';
import ProductItem from '../components/Product';
import React, { useState, useEffect, useCallback } from 'react';
import { Searchbar, Button, Menu, Divider, Provider } from 'react-native-paper';
import { Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import TrendingDeals from '../components/TrendingDeals';
import List from '../components/List';

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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // Function to sort the products based on sortType
  const sortProducts = () => {
    let sortedProducts = [...products];

    if (sortType === 'priceLowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'priceHighToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    // Calculate the starting and ending indexes of the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Return only the products for the current page
    return sortedProducts;
  };

  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
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
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ marginLeft:10 }}>Sort By: </Text>
              <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                  <Button onPress={() => setVisible(true)}>
                    {sortType === 'default'
                      ? 'All'
                      : sortType === 'priceLowToHigh'
                      ? 'Price: Lowest to Highest'
                      : sortType === 'priceHighToLow'
                      ? 'Price: Highest to Lowest'
                      : 'All'}
                  </Button>
                }
              >
                <Menu.Item
                  onPress={() => {
                    setSortType('default');
                    setVisible(false);
                  }}
                  title='All'
                />
                <Divider />
                <Menu.Item
                  onPress={() => {
                    setSortType('priceLowToHigh');
                    setVisible(false);
                  }}
                  title='Price: Lowest to Highest'
                />
                <Divider />
                <Menu.Item
                  onPress={() => {
                    setSortType('priceHighToLow');
                    setVisible(false);
                  }}
                  title='Price: Highest to Lowest'
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
            }}
          >
            {sortProducts()
              .filter((item) => item.category === category)
              .map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
          </View>

          {/* < ================== Pagination ==========> */}
          {/* <FlatList
              data={sortProducts().filter((item) => item.category === category)}
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={({ item, index }) => (
                <ProductItem item={item} key={index} />
              )}
            />
          </View>
         {sortProducts().length > currentPage * itemsPerPage && (
            <Button title='Load More' onPress={loadMoreItems} />
          )} */}
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default HomeScreen;

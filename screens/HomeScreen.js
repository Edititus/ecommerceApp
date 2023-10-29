import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
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
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const list = [
    {
      id: '0',
      image:
        'https://gibadi.com/cdn/shop/products/image_1024_750x810.jpg?v=1661251356',
      name: 'Hand Gloves',
    },
    {
      id: '1',
      image:
        'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg',
      name: 'Deals',
    },
    {
      id: '2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYkxTQYmwffuFeC0qx53qG5INVvMRvrBujg&usqp=CAU',
      name: 'Safety Boots',
    },
    {
      id: '3',
      image: 'https://4.imimg.com/data4/AA/CN/MY-14944356/ear-muff.gif',
      name: 'Safety Boots',
    },
    {
      id: '4',
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/A751BKR.jpg',
      name: 'Cold Gloves',
    },
  ];

  const deals = [
    {
      id: '1',
      title: 'Insulated Jacket',
      oldPrice: 'N25,000',
      price: ' N19,000',
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/CD874MGR.jpg',
      color: 'Grey',
      size: 'S-XXL',
    },
    {
      id: '2',
      title: 'Boots',
      oldPrice: 'N30,000',
      price: ' N15,000',
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/FV02BGY.jpg',
      color: 'Black',
      size: '8-10',
    },
    {
      id: '3',
      title: 'Yellow-Reflective Hoodie ',
      oldPrice: 'N12,999',
      price: 'N10,999',
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/DX482YBR.jpg',
      color: 'Reflective',
      size: 'S-XXL',
    },
    {
      id: '4',
      title: 'Wrist Support Strap',
      oldPrice: 'N15000',
      price: ' N10,000',
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/PW83BKR.jpg',
      color: 'Black',
      size: '6-8',
    },
  ];

  const offers = [
    {
      id: '0',
      title: 'Executive Brogue',
      offer: '72% off',
      oldPrice: 7500,
      price: 4500,
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/FW46BKR.jpg',
      color: 'Black',
      size: '40-44',
    },
    {
      id: '1',
      title: 'Bump Cap',
      offer: '40% off',
      oldPrice: 7955,
      price: 3495,
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/PW89NAR.jpg',
      color: 'black',
      size: 'Normal',
    },
    {
      id: '2',
      title: 'Rucksack',
      offer: '40% off',
      oldPrice: 7955,
      price: 3495,
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/B955YER.jpg',
      color: 'yellow',
      size: 'Normal',
    },
    {
      id: '3',
      title: 'Cold Gloves',
      offer: '40% off',
      oldPrice: 24999,
      price: 19999,
      image: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/A751BKR.jpg',
      color: 'Black',
      size: '6-9',
    },
  ];
  const navigation = useNavigation();

  const [category, setCategory] = useState("men's clothing");
  const [items, setItems] = useState([
    { label: "Men's wear", value: "men's clothing" },
    { label: 'Jewelry', value: 'jewelery' },
    { label: 'Electronics', value: 'electronics' },
    { label: "Women's wear", value: "women's clothing" },
  ]);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

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

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === 'android' ? 40 : 0,
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <ScrollView>
          <View
            style={{
              backgroundColor: '#faebd7',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 7,
                gap: 10,
                backgroundColor: 'white',
                borderRadius: 3,
                height: 38,
                flex: 1,
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name='search1'
                size={22}
                color='black'
              />
              <TextInput placeholder='Search products' />
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Pressable
                key={index}
                style={{
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{ width: 50, height: 50, resizeMode: 'contain' }}
                  source={{ uri: item.image }}
                />

                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: 5,
                  }}
                >
                  {item?.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold' }}>
            Trending Deals of the week
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {deals.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.navigate('Info', {
                    id: item.id,
                    title: item.title,
                    price: item?.price,
                    carouselImages: item.carouselImages,
                    color: item?.color,
                    size: item?.size,
                    oldPrice: item?.oldPrice,
                    item: item,
                  })
                }
                style={{
                  marginVertical: 10,
                  alignItems: 'center',
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                <Image
                  style={{ width: 180, height: 130, resizeMode: 'contain' }}
                  source={{ uri: item?.image }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 9,
                    fontWeight: '500',
                    marginTop: 5,
                  }}
                >
                  Title: {item?.title}
                  {'\n'}
                  Color: {item?.color} {'\n'}
                  Size: {item?.size} {'\n'}
                  <Text
                    style={{
                      textDecorationLine: 'line-through',
                      color: 'red',
                    }}
                  >
                    Old Price: {item?.oldPrice} {'\n'}
                  </Text>
                  Price: {item?.price}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text
            style={{
              height: 1,
              borderColor: '#D0D0D0',
              borderWidth: 2,
              marginTop: 15,
            }}
          />

          <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold' }}>
            Today's Deals
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.navigate('Info', {
                    id: item.id,
                    title: item.title,
                    price: item?.price,
                    carouselImages: item.carouselImages,
                    color: item?.color,
                    size: item?.size,
                    oldPrice: item?.oldPrice,
                    item: item,
                  })
                }
                style={{
                  marginVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: 'contain' }}
                  source={{ uri: item?.image }}
                />

                <View
                  style={{
                    backgroundColor: '#E31837',
                    paddingVertical: 5,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}
                  >
                    Upto {item?.offer}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>

          <View
            style={{
              marginHorizontal: 10,
              marginTop: 20,
              width: '45%',
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
              //   placeholderStyle={styles.placeholderStyles}
              onOpen={onGenderOpen}
              // onChangeValue={onChange}
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
            {products
              .filter((item) => item.category === category)
              .map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({
//   itemText: {
//     textAlign: 'center',
//     fontSize: 9,
//     marginVertical: 5,
//     fontWeight: '700',
//   },
//   itemColor: {
//     textAlign: 'center',
//     fontSize: 9,
//     marginVertical: 5,
//     fontWeight: '700',
//       textDecorationLine: 'line-through',
//     color:'red'
//   },
// });
{
  /* <Text style={styles.itemText}>{item?.title}</Text>
                  <Text style={styles.itemText}>{item?.color}</Text>
                  <Text style={styles.itemText}>Size: {item?.size}</Text>
                  <Text style={styles.itemColor}>Before: {item?.oldPrice}</Text>
                  <Text style={styles.itemText}>Now: {item?.price}</Text> */
}

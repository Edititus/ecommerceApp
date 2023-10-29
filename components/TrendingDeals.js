import React from 'react';
import { Text, ScrollView, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrendingDeals = ({ deals }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold' }}>
        Trending Deals of the week
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {deals.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              navigation.navigate('Info', {
                id: item.id,
                title: item.title,
                price: item.price,
                carouselImages: item.carouselImages,
                color: item.color,
                size: item.size,
                oldPrice: item.oldPrice,
                item: item,
              })
            }
          >
            <Image
              style={{ width: 140, height: 130, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text
              style={{
                marginVertical: 10,
                alignItems: 'center',
                fontSize: 10,
                margin: 5,
                flexWrap: 'wrap',
              }}
            >
              Title: {item.title}
              {'\n'}
              Color: {item.color} {'\n'}
              Size: {item.size} {'\n'}
              <Text
                style={{ textDecorationLine: 'line-through', color: 'red' }}
              >
                Old Price: {item.oldPrice} {'\n'}
              </Text>
              Price: {item.price}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingDeals;

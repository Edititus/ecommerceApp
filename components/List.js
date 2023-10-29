import React from 'react';
import { StyleSheet, Text, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const List = ({ list }) => {
  return (
    <>
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
    </>
  );
};

export default List;

const styles = StyleSheet.create({});

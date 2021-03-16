import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default ({items}) => (
    <FlatList 
    data={items}
    renderItem={itemData => (
        <View style={styles.item}>
        <Text>{itemData.item.value}</Text>
        </View>
    )}
    />) 

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 3,
    backgroundColor: '#ccc'
  }
});
2
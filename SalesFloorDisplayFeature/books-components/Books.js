import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Softcover } from './Softcover';
import { Hardcover } from './Hardcover';
import { Childrens } from './Childrens'

const styles=StyleSheet.create({
  itemContainer:{
    marginBottom: 55,
  },
})

export const Books = () => {
 
  return (
    <View>
      <View style={styles.itemContainer}>
        <Softcover/>
      </View>
      
      <View style={styles.itemContainer}>
        <Hardcover/>
      </View>

      <View style={styles.itemContainer}>
        <Childrens/>
      </View>

    </View>
  );
};
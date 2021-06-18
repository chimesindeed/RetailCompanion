import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Albums } from './Albums'
import { Cds } from './Cds'
import { Dvds } from './Dvds'
import { Sets } from './Sets'
import { Tapes } from './Tapes'

const styles=StyleSheet.create({
  itemContainer:{
    marginBottom: 37,
  },
})
export const Media = () => {
 
  return (
    <View>
      <View style={styles.itemContainer}>
        <Tapes/>
      </View>
      <View style={styles.itemContainer}>
        <Albums/>
      </View>
      <View style={styles.itemContainer}>
        <Cds/>
      </View>
      <View style={styles.itemContainer}>
        <Dvds/>
      </View>
      <View style={styles.itemContainer}>
        <Sets/>
      </View>
    </View>
  );
};
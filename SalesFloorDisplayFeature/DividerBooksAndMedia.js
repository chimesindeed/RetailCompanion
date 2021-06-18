import React from 'react'
import { View, StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  
  booksAndMediaDivider: {
    backgroundColor: 'pink',
    width: 1,
    height: 166,
  },

})

export const DividerBooksAndMedia = () => {
  return <View style={styles.booksAndMediaDivider} />;
};
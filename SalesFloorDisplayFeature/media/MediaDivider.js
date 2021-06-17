import React from 'react'
import { View, StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  mediaDivider: {
    backgroundColor: 'beige',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 43,
    width: 1,
    height: 200,
  },

})

export const MediaDivider = () => {
  return <View style={styles.mediaDivider} />;
};
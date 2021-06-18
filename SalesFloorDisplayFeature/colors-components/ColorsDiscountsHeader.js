import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  colorsDiscountsHeader: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 18,
    marginTop: 45,
    marginLeft: 5,
    letterSpacing: 2,
    color: 'tan'
  },

 
})

export const ColorsDiscountsHeader = () => {
  
  const discountedItems = 'CLOTHING / HANDBAGS';
  
  return (
    <View>
      <Text style={styles.colorsDiscountsHeader}>{`${discountedItems}`}</Text>
    </View>
  );
};
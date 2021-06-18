import React from 'react'
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  PricingAndDiscountsHeader: {
    marginLeft: 330,
    marginBottom: 30,
    fontSize: 33,
    letterSpacing: 1,
    fontWeight: '700',
  },
 
});

export const PricingAndDiscountsHeader = () => {
  return (
    <Text style={styles.PricingAndDiscountsHeader}>Pricing & Discounts</Text>
  );
};

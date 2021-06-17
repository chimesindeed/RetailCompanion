import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { PricingAndDiscountsHeader } from './PricingAndDiscountsHeader';
import {PricingAndDiscounts} from './PricingAndDiscounts'

const styles = StyleSheet.create({
  
  pricingAndDiscountsContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    
    marginTop: -200,
    marginBottom: 18,
    marginLeft: 10,  
  },
})

export const PricingAndDiscountsContainer = () =>{
  return (
    <View style={styles.pricingAndDiscountsContainer}>
      <PricingAndDiscountsHeader/>
      <PricingAndDiscounts/>
    </View>
  )
}
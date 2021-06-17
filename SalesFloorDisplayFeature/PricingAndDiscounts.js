import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Colors} from './ColorComponents/Colors';
import {Media, LineDivider} from './Media';
import {BooksContainer} from './books/BooksContainer'

const styles = StyleSheet.create({
  
  pricingAndDiscountsContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    
    marginTop: -200,
    marginBottom: 18,
    marginLeft: 10,  
  },

  PricingAndDiscountsHeader: {
    marginLeft: 330,
    marginBottom: 30,
    fontSize: 33,
    letterSpacing: 1,
    fontWeight: '700',
  },
  pricingAndDiscountsBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 600,
  },
  
  colorsView: {
    width: 450,
    height: 300,
    marginRight: 7,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',
  
    backgroundColor: '#778899',
  },
  booksAndMediaView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 500,
    height: 300,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',

    
    backgroundColor: '#778899',
  },
  
});

const PricingAndDiscountsHeader = () => {
  return (
    <View>
      <Text style={styles.PricingAndDiscountsHeader}>Pricing & Discounts</Text>
    </View>
  );
};

export const PricingAndDiscounts = () => {
  const handleNotes = () => {};
  return (
    <View style = {styles.pricingAndDiscountsContainer}>
      <PricingAndDiscountsHeader />
      
      <View style={styles.pricingAndDiscountsBody}>
      
        <View style={styles.colorsView}>
          <Colors />
        </View>

        <View style={styles.booksAndMediaView}>
          <BooksContainer/>
          <LineDivider/>
          <Media />
        </View>
      </View>
    </View>
  );
};

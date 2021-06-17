import React from 'react'
import {View, StyleSheet} from 'react-native';
import {ColorsDiscountsContainer} from '../ColorComponents/ColorsDiscountsContainer';
import {BooksContainer} from '../books/BooksContainer'
import {MediaContainer} from '../media/MediaContainer'

const styles = StyleSheet.create({
  
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


export const PricingAndDiscounts = () => {
  return (
    <View style={styles.pricingAndDiscountsBody}>
    
      <View style={styles.colorsView}>
        <ColorsDiscountsContainer/>
      </View>

      <View style={styles.booksAndMediaView}>
        <BooksContainer/>
        <MediaContainer/>
      </View>
    </View>
  );
};

import React from 'react'
import {View, StyleSheet} from 'react-native';
import {ColorsDiscountsContainer} from '../colors-components/ColorsDiscountsContainer';
import {BooksContainer} from '../books-components/BooksContainer'
import { DividerBooksAndMedia } from '../DividerBooksAndMedia'
import {MediaContainer} from '../media-components/MediaContainer'

const styles = StyleSheet.create({
  
  pricingAndDiscountsBody: {
    flexDirection: 'row',

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
    flexDirection: 'row',
    width: 500,
    height: 300,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',    
    backgroundColor: '#778899',
  },

  booksAlignment: {
    flex: .5,
    alignItems: 'flex-start',
    marginLeft: 45,
  },
  dividerAlignment: {
    alignItems: 'center',
    marginTop: 87,
    marginLeft: 105,
    marginRight: 57,
  },
  mediaAlignment: {
    flex: .5,
    alignItems: 'flex-end',
    marginRight: 115,
    
  },
  
  
});


export const PricingAndDiscounts = () => {
  return (
    <View style={styles.pricingAndDiscountsBody}>
      <View style={styles.colorsView}>

        <ColorsDiscountsContainer/>
      
      </View>

      <View style={styles.booksAndMediaView}>
        <View style={styles.booksAlignment}>
          <BooksContainer/>
        </View>

        <View style={styles.dividerAlignment}>
          <DividerBooksAndMedia/>
        </View>
        
        <View style={styles.mediaAlignment}>
          <MediaContainer/>
        </View>
      </View>
    </View>
  );
};

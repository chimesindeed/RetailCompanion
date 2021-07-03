import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {CdsPrice} from '../../App'
import { PriceEditCds } from '../edit-price-components/PriceEditCds';
import CardFlipWrapper from '../CardFlipWrapper';

const styles = StyleSheet.create({
  
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  itemAndPrice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  cds: {
    color: 'maroon',
    marginBottom: 30,
    fontSize: 20,
  },
  
  prices: {
    color: 'white',
    letterSpacing: 1,
    marginBottom: 1,
    paddingRight: 10,
    marginRight: 3,
    fontSize: 20,
  },
})

export const Cds = () => {
  const cds = "Cds"
  const [cdsPrice] = useContext(CdsPrice);

  return (
    <CardFlipWrapper
      cardContainerStyle={styles.cardContainer}
      itemAndPriceStyle={styles.itemAndPrice}
      priceStyle={styles.prices}
      price={cdsPrice}
      itemStyle={styles.cds}
      item={cds}
    >
      <PriceEditCds/>
    </CardFlipWrapper>
  ) 
}

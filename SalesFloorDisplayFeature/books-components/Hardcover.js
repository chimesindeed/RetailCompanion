import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {HardcoverPriceContext} from '../../App'
import { PriceEditHardcover } from '../edit-price-components/PriceEditHardcover';
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
  
  hardcover: {
    color: 'navy',
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

export const  Hardcover = () => {
  const hardcover = "Hardcover"
  const [hardcoverPrice] = useContext(HardcoverPriceContext);

  return (
    <CardFlipWrapper
      cardContainerStyle={styles.cardContainer}
      itemAndPriceStyle={styles.itemAndPrice}
      priceStyle={styles.prices}
      price={hardcoverPrice}
      itemStyle={styles.hardcover}
      item={hardcover}
    >
      <PriceEditHardcover/>
    </CardFlipWrapper>
  ) 
}

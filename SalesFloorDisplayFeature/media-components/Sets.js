import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {SetsPrice} from '../../App'
import { PriceEditTapes } from '../edit-price-components/PriceEditTapes';
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
  
  sets: {
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

export const Sets = () => {
  const sets = "Sets"
  const [setsPrice] = useContext(SetsPrice);

  return (
    <CardFlipWrapper
      cardContainerStyle={styles.cardContainer}
      itemAndPriceStyle={styles.itemAndPrice}
      priceStyle={styles.prices}
      price={setsPrice}
      itemStyle={styles.sets}
      item={sets}
    >
      <PriceEditSets/>
    </CardFlipWrapper>
  ) 
}

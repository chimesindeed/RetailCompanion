import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {DvdsPrice} from '../../App'
import { PriceEditDvds } from '../edit-price-components/PriceEditDvds';
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
  
  tapes: {
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

export const Dvds = () => {
  const tapes = "Tapes"
  const [tapesPrice] = useContext(TapesPrice);

  return (
    <CardFlipWrapper
      cardContainerStyle={styles.cardContainer}
      itemAndPriceStyle={styles.itemAndPrice}
      priceStyle={styles.prices}
      price={tapesPrice}
      itemStyle={styles.tapes}
      item={tapes}
    >
      <PriceEditTapes/>
    </CardFlipWrapper>
  ) 
}

import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {SoftcoverPriceContext} from '../../App'
import { PriceEditSoftcover } from '../edit-price-components/PriceEditSoftcover';
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
  
  softcover: {
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

export const  Softcover = () => {
  const softcover = "Softcover"
  const [softcoverPrice] = useContext(SoftcoverPriceContext);

  return (
    <CardFlipWrapper
      cardContainerStyle={styles.cardContainer}
      itemAndPriceStyle={styles.itemAndPrice}
      priceStyle={styles.prices}
      price={softcoverPrice}
      itemStyle={styles.softcover}
      item={softcover}
    >
      <PriceEditSoftcover/>
    </CardFlipWrapper>
  ) 
}

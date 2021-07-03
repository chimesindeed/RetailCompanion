import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {ChildrensPrice} from '../../App'
import { PriceEditChildrens } from '../edit-price-components/PriceEditChildrens';
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
  
  childrens: {
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

export const  Childrens = () => {
  const childrens = "Childrens"
  const [childrensPrice] = useContext(ChildrensPrice);

  return (
    <CardFlipWrapper
      cardContainerStyle={styles.cardContainer}
      itemAndPriceStyle={styles.itemAndPrice}
      priceStyle={styles.prices}
      price={childrensPrice}
      itemStyle={styles.childrens}
      item={childrens}
    >
      <PriceEditChildrens/>
    </CardFlipWrapper>
  ) 
}

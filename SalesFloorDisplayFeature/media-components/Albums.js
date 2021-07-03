import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {AlbumsPrice} from '../../App'
import { PriceEditAlbums } from '../edit-price-components/PriceEditAlbums';
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
  
  albums: {
    color: 'maroon',
    marginBottom: 30,
    fontSize: 20,
  },
  
  prices: {
    color: 'white',
    letterSpacing: 1,
    marginBottom: 1,
    paddingRight: 10,
    marginRight: 4,
    fontSize: 20,
  },
})

export const Albums = () => {
  const albums = "Albums"
  const [albumsPrice] = useContext(AlbumsPrice);

  return (
    <CardFlipWrapper
      cardContainerStyle={styles.cardContainer}
      itemAndPriceStyle={styles.itemAndPrice}
      priceStyle={styles.prices}
      price={albumsPrice}
      itemStyle={styles.albums}
      item={albums}
    >
      <PriceEditAlbums/>
    </CardFlipWrapper>
  ) 
}

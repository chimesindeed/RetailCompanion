import React, {useContext} from 'react';
import CardFlip from 'react-native-card-flip';
import {View, Text,  TouchableOpacity, StyleSheet } from 'react-native';
import { AlbumsPrice } from '../../App';
import { PriceEditAlbums } from '../edit-price-components/PriceEditAlbums';

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
    marginRight: 3,
    fontSize: 20,
  },
})


class CardFlipWrapper extends React.Component { 

  render(){
    return (
      <CardFlip ref={(card) => this.card = card} >
        
        <TouchableOpacity style={styles.cardContainer}
         
          onPress={
            () => this.card.flip()
          }
        >
          <View style={styles.itemAndPrice}>
            <Text style={styles.prices}>{`${this.props.albumsPrice}`}</Text>
            <Text style={styles.albums}>{`${this.props.albums}`}</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={
            () => this.card.flip()
          }
        >
          <Text>CD</Text>
        </TouchableOpacity>  
      </CardFlip>
    )
  }
}
export const Albums = () => {
  const albums = 'Albums';
  const [albumsPrice] = useContext(AlbumsPrice);

  return (
    <CardFlipWrapper
      albums = {albums}
      albumsPrice= {albumsPrice}

    />
  ) 
}

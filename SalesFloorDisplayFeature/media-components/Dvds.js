import React, {useContext} from 'react'
import CardFlip from 'react-native-card-flip';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DvdsPrice} from '../../App'
import { PriceEditDvds } from '../edit-price-components/PriceEditDvds';

const styles = StyleSheet.create({
  
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  itemAndPrice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  dvds: {
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
            <Text style={styles.prices}>{`${this.props.dvdsPrice}`}</Text>
            <Text style={styles.dvds}>{`${this.props.dvds}`}</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardContainer}
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
export const Dvds = () => {
  const dvds = "Dvds"
  const [dvdsPrice] = useContext(DvdsPrice);

  return (
    <CardFlipWrapper
      dvds = {dvds}
      dvdsPrice= {dvdsPrice}

    />
  ) 
}

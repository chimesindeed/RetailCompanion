import React, {useContext} from 'react'
import CardFlip from 'react-native-card-flip';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {SoftcoverPrice} from '../../App'
import { PriceEditSoftcover } from '../edit-price-components/PriceEditSoftcover';

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
            <Text style={styles.prices}>{`${this.props.softcoverPrice}`}</Text>
            <Text style={styles.softcover}>{`${this.props.softcover}`}</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer}
          
          onPress={
            () => this.card.flip()
          }
        >
          <PriceEditSoftcover/>
          
        </TouchableOpacity>  
      </CardFlip>
    )
  }
}
export const  Softcover = () => {
  const softcover = "Softcover"
  const [softcoverPrice] = useContext(SoftcoverPrice);

  return (
    <CardFlipWrapper
      softcover = {softcover}
      softcoverPrice= {softcoverPrice}

    />
  ) 
}

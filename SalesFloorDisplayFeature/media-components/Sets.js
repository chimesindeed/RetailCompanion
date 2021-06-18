import React, {useContext} from 'react'
import CardFlip from 'react-native-card-flip';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SetsPrice} from '../../App'
import { PriceEditSets } from '../edit-price-components/PriceEditSets';

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
    color: 'rgb(0,68,23)',
    marginBottom: 30,
    fontSize: 20,
  },
  
  prices: {
    color: 'rgb(0,68,23)',
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
            <Text style={styles.prices}>{`${this.props.sets}`}</Text>
            <Text style={styles.sets}>{`${this.props.setsPrice}`}</Text>
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
export const  Sets = () => {
  const sets = "Sets"
  const [setsPrice] = useContext(SetsPrice);

  return (
    <CardFlipWrapper
      sets = {sets}
      setsPrice= {setsPrice}

    />
  ) 
}

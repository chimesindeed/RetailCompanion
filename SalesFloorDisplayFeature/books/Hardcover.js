import React, {useContext} from 'react'
import CardFlip from 'react-native-card-flip';
import {View, Text,  TouchableOpacity, StyleSheet } from 'react-native';
import {HardcoverPrice} from '../../App'

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
            <Text style={styles.prices}>{`${this.props.hardcoverPrice}`}</Text>
            <Text style={styles.hardcover}>{`${this.props.hardcover}`}</Text>
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
export const  Hardcover = () => {
  const hardcover = "Hardcover"
  const [hardcoverPrice] = useContext(HardcoverPrice);

  return (
    <CardFlipWrapper
      hardcover = {hardcover}
      hardcoverPrice= {hardcoverPrice}

    />
  ) 
}

import React, {useContext} from 'react'
import CardFlip from 'react-native-card-flip';
import {View, Text,  TouchableOpacity,  StyleSheet } from 'react-native';
import {ChildrensPrice} from '../../App'

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
    color: 'lightblue',
    marginBottom: 2,
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
            <Text style={styles.prices}>{`${this.props.childrensPrice}`}</Text>
            <Text style={styles.childrens}>{`${this.props.childrens}`}</Text>
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
export const Childrens = () => {
  const childrens = "Childrens"
  const [childrensPrice] = useContext(ChildrensPrice);

  return (
    <CardFlipWrapper
      childrens = {childrens}
      childrensPrice= {childrensPrice}

    />
  ) 
}

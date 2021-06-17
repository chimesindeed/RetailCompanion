import React, {useContext} from 'react'
import {View, Text, StyleSheet } from 'react-native';
import {ChildrensPrice} from '../../App'

const styles = StyleSheet.create({

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

export const Childrens = () => {
  const childrens = "Childrens"
  const [childrensPrice] = useContext(ChildrensPrice);

  return (
    <View style={styles.itemAndPrice}>
      
      <Text style={styles.prices}>{`${childrensPrice}`}</Text>
      
      <Text style={styles.childrens}>{`${childrens}`}</Text>
    
    </View>
  )

}
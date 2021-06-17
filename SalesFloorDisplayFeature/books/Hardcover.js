import React, {useContext} from 'react'
import {View, Text, StyleSheet } from 'react-native';
import {HardcoverPrice} from '../../App'

const styles = StyleSheet.create({

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

export const Hardcover = () => {
  const hardcover = "Hardcover"
  const [hardcoverPrice] = useContext(HardcoverPrice);

  return (
    <View style={styles.itemAndPrice}>
      
      <Text style={styles.prices}>{`${hardcoverPrice}`}</Text>
      
      <Text style={styles.hardcover}>{`${hardcover}`}</Text>
    
    </View>
  )

}
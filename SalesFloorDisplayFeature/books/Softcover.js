import React, {useContext} from 'react'
import {View, Text, StyleSheet } from 'react-native';
import {SoftcoverPrice} from '../../App'

const styles = StyleSheet.create({

  itemAndPrice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  softcover: {
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

export const Softcover = () => {
  const softcover = "Softcover"
  const [softcoverPrice] = useContext(SoftcoverPrice);

  return (
    <View style={styles.itemAndPrice}>
      
      <Text style={styles.prices}>{`${softcoverPrice}`}</Text>
      
      <Text style={styles.softcover}>{`${softcover}`}</Text>
    
    </View>
  )

}
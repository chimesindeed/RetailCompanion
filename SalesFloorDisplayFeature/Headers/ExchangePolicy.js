import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import CardFlipWrapperHeader from '../CardFlipWrapperHeader';
import { ExchangePolicyContext } from '../../App';

const styles = StyleSheet.create({
    
  exchangePolicyContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    marginRight: 50,
  
  },

  exchangePolicyHeader: {
    textDecorationLine: 'underline',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginBottom: 1,
    fontSize: 23,
  },
  exchangePolicy: {
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginBottom: 1,
    fontSize: 17,
  },
})

export const StoreLogo = () => { 
  const [sALogo] = useContext(SALogo);

  return (
    <CardFlipWrapperHeader
      headerStyle={styles.SALogo}
      header={sALogo}
    >
      <Text>Hello</Text>
    </CardFlipWrapperHeader>
  ) 
}

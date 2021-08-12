import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import CardFlipWrapperHeader from '../CardFlipWrapperHeader';
import { SALogo } from '../../App';

const styles = StyleSheet.create({
    
  SALogo: {
    letterSpacing: 2,
    fontWeight: '700',
    color: 'navy',
    fontSize: 44,
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

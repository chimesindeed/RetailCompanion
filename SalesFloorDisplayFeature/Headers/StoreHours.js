import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import CardFlipWrapperHeader from '../CardFlipWrapperHeader';
import { StoreHoursContext } from '../../App';

const styles = StyleSheet.create({
    storeHoursContainer: {
        flexDirection: 'column',
        marginRight: 20,
        marginBottom: 15,
      },
      storeHoursHeader: {
        alignSelf: 'center',
        letterSpacing: 1,
        fontWeight: '700',
        color: 'teal',
        marginBottom: 1,
        fontSize: 23,
      },
      storeHours: {
        alignSelf: 'center',
        letterSpacing: 1,
        color: 'teal',
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

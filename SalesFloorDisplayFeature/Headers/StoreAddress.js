import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import CardFlipWrapperHeader from '../CardFlipWrapperHeader';
import { StoreAddressContext } from '../../App';

const styles = StyleSheet.create({
    addressContainer: {
        marginTop: 50,
        flexDirection: 'row',
      },
    
      addressText: {
        color: 'navy',
        paddingRight: 7,
        fontSize: 15,
      },
      phoneText: {
        fontSize: 17,
        marginTop: -2,
        marginLeft: 5,
        color: 'maroon',
        textDecorationLine: 'underline',
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

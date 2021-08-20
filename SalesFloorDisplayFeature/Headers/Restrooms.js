import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import CardFlipWrapperHeader from '../CardFlipWrapperHeader';
import { RestroomsContext } from '../../App';

const styles = StyleSheet.create({
    
    restroomsContainer: {
        flexDirection: 'column',
        marginRight: -40,
        marginBottom: 30,
      },
      restroomsHeader: {
        alignSelf: 'center',
        letterSpacing: 1,
        fontWeight: '700',
        color: 'black',
        marginTop: 10,
        marginBottom: 1,
        fontSize: 23,
      },
      restrooms: {
        alignSelf: 'center',
        letterSpacing: 1,
        color: 'black',
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

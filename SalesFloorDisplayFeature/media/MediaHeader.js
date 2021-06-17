import React from 'react'
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

mediaHeader: {

  alignSelf: 'center',
  letterSpacing: 2,
  fontSize: 24,
  fontWeight: '700',
  textDecorationLine: 'underline',
  color: 'tan',
  marginBottom: 14,
  marginTop: 45,
  
}
})

const media = "Media"

export const MediaHeader = () => {
  return (
    <Text style={styles.mediaHeader}>{`${media}`}</Text>
  );
};
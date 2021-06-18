import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

booksHeader: {

  marginLeft: 30,
  letterSpacing: 2,
  fontSize: 24,
  fontWeight: '700',
  textDecorationLine: 'underline',
  color: 'tan',
  marginBottom: 14,
  marginTop: 45,
}
})

const books = "Books"

export const BooksHeader = () => {
  return (
    <Text style={styles.booksHeader}>{`${books}`}</Text>
  );
};
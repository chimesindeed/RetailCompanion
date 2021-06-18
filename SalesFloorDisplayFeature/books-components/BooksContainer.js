import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { BooksHeader} from './BooksHeader'
import { Books } from './Books'

const styles = StyleSheet.create({
  booksContainer: {
    flexDirection: 'column',
  }
}) 

export const BooksContainer = () => {

  return (
    <View style={styles.booksContainer}>
      <BooksHeader/>
      <Books/>
    </View>
  )


}
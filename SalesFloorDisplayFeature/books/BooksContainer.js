import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { BooksHeader} from './BooksHeader'
import { Books } from './Books'

// const styles = StyleSheet.create({

  
// }) 

export const BooksContainer = () => {

  return (
    <View>
      <BooksHeader/>
      <Books/>
    </View>
  )


}
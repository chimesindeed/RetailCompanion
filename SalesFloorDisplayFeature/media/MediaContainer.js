import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MediaHeader } from './MediaHeader'
import { MediaDivider } from './MediaDivider'
import { Media } from './Media'

// const styles = StyleSheet.create({

  
// }) 

export const MediaContainer = () => {

  return (
    <View>
      <MediaHeader/>
      <MediaDivider/>
      <Media/>
    </View>
  )


}
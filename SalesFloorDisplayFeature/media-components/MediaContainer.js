import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MediaHeader } from './MediaHeader'

import { Media } from './Media'

const styles = StyleSheet.create({
  mediaContainer: {
    flexDirection: 'column',
  }
}) 

export const MediaContainer = () => {

  return (
    <View style={styles.mediaContainer}>
      <MediaHeader/>
      <Media/>
    </View>
  )


}
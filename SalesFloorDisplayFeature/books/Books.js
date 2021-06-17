import React from 'react'
import { View } from 'react-native'
import { Softcover } from './Softcover';
import { Hardcover } from './Hardcover';
import { Childrens } from './Childrens'

export const Books = () => {
 
  return (
    <View>
      <View style={{marginBottom: 30}}>
        <Softcover/>
      </View>
      
      <View style={{marginBottom: 30}}>
        <Hardcover/>
      </View>

      <View style={{marginBottom: 30}}>
        <Childrens/>
      </View>

    </View>
  );
};
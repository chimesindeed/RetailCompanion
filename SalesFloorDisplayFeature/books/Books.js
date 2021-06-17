import React from 'react'
import { View } from 'react-native'
import { Softcover } from './Softcover';
import { Hardcover } from './Hardcover';
import { Childrens } from './Childrens'

export const Books = () => {
 
  return (
    <View>
      <Softcover/>
      <Hardcover/>     
      <Childrens/>
    </View>
  );
};
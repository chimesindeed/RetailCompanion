import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ColorsDiscountsHeader } from './ColorsDiscountsHeader';
import { ColorsDiscounts } from './ColorsDiscounts';

const styles = StyleSheet.create({
 
  yellow: {
    alignSelf: 'center',
    letterSpacing: 1,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12,
    marginLeft: 2,
    marginRight: 14,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'yellow',
    color: 'white',
    fontSize: 20,
  },
  green: {
    alignSelf: 'center',
    letterSpacing: 1,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12,
    marginLeft: 2,
    marginRight: 14,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'green',
    color: 'white',
    fontSize: 20,
  },
  blue: {
    alignSelf: 'center',
    letterSpacing: 1,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12,
    marginLeft: 2,
    marginRight: 14,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'blue',
    color: 'white',
    fontSize: 20,
  },
  white: {
    alignSelf: 'center',
    letterSpacing: 1,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12,
    marginLeft: 2,
    marginRight: 14,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
  },
  pink: {
    alignSelf: 'center',
    letterSpacing: 1,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12,
    marginLeft: 2,
    marginRight: 14,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'pink',
    color: 'white',
    fontSize: 20,
  },
});

export const ColorsDiscountsContainer = () => {
  return (
    <View>
      <ColorsDiscountsHeader />
      <ColorsDiscounts/>
    </View>
  );
};

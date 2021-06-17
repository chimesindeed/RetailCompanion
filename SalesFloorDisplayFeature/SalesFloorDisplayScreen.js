import React, {useEffect} from 'react';
import {Dimensions, View, StyleSheet, Button} from 'react-native';
import SalesFloorDisplayHeader from './Headers/SalesFloorDisplayHeader';
import {PricingAndDiscountsContainer} from './pricing-and-discounts/PricingAndDiscountsContainer'

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: 'column',
    height: ScreenHeight,
    width: ScreenWidth,
    backgroundColor: 'cornsilk',
  },
});
const SalesFloorDisplayScreen = (props) => {
  const toggle= () =>{return props.navigation.toggleDrawer()}
  useEffect(()=>{return toggle},[])
  return (
    <View style={styles.appContainer}>
      <Button onPress={toggle}>Toggle</Button>
      <SalesFloorDisplayHeader/>
      <PricingAndDiscountsContainer/>
    </View>
  );
};

export default SalesFloorDisplayScreen;

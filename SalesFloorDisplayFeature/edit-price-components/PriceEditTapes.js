import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TapesPrice,
} from '../../App';

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  sideBySide: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginLeft: 7,
    paddingLeft: 10,
    marginBottom: 11,
  },
  inputBox: {
    width: 60,
    height: 28,
    paddingTop: 5,
    paddingLeft: 12,
    backgroundColor: 'black',
    color: 'white',
  },
  button: {
    width: 60,
    height: 28,
    paddingTop: 5,
    paddingLeft: 12,
    backgroundColor: 'black',
    color: 'white',
  },
})

export const PriceEditTapes = () => {
  const [tapesInput, setTapesInput] = useState('');

  const [tapesPrice, setTapesPrice] = useContext(TapesPrice);
  
  const input = React.createRef();
  const clearInput = () => {
    input.current.clear();
  };
  
  const handleChangeTapes = e => {
    console.log(e);
    setTapesInput(e);
  };
 
  const adjustFormatting = item => {
    const arr = item.split('');
    const space = ['  '];
    const formatted = space.concat(arr).join('');
    return formatted;
  };

  const updateTapes = e => {
    let result;
    tapesInput.length === 3
      ? (result = adjustFormatting(tapesInput))
      : (result = tapesInput);
    setTapesPrice(result);
    AsyncStorage.setItem('tapesPrice', result.toString());
    clearInput();
  };
 
  return (
    <View style={styles.sideBySide}>
      <TextInput
        ref={input}
        style={styles.inputBox}
        onChangeText={handleChangeTapes}
        keyboardType="numeric"
      />

      <Button title="update" onPress={updateTapes} />
    </View>
  );
};

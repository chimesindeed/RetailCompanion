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
  SoftcoverPrice,
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


export const PriceEditSoftcover = () => {
  const [softcoverInput, setSoftcoverInput] = useState('');
  
  const [softcoverPrice, setSoftcoverPrice] = useContext(SoftcoverPrice);
 
  const input = React.createRef();
  const clearInput = () => {
    input.current.clear();
  };
  const handleChangeSoftcover = e => {
    console.log(e);
    setSoftcoverInput(e);
  };
 
  const adjustFormatting = item => {
    const arr = item.split('');
    const space = ['  '];
    const formatted = space.concat(arr).join('');
    return formatted;
  };

  const updateSoftcover = e => {
    let result;
    softcoverInput.length === 3
      ? (result = adjustFormatting(softcoverInput))
      : (result = softcoverInput);
    setSoftcoverPrice(result);
    AsyncStorage.setItem('softcoverPrice', result.toString());
    clearInput();
  };
 
  return (
    <View style={styles.sideBySide}>
      <TextInput
        ref={input}
        style={styles.inputBox}
        onChangeText={handleChangeSoftcover}
        keyboardType="numeric"
      />

      <Button title="update" onPress={updateSoftcover} />
    </View>
  );
};

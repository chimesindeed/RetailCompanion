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
  DvdsPrice,
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


export const PriceEditDvds = (props) => {
  
  const [dvdsInput, setDvdsInput] = useState('');
  
  const [dvdsPrice, setDvdsPrice] = useContext(DvdsPrice);
  
  const input = React.createRef();
  const clearInput = () => {
    input.current.clear();
  };
 
  const handleChangeDvds = e => {
    console.log(e);
    setDvdsInput(e);
  };

  const adjustFormatting = item => {
    const arr = item.split('');
    const space = ['  '];
    const formatted = space.concat(arr).join('');
    return formatted;
  };

  const updateDvds = e => {
    let result;
    dvdsInput.length === 3
      ? (result = adjustFormatting(dvdsInput))
      : (result = dvdsInput);
    setDvdsPrice(result);
    AsyncStorage.setItem('dvdsPrice', result.toString());
    props.flip();
  };
 
  return (
    <View style={styles.sideBySide}>
      <TextInput
        ref={input}
        style={styles.inputBox}
        onChangeText={handleChangeDvds}
        keyboardType="numeric"
      />

      <Button title="update" onPress={updateDvds} />
    </View>
  );
};

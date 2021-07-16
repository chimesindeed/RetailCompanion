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
  SetsPrice,
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


export const PriceEditSets = (props) => {
  
  const [setsInput, setSetsInput] = useState('');

  const [setsPrice, setSetsPrice] = useContext(SetsPrice);

  const input = React.createRef();
  const clearInput = () => {
    input.current.clear();
  };
 
  const handleChangeSets = e => {
    console.log(e);
    setSetsInput(e);
  };

  const adjustFormatting = item => {
    const arr = item.split('');
    const space = ['  '];
    const formatted = space.concat(arr).join('');
    return formatted;
  };

  const updateSets = e => {
    let result;
    setsInput.length === 3
      ? (result = adjustFormatting(setsInput))
      : (result = setsInput);
    setSetsPrice(result);
    AsyncStorage.setItem('setsPrice', result.toString());
    props.flip();
  };

  return (
    <View style={styles.sideBySide}>
      <TextInput
        ref={input}
        style={styles.inputBox}
        onChangeText={handleChangeSets}
        keyboardType="numeric"
      />

      <Button title="update" onPress={updateSets} />
    </View>
  );
};

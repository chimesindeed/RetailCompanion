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
  ChildrensPrice,
} from '../../App';

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  sideBySide: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginLeft: 7,
    paddingLeft: 10,
    paddingTop: 7,
    marginBottom: 11,
  },
  inputBox: {
    width: 60,
    height: 37,
    paddingTop: 10,
    paddingLeft: 12,
    backgroundColor: 'black',
    color: 'white',
  },
  button: {
    width: 60,
    height: 37,
    paddingTop: 10,
    paddingLeft: 12,
    backgroundColor: 'black',
    color: 'white',
  },
})

export const PriceEditChildrens = () => {
  const [childrensInput, setChildrensInput] = useState('');
  
  const [childrensPrice, setChildrensPrice] = useContext(ChildrensPrice);
  
  const input = React.createRef();
  const clearInput = () => {
    input.current.clear();
  };
 
  const handleChangeChildrens = e => {
    console.log(e);
    setChildrensInput(e);
  };
 
  const handleChangeCds = e => {
    console.log(e);
    setCdsInput(e);
  };
 
  const adjustFormatting = item => {
    const arr = item.split('');
    const space = ['  '];
    const formatted = space.concat(arr).join('');
    return formatted;
  };

  const updateChildrens = e => {
    let result;
    childrensInput.length === 3
      ? (result = adjustFormatting(childrensInput))
      : (result = childrensInput);
    setChildrensPrice(result);
    AsyncStorage.setItem('childrensPrice', result.toString());
    clearInput();
  };

  return (
    <View style={styles.sideBySide}>
      <TextInput
        ref={input}
        style={styles.inputBox}
        onChangeText={handleChangeChildrens}
        keyboardType="numeric"
      />

      <Button title="update" onPress={updateChildrens} />
    </View>
  );
};

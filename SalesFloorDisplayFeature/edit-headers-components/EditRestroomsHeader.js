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
  RestroomsHeader,
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

export const PriceEditAlbums = (props) => {
  const [albumsInput, setAlbumsInput] = useState('');
  
  const [albumsPrice, setAlbumsPrice] = useContext(AlbumsPrice);


  const input = React.createRef();
  const clearInput = () => {
    input.current.clear();
  };
  
  const handleChangeAlbums = e => {
    console.log(e);
    setAlbumsInput(e);
  };
  
  const adjustFormatting = item => {
    const arr = item.split('');
    const space = ['  '];
    const formatted = space.concat(arr).join('');
    return formatted;
  };

 
  const updateAlbums = e => {
    let result;
    albumsInput.length === 3
      ? (result = adjustFormatting(albumsInput))
      : (result = albumsInput);
    setAlbumsPrice(result);
    AsyncStorage.setItem('albumsPrice', result.toString());
    props.flip();
  };
  
  return (
    <View style={styles.sideBySide}>
      <TextInput
        ref={input}
        style={styles.inputBox}
        onChangeText={handleChangeAlbums}
        keyboardType="numeric"
      />

      <Button title="update" onPress={updateAlbums} />
    </View>
  );
};

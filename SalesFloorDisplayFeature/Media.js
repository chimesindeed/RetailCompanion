import React, {useContext} from 'react';
import CardFlip from 'react-native-card-flip';
import {View, Text, StyleSheet} from 'react-native';
import {
  AlbumsPrice,
  TapesPrice,
  CdsPrice,
  DvdsPrice,
  SetsPrice,
} from '../App';

const styles = StyleSheet.create({

  combined: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    alignSelf: 'center',
    letterSpacing: 2,
    fontSize: 24,
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: 'tan',
    marginBottom: 14,
    marginTop: 45,
  },
  prices: {
    color: 'white',
    letterSpacing: 1,
    marginBottom: 1,
    paddingRight: 10,
    marginRight: 3,
    fontSize: 20,
  },
  media: {
    color: 'maroon',
    marginBottom: 10,
    paddingRight: 10,
    marginRight: 3,
    fontSize: 20,
  },
  mediaDivider: {
    backgroundColor: 'beige',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 43,
    width: 1,
    height: 200,
  },
});

const books = 'Books';
const media = 'Media';
const softcover = 'Softcover';
const hardcover = 'Hardcover';
const childrens = 'Childrens';
const tapes = 'Cass / Vhs';
const albums = 'Albums';
const cds = 'Cds';
const dvds = 'Dvds';
const sets = 'Sets';



export const LineDivider = () => {
  return <View style={styles.mediaDivider} />;
};
const MediaHeader = () => {
  return (
    <View>
      <Text style={styles.header}>{`${media}`}</Text>
    </View>
  );
};


export const Media = () => {
  const [albumsPrice] = useContext(AlbumsPrice);
  const [tapesPrice] = useContext(TapesPrice);
  const [cdsPrice] = useContext(CdsPrice);
  const [dvdsPrice] = useContext(DvdsPrice);
  const [setsPrice] = useContext(SetsPrice);
  return (
    <View>
      <MediaHeader />
      <View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${tapesPrice}`}</Text>
          <Text style={styles.media}>{`${tapes}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${albumsPrice}`}</Text>
          <Text style={styles.media}>{`${albums}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${cdsPrice}`}</Text>
          <Text style={styles.media}>{`${cds}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${dvdsPrice}`}</Text>
          <Text style={styles.media}>{`${dvds}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text
            style={Object.assign({}, styles.media, styles.addLineSpace, {
              color: 'beige',
            })}>{`${sets} ${setsPrice}`}</Text>
        </View>
      </View>
    </View>
  );
};

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
})

const discountedItems = 'CLOTHES / HANDBAGS';
const yellow = 'Yellow Tickets';
const green = 'Green Tickets';
const blue = 'Blue Tickets';
const white = 'White Tickets';
const pink = 'Pink Tickets';
const fiftyPercent = '50%';
const ninetyNine = '99 Cents';

const Yellow = () => {
  return (
    <View>
      <Text style={styles.white}>{`${white} ${fiftyPercent}`}</Text>
      <Text style={styles.blue}>{`${blue} ${fiftyPercent}`}</Text>
      <Text style={styles.green}>{`${green} ${ninetyNine}`}</Text>
    </View>
  );
};

const Green = () => {
  return (
    <View>
      <Text style={styles.pink}>{`${pink} ${fiftyPercent}`}</Text>
      <Text style={styles.white}>{`${white} ${fiftyPercent}`}</Text>
      <Text style={styles.blue}>{`${blue} ${ninetyNine}`}</Text>
    </View>
  );
};

const Blue = () => {
  return (
    <View>
      <Text style={styles.yellow}>{`${yellow} ${fiftyPercent}`}</Text>
      <Text style={styles.pink}>{`${pink} ${fiftyPercent}`}</Text>
      <Text style={styles.white}>{`${white} ${ninetyNine}`}</Text>
    </View>
  );
};

const White = () => {
  return (
    <View>
      <Text style={styles.green}>{`${green} ${fiftyPercent}`}</Text>
      <Text style={styles.yellow}>{`${yellow} ${fiftyPercent}`}</Text>
      <Text style={styles.pink}>{`${pink} ${ninetyNine}`}</Text>
    </View>
  );
};

const Pink = () => {
  return (
    <View>
      <Text style={styles.blue}>{`${blue} ${fiftyPercent}`}</Text>
      <Text style={styles.green}>{`${green} ${fiftyPercent}`}</Text>
      <Text style={styles.yellow}>{`${yellow} ${ninetyNine}`}</Text>
    </View>
  );
};

const startingDate = new Date('October 25, 2020');

export const ColorsDiscounts = () => {
  const [color, setColor] = useState('loading...');

  const daysPassed = (dStart = startingDate) => {
    const dt1 = dStart;
    const dt2 = new Date();

    const dPassed = Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24),
    );

    const placeInCycle = (dPassed / 7) % 5;

    if (placeInCycle >= 0 && placeInCycle < 1) {
      setColor('Pink');
    } else if (placeInCycle >= 1 && placeInCycle < 2) {
      setColor('Yellow');
    } else if (placeInCycle >= 2 && placeInCycle < 3) {
      setColor('Green');
    } else if (placeInCycle >= 3 && placeInCycle < 4) {
      setColor('Blue');
    } else if (placeInCycle >= 4 && placeInCycle < 5) {
      setColor('White');
    }
    console.log(color);
  };
  useEffect(() => {
    daysPassed();
  }, []);
  const renderDiscounts = () => {
    switch (color) {
      case 'Yellow':
        return <Yellow />;
      case 'Green':
        return <Green />;
      case 'Blue':
        return <Blue />;
      case 'White':
        return <White />;
      case 'Pink':
        return <Pink />;
    }
  };
  return (
    <View>
      {renderDiscounts()}
    </View>
  );
};
  
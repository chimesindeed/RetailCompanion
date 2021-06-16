import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  StoreAddress1,
  StoreAddress2,
  StorePhone,
  DeliveryPeople,
  InstagramLink,
} from '../../App';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginLeft: 20,
  },
  logoAndAddressContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    marginTop: 5,
  },
  SALogo: {
    letterSpacing: 1,
    fontWeight: '700',
    color: 'navy',
    fontSize: 44,
  },

  addressContainer: {
    flexDirection: 'row',
  },

  addressText: {
    color: 'navy',
    paddingRight: 7,
    fontSize: 15,
  },
  phoneText: {
    fontSize: 17,
    marginTop: -2,
    marginLeft: 5,
    color: 'maroon',
    textDecorationLine: 'underline',
  },

  rightsideHeader: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    marginTop: 10,
    marginRight: 10,
  },
  storeHoursContainer: {
    flexDirection: 'column',
    marginRight: 20,
    marginBottom: 15,
  },
  storeHoursHeader: {
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'teal',
    marginBottom: 1,
    fontSize: 23,
  },
  storeHours: {
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'teal',
    marginBottom: 1,
    fontSize: 17,
  },
  restroomsContainer: {
    flexDirection: 'column',
    marginRight: -40,
    marginBottom: 30,
  },
  restroomsHeader: {
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'black',
    marginTop: 10,
    marginBottom: 1,
    fontSize: 23,
  },
  restrooms: {
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'black',
    marginBottom: 1,
    fontSize: 17,
  },

  exchangePolicyContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    marginRight: 50,
  
  },

  exchangePolicyHeader: {
    textDecorationLine: 'underline',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginBottom: 1,
    fontSize: 23,
  },
  exchangePolicy: {
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginBottom: 1,
    fontSize: 17,
  },
});

const storeLogo = "S.A. Retail - Store Companion"

const SALogo = () => {
  return (
    <View>
      <Text style={styles.SALogo}>{storeLogo}</Text>
    </View>
  );
};

const StoreAddress = () => {
  const [storeAddress1] = useContext(StoreAddress1);
  const [storeAddress2] = useContext(StoreAddress2);
  const [storePhone] = useContext(StorePhone);
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.addressText}>{storeAddress1}</Text>
      <Text style={styles.addressText}>{storeAddress2}</Text>
      <Text style={styles.phoneText}>{storePhone}</Text>
    </View>
  );
};
const StoreDetails = () => {
  return (
    <View style={styles.rightsideHeader}>
      <View style={styles.storeHoursContainer}>
        <Text style={styles.storeHoursHeader}>Hours Of Operation:</Text>
        <Text style={styles.storeHours}>
          Monday - Saturday 10:00 AM - 7:00 PM
        </Text>
      </View>
      <View style={styles.restroomsContainer}>
        <Text style={styles.restroomsHeader}>Restrooms:</Text>
        <Text style={styles.restrooms}>
          {'No Public Restrooms\nDuring The Pandemic'}
        </Text>
      </View>
      <View style={styles.exchangePolicyContainer}>
        <Text style={styles.exchangePolicyHeader}>Exchange Policy:</Text>
        <Text
          style={
            styles.exchangePolicy
          }>{`All Sales Are Final\nNo Refunds\nNo Exchanges`}</Text>
      </View>
    </View>
  );
};
const SalesFloorDisplayHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoAndAddressContainer}>
        <SALogo />
        <StoreAddress />
      </View>
      <StoreDetails />
    </View>
  );
};
export default SalesFloorDisplayHeader;

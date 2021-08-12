import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import React, {useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {EditPrices} from './SalesFloorDisplayFeature/EditPrices';

import SalesFloorDisplayScreen from './SalesFloorDisplayFeature/SalesFloorDisplayScreen';


export const ChildrensPriceContext = React.createContext('');
export const SoftcoverPriceContext = React.createContext('');
export const HardcoverPriceContext = React.createContext('');
export const AlbumsPriceContext = React.createContext('');
export const TapesPriceContext = React.createContext('');
export const CdsPriceContext = React.createContext('');
export const DvdsPriceContext = React.createContext('');
export const SetsPriceContext = React.createContext('');

export const StoreLogoContext = React.createContext('');
export const StoreAddress1Context = React.createContext('');
export const StoreAddress2Context = React.createContext('');
export const StorePhoneContext = React.createContext('');
export const DeliveryPeopleContext = React.createContext('');
export const InstagramLinkContext = React.createContext('');

const Drawer = createDrawerNavigator();

const App = () => {
  const [childrensPrice, setChildrensPrice] = useState<number>(0.49);
  const [softcoverPrice, setSoftcoverPrice] = useState<number>(0.99);
  const [hardcoverPrice, setHardcoverPrice] = useState<number>(1.99);
  const [albumsPrice, setAlbumsPrice] = useState<number>(1.99);
  const [tapesPrice, setTapesPrice] = useState<number>(1.99);
  const [cdsPrice, setCdsPrice] = useState<number>(1.99);
  const [dvdsPrice, setDvdsPrice] = useState<number>(2.99);
  const [setsPrice, setSetsPrice] = useState<string>('As Marked');
  const [sALogo, setSALogo] = useState<string>("S.A. Retail - Store Companion");
  const [storeAddress1, setStoreAddress1] = useState<string>('536 W. 46th St');
  const [storeAddress2, setStoreAddress2] = useState<string>('10th & 11th Ave');
  const [storePhone, setStorePhone] = useState<string>('212.757.2311');

  const getChildrensPrice = async () => {
    let childrens;
    try {
      childrens = await AsyncStorage.getItem('childrensPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (childrens !== null) {
        setChildrensPrice(childrens);
      }
    }
  };

  const getSoftcoverPrice = async () => {
    let softcover;
    try {
      softcover = await AsyncStorage.getItem('softcoverPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (softcover !== null) {
        setSoftcoverPrice(softcover);
      }
    }
  };

  const getHardcoverPrice = async () => {
    let hardcover;
    try {
      hardcover = await AsyncStorage.getItem('hardcoverPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (hardcover !== null) {
        setHardcoverPrice(hardcover);
      }
    }
  };

  const getAlbumsPrice = async () => {
    let albums;
    try {
      albums = await AsyncStorage.getItem('albumsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (albums !== null) {
        setAlbumsPrice(albums);
      }
    }
  };

  const getTapesPrice = async () => {
    let tapes;
    try {
      tapes = await AsyncStorage.getItem('tapesPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (tapes !== null) {
        setTapesPrice(tapes);
      }
    }
  };

  const getCdsPrice = async () => {
    let cds;
    try {
      cds = await AsyncStorage.getItem('cdsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (cds !== null) {
        setCdsPrice(cds);
      }
    }
  };

  const getDvdsPrice = async () => {
    let dvds;
    try {
      dvds = await AsyncStorage.getItem('dvdsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (dvds !== null) {
        setDvdsPrice(dvds);
      }
    }
  };

  const getSetsPrice = async () => {
    let sets;
    try {
      sets = await AsyncStorage.getItem('setsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (sets !== null) {
        setSetsPrice(sets);
      }
    }
  };
  const getStoreAddress1 = async () => {
    let address1;
    try {
      address1 = await AsyncStorage.getItem('address1');
    } catch (e) {
      console.log(e);
    } finally {
      if (address1 !== null) {
        setStoreAddress1(address1);
      }
    }
  };
  const getStoreAddress2 = async () => {
    let address2;
    try {
      address2 = await AsyncStorage.getItem('address2');
    } catch (e) {
      console.log(e);
    } finally {
      if (address2 !== null) {
        setStoreAddress2(address2);
      }
    }
  };
  const getStorePhone = async () => {
    let astorePhone;
    try {
      astorePhone = await AsyncStorage.getItem('storePhone');
    } catch (e) {
      console.log(e);
    } finally {
      if (astorePhone !== null) {
        setStorePhone(astorePhone);
      }
    }
  };
  useEffect(() => {
    getChildrensPrice();
  }, []);
  useEffect(() => {
    getSoftcoverPrice();
  }, []);
  useEffect(() => {
    getHardcoverPrice();
  }, []);
  useEffect(() => {
    getAlbumsPrice();
  }, []);
  useEffect(() => {
    getTapesPrice();
  }, []);
  useEffect(() => {
    getCdsPrice();
  }, []);
  useEffect(() => {
    getDvdsPrice();
  }, []);
  useEffect(() => {
    getSetsPrice();
  }, []);
  useEffect(() => {
    getStoreAddress1();
  }, []);
  useEffect(() => {
    getStoreAddress2();
  }, []);
  useEffect(() => {
    getStorePhone();
  }, []);

  return (
    <StoreLogoContext.Provider value={[sALogo, setSALogo]}>
      <StoreAddress1Context.Provider value={[storeAddress1, setStoreAddress1]}>
        <StoreAddress2Context.Provider value={[storeAddress2, setStoreAddress2]}>
          <StorePhoneContext.Provider value={[storePhone, setStorePhone]}>
            <ChildrensPriceContext.Provider value={[childrensPrice, setChildrensPrice]}>
              <SoftcoverPriceContext.Provider
                value={[softcoverPrice, setSoftcoverPrice]}>
                <HardcoverPriceContext.Provider
                  value={[hardcoverPrice, setHardcoverPrice]}>
                  <AlbumsPriceContext.Provider value={[albumsPrice, setAlbumsPrice]}>
                    <TapesPriceContext.Provider value={[tapesPrice, setTapesPrice]}>
                      <CdsPriceContext.Provider value={[cdsPrice, setCdsPrice]}>
                        <DvdsPriceContext.Provider value={[dvdsPrice, setDvdsPrice]}>
                          <SetsPriceContext.Provider value={[setsPrice, setSetsPrice]}>
                            <NavigationContainer>
                              <Drawer.Navigator initialRouteName="SalesFloorDisplayScreen">
                                <Drawer.Screen
                                  name="SalesFloorDisplayScreen"
                                  component={SalesFloorDisplayScreen}
                                />
                                <Drawer.Screen
                                  name="Price & Header Settings"
                                  component={EditPrices}
                                />
                                
                              </Drawer.Navigator>
                            </NavigationContainer>
                          </SetsPriceContext.Provider>
                        </DvdsPriceContext.Provider>
                      </CdsPriceContext.Provider>
                    </TapesPriceContext.Provider>
                  </AlbumsPriceContext.Provider>
                </HardcoverPriceContext.Provider>
              </SoftcoverPriceContext.Provider>
            </ChildrensPriceContext.Provider>
          </StorePhoneContext.Provider>
        </StoreAddress2Context.Provider>
      </StoreAddress1Context.Provider>
    </StoreLogoContext.Provider>
  );
};
export default App;

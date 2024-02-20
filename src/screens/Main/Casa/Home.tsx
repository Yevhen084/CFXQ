import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useAppSelector, useAppDispatch } from '@hooks';
import { userApi } from '@services/modules/users';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import AssetList from './components/AssetList';
import { log } from 'console';

const Home = () => {
  const { Layout, Gutters, Images } = useTheme();
  const { user, countries, tokenPlatforms, tokenTypes, AccessToken } =
    useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  console.log('check', JSON.stringify(tokenTypes, 2, 4));
  console.log('AccessToken', AccessToken);

  const [tokens, setTokens] = useState<any>([]);

  const [showImage, setShowImage] = useState(null);

  const choosePhotoFromLibrary = async () => {
    try {
      launchImageLibrary(
        {
          quality: 1,
          selectionLimit: 1,
          mediaType: 'photo',
        },
        response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            const source = response.assets[0];
            setShowImage(source?.uri);
          }
        },
      );
    } catch (error) {
      console.log('ERROR ', error);
    }
  };

  const getTokenBalances = async () => {
    try {
      const userId = user?.id;
      let tokenBalances = await Promise.all(
        tokenTypes.map(async token => {
          console.log('CHECK', userId, token.id);

          const result = await dispatch(
            userApi.endpoints.getBalanceByTokenTypeId.initiate({
              userId,
              tokenTypeId: token.id,
            }),
          );

          console.log('api', userApi.endpoints.getBalanceByTokenTypeId);
          console.log('alalallla', JSON.stringify(result, 2, 4));

          if (result.data?.length) {
            return result.data[0];
          } else {
            return null;
          }
        }),
      );
      tokenBalances = tokenBalances.filter(token => token !== null);
      setTokens(tokenBalances);
    } catch (error) {
      console.log('Check Error', error);
    }
  };

  useEffect(() => {
    getTokenBalances();
  }, []);

  const onPressZeroOne = () => {
    navigation.navigate('Plus' as never);
  };

  return (
    <View style={[Layout.container]}>
      <SafeAreaView>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.tinyTMargin,
            Gutters.tinyHPadding,
          ]}
        >
          <View style={[Layout.row, Layout.alignItemsCenter]}>
            <TouchableOpacity onPress={() => choosePhotoFromLibrary()}>
              {/* {showImage ? (
                <Image source={{ uri: showImage }} style={styles.avatar} />
              ) : ( */}
              <View style={styles.avatar1}>
                <Text style={{ color: 'white' }}>
                  {user?.firstName?.charAt(0)}
                  {user?.lastName?.charAt(0)}
                </Text>
              </View>
              {/* )} */}
              {/* style={styles.avatar} */}
            </TouchableOpacity>
            <View style={[Gutters.tinyLMargin]}>
              <Text color="white" weight="bold" size="regular" mb={5}>
                {user?.firstName} {user?.lastName}
              </Text>
              {/* <Text size="small">@Marcomatt</Text> */}
            </View>
          </View>
          <View style={[Layout.alignItemsCenter]}>
            <TouchableOpacity onPress={onPressZeroOne}>
              <Image
                source={Images.main.zerooneCal}
                style={{ width: 100, height: 30, right: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <AssetList tokens={tokens} />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerDivider: {
    width: 2,
    height: 25,
    backgroundColor: '#888',
    marginHorizontal: 10,
  },

  avatar1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ImageSourcePropType,
} from 'react-native';
import { Text } from '@components';
import { useTheme } from '@hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

type DataType = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
  token: string;
  description: string;
  address: string;
};

const data: DataType[] = [
  {
    id: 1,
    icon: require('@theme/assets/images/icons/coins/usdt.png'),
    name: 'USDT',
    token: 'Tether USD',
    description: 'XT MM ACCOUNT USDT',
    address: '0x916363bd905a833d2a9fd84271f91adf7a6cbb26',
  },
  {
    id: 2,
    icon: require('@theme/assets/images/icons/coins/eth.png'),
    name: 'ETH',
    token: 'Ethereum',
    description: 'LUCA x DEFI ETH',
    address: 'Oxld6E577a394401832d285d2158873a4226De8bFB',
  },
  {
    id: 3,
    icon: require('@theme/assets/images/icons/coins/usdt.png'),
    name: 'USDT',
    token: 'Tether USD',
    description: 'Whitebit - conto cfxquantum@gmail.com',
    address: 'Ox394aebb3F9191da4589d6B37a041965779a5E5A1',
  },
  {
    id: 4,
    icon: require('@theme/assets/images/icons/coins/eth.png'),
    name: 'ETH',
    token: 'Ethereum',
    description: 'LUCA PER ETH-USDT - VAFFA TOKEN',
    address: 'OxCaea571163D68ccEb545ed12703D23884213Cb5C',
  },
  {
    id: 5,
    icon: require('@theme/assets/images/icons/coins/btc.png'),
    name: 'BTC',
    token: 'Bitcoin',
    description: 'TEST SAMPLE WALLET',
    address: '0x916363bd905a833d2a9fd84271f91adf7a6cbb26',
  },
  {
    id: 6,
    icon: require('@theme/assets/images/icons/coins/dash.png'),
    name: 'DASH',
    token: 'Dash',
    description: 'TEST SAMPLE WALLET',
    address: '0x916363bd905a833d2a9fd84271f91adf7a6cbb26',
  },
  {
    id: 7,
    icon: require('@theme/assets/images/icons/coins/zone.png'),
    name: 'ZONE',
    token: 'Zone Coin',
    description: 'TEST SAMPLE ZONE COIN',
    address: '0x916363bd905a833d2a9fd84271f91adf7a6cbb26',
  },
  {
    id: 8,
    icon: require('@theme/assets/images/icons/coins/dba.png'),
    name: 'DBA',
    token: 'DBA',
    description: 'TEST DBA SAMPLE WALLET',
    address: '0x916363bd905a833d2a9fd84271f91adf7a6cbb26',
  },
];

const WalletList = () => {
  const { Layout, Gutters } = useTheme();
  const windowLayout = useWindowDimensions();
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Gutters.tinyVPadding,
              Layout.fullWidth,
            ]}
          >
            <Image source={item.icon} style={styles.icon} />
            <View>
              <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
                <View style={[Layout.rowHCenter]}>
                  <Text ml={5} weight="bold">
                    {item.name}
                  </Text>
                  <Text ml={5} color="textGray200">
                    {item.token}
                  </Text>
                </View>
              </View>
              <View style={[Gutters.smallVPadding]}>
                <Text weight="medium">{item.description}</Text>
              </View>
              <Text
                style={{ width: windowLayout.width - 80 }}
                color="textGray200"
              >
                {item.address}
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="trash" color="white" size={16} />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default WalletList;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useTheme } from '@hooks';
import { Text } from '@components';
import { CasaStackScreenProps } from 'types/navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Cash = ({ route }: CasaStackScreenProps) => {
  const { Layout, Colors, Gutters, Images } = useTheme();
  const [tab, setTab] = useState<
    | 'deposit'
    | 'withdrawal'
    // 'fiat' |
    | 'transfer'
  >('deposit');

  return (
    <View
      style={[Layout.container, Gutters.tinyHPadding, Gutters.smallTPadding]}
    >
      {/* Tabs */}
      <View
        style={[
          Gutters.tinyVPadding,
          Gutters.smallHPadding,
          Layout.rowHCenter,
          Layout.justifyContentBetween,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: Colors.backgroundHighlight,
            borderRadius: 8,
            borderColor: Colors.borderHighlight,
            borderWidth: 1,
          },
        ]}
      >
        <TouchableOpacity
          style={[Layout.alignItemsCenter]}
          onPress={() => setTab('deposit')}
        >
          <Image
            source={Images.icons.deposit}
            style={{ width: 25, height: 25 }}
          />
          <Text uppercase size="tiny" weight="bold" mt={10}>
            deposit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Layout.alignItemsCenter]}
          onPress={() => setTab('withdrawal')}
        >
          <Image source={Images.icons.withdrawAlt} />
          <Text uppercase size="tiny" weight="bold" mt={10}>
            Withdrawal
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[Layout.alignItemsCenter]}
          onPress={() => setTab('fiat')}
        >
          <Image source={Images.icons.fiatAlt} />
          <Text uppercase size="tiny" weight="bold" mt={10}>
            Fiat
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={[Layout.alignItemsCenter]}
          onPress={() => setTab('transfer')}
        >
          <Image source={Images.icons.transfer} />
          <Text uppercase size="tiny" weight="bold" mt={10}>
            Transfer
          </Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView>
        {/* title */}
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
            Gutters.smallTMargin,
          ]}
        >
          <View />
          <Text uppercase weight="bold" size="medium">
            {tab}
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        {/* Asset Card */}
        <View
          style={[
            Gutters.smallTMargin,
            Gutters.tinyHMargin,
            Gutters.tinyPadding,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: Colors.backgroundHighlight,
              borderRadius: 8,
              borderColor: '#FA651444',
              borderWidth: 1,
            },
          ]}
        >
          <View style={[Layout.justifyContentBetween, Layout.rowHCenter]}>
            <View style={[Layout.rowHCenter]}>
              <Image
                source={Images.coins.btc}
                style={{ width: 40, height: 40 }}
              />
              <View style={[Gutters.tinyLMargin]}>
                <Text weight="bold" size="small" mt={5} color="gold">
                  BTC
                </Text>
                <Text size="tiny" mt={5} color="textGray200" weight="light">
                  BITCOIN
                </Text>
              </View>
              <TouchableOpacity style={[Gutters.tinyLMargin]}>
                <Ionicons name="chevron-forward" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View style={[Layout.alignItemsEnd]}>
              <Text>1</Text>
              <Text>$45500.00</Text>
            </View>
          </View>
          <View
            style={[
              Gutters.smallTMargin,
              Gutters.tinyHPadding,
              Gutters.tinyBMargin,
            ]}
          >
            <View
              style={[
                Layout.rowHCenter,
                Layout.justifyContentBetween,
                Gutters.tinyTMargin,
              ]}
            >
              <Text>Available</Text>
              <Text>0</Text>
            </View>
            <View
              style={[
                Layout.rowHCenter,
                Layout.justifyContentBetween,
                Gutters.tinyTMargin,
              ]}
            >
              <Text>Freeze</Text>
              <Text>0</Text>
            </View>
          </View>
        </View>

        {tab === 'deposit' && <Deposit />}
        {tab === 'withdrawal' && <Withdraw />}
      </ScrollView>
    </View>
  );
};

export default Cash;

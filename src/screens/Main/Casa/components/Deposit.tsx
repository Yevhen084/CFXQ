import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@hooks';
import { Text } from '@components';

const Deposit = () => {
  const { Layout, Gutters, Colors } = useTheme();
  return (
    <View
      style={[
        Layout.alignItemsCenter,
        Gutters.smallTMargin,
        Gutters.tinyHPadding,
      ]}
    >
      <View
        style={[
          Gutters.tinyPadding,
          Gutters.smallVMargin,
          { shadowColor: Colors.highlight, backgroundColor: Colors.white },
          styles.shadow,
        ]}
      >
        <Image source={require('@theme/assets/images/qrcode-sample.png')} />
      </View>

      <TouchableOpacity
        style={[
          Gutters.smallVMargin,
          Gutters.tinyVPadding,
          Gutters.smallHPadding,
          { backgroundColor: Colors.background, shadowColor: Colors.highlight },
          styles.shadow,
        ]}
      >
        <Text uppercase color="highlight" weight="bold">
          Save QR Code
        </Text>
      </TouchableOpacity>

      <View style={[Layout.alignItemsCenter, Gutters.smallVMargin]}>
        <Text color="textGray200" mb={10}>
          Deposit Address
        </Text>
        <Text weight="bold">aqerasdfklxusisdfafasdfwelkqi1234olkjasdc</Text>
      </View>

      <TouchableOpacity
        style={[
          Gutters.smallVMargin,
          Gutters.tinyVPadding,
          Gutters.smallHPadding,
          { backgroundColor: Colors.background, shadowColor: Colors.highlight },
          styles.shadow,
        ]}
      >
        <Text uppercase color="highlight" weight="bold">
          Copy Address
        </Text>
      </TouchableOpacity>

      <View style={[{ backgroundColor: Colors.textGray400 }, styles.divider]} />

      <View>
        <Text color="textGray200" weight="bold" mb={10}>
          Please don't depost any other digital asset except{' '}
          <Text color="highlight" weight="bold">
            BTC
          </Text>{' '}
          to the above address.
        </Text>

        <Text color="textGray200" weight="bold" mb={10}>
          Minimum deposit:{' '}
          <Text weight="bold" color="highlight">
            0.005BTC.
          </Text>
        </Text>

        <Text color="textGray200" weight="bold" mb={40}>
          Deposits less than the minimum amount will not be credited or
          refunded.
        </Text>
      </View>
    </View>
  );
};

export default Deposit;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8.0,
    elevation: 13,
    borderRadius: 10,
  },
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 20,
  },
});

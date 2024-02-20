import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@hooks';
import { Text, TextInput } from '@components';

const Withdraw = () => {
  const { Layout, Gutters, Colors } = useTheme();
  return (
    <View style={[Gutters.smallTMargin, Gutters.tinyHPadding]}>
      <TextInput
        label="Address"
        placeholder="Wallet address"
        placeholderTextColor={Colors.textGray200}
      />
      <TextInput
        label="Amount"
        placeholder="MIN 0.003"
        placeholderTextColor={Colors.textGray200}
      />
      <Text color="textGray200" size="tiny" mt={10} ml={5}>
        Available: 1 BTC
      </Text>
      <View
        style={[
          styles.feeDynamic,
          { borderColor: Colors.borderColor },
          Layout.rowHCenter,
          Layout.justifyContentBetween,
          Gutters.tinyVPadding,
          Gutters.smallTMargin,
        ]}
      >
        <Text weight="bold" color="highlight">
          FEE Dynamic
        </Text>
        <Text weight="bold">BTC</Text>
      </View>
      <View
        style={[
          Gutters.smallVPadding,
          // eslint-disable-next-line react-native/no-inline-styles
          { borderBottomWidth: 1, borderBottomColor: Colors.borderColor },
        ]}
      >
        <Text lineHeight={24} color="textGray200" weight="bold">
          FEE Dynamic means that the transaction cost depends on the network
          congestion, it can be higher or lower depending on the moments and not
          on CFX. We always apply the minimum + 0.1% (one per thousand) per
          transaction
        </Text>
      </View>

      <View style={[Gutters.smallTMargin]}>
        <Text color="textGray200" weight="bold" mb={5}>
          Mininmum Withdrawal amount:{' '}
          <Text color="highlight" weight="bold">
            0.003BTC
          </Text>
        </Text>
        <Text color="textGray200" weight="bold" mb={10}>
          Please check tag carefully, otherwise you may lose it permanently
        </Text>

        <Text color="textGray200" weight="bold" mb={10}>
          BTC miner will change the packaging fee when you withdraw.
        </Text>

        <Text color="textGray200" weight="bold" mb={40}>
          (Packaging fee is dynamic, depends on blockchain congestion, sometimes
          maybe higher)
        </Text>
      </View>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  feeDynamic: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

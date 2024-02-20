import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ListRenderItem,
} from 'react-native';
import { Text } from '@components';
import { useTheme } from '@hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import SummaryCard from './SummaryCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { Balance } from 'types/main';
import { useAppSelector, useCurrency } from '@hooks';

type AssetListProps = {
  tokens: Balance[];
};

const AssetList = ({ tokens }: AssetListProps) => {
  const { Layout, Gutters, Images, Colors } = useTheme();
  const bottomTabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const { tokenTypes, user } = useAppSelector(state => state.app);
  const currency = useCurrency();

  const onPressItem = (asset: Balance) => {
    navigation.navigate('Asset' as never, { asset });
  };

  const renderItem: ListRenderItem<Balance> = ({ item }) => {
    const image = Images.coins.hasOwnProperty(
      item.tokenType.shortName.toLowerCase(),
    )
      ? Images.coins[item.tokenType.shortName.toLocaleLowerCase()]
      : null;
    const token = tokenTypes.find(token => token.id === item.tokenType.id);
    const prefferedCurrency = user?.preferredCurrency;
    const priceObject = token?.tokenPrices.find(
      p =>
        p.currencyTo.toLowerCase() === prefferedCurrency?.toLocaleLowerCase(),
    );

    const unitPrice = priceObject ? priceObject.unitValue : 0;
    const price = `${currency.symbol}${unitPrice * item.total}`;

    return (
      <TouchableOpacity
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
          Gutters.tinyVPadding,
          Gutters.tinyHPadding,
        ]}
        onPress={() => onPressItem(item)}
      >
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Image source={image} style={styles.coinIcon} />
          <View style={[Gutters.tinyLMargin]}>
            <Text weight="medium">{item.tokenType.shortName}</Text>
            <Text color="textGray400" weight="regular" mt={2}>
              {item.tokenType.fullName}
            </Text>
          </View>
        </View>
        <View style={[Layout.alignItemsEnd]}>
          <Text weight="medium">{item.total}</Text>
          <Text color="textGray200" weight="regular" mt={2}>
            {`= ${price}`}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={tokens}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={
        <>
          <SummaryCard tokens={tokens} />
          <View
            style={[
              Layout.row,
              Layout.alignItemsCenter,
              Layout.justifyContentBetween,
              Gutters.smallHPadding,
              Gutters.smallVMargin,
            ]}
          >
            <View style={[Layout.row, Layout.alignItemsCenter]}>
              <CheckBox
                disabled={false}
                value={false}
                onValueChange={newValue => console.log(newValue)}
                style={styles.checkbox}
              />
              <TouchableOpacity>
                <Text color="highlight" ml={5}>
                  Nascondi Saldi O
                </Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity>
              <Ionicons
                name="add-circle-outline"
                color={Colors.textGray500}
                size={24}
              />
            </TouchableOpacity> */}
          </View>
        </>
      }
      contentContainerStyle={{
        paddingBottom: bottomTabBarHeight,
      }}
    />
  );
};

export default AssetList;

const styles = StyleSheet.create({
  coinIcon: {
    width: 32,
    height: 32,
  },
  checkbox: {
    width: 16,
    height: 16,
  },
});

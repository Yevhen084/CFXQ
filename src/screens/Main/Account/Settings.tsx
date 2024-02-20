/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from '@hooks';
import { Text } from '@components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

const LANGUAGES = [
  {
    label: 'Italiano',
    value: 'Italiano',
  },
  {
    label: 'English',
    value: 'English',
  },
  {
    label: 'Spain',
    value: 'Spain',
  },
];

const CURRENCIES = [
  {
    label: 'USD',
    value: 'USD',
  },
  {
    label: 'EUR',
    value: 'EUR',
  },
  {
    label: 'GBP',
    value: 'GBP',
  },
];

const Settings = () => {
  const { Layout, Colors, Gutters, Fonts } = useTheme();
  const [language, setLanguage] = useState('Italiano');
  const [currency, setCurrency] = useState('EUR');

  return (
    <View
      style={[Layout.container, Gutters.smallHPadding, Gutters.smallTPadding]}
    >
      <View style={{ borderTopWidth: 1, borderTopColor: Colors.textGray400 }}>
        <View
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
        >
          <Text>Lingua</Text>
          <View style={[Layout.rowHCenter]}>
            <RNPickerSelect
              onValueChange={value => setLanguage(value)}
              items={LANGUAGES}
              value={language}
              style={{
                inputIOS: {
                  color: Colors.textGray200,
                  ...Fonts.fontMedium,
                  fontWeight: 'bold',
                },
                inputAndroid: {
                  color: Colors.textGray200,
                  ...Fonts.fontMedium,
                  fontWeight: 'bold',
                },
              }}
            />
            <Ionicons name="chevron-forward" color="white" size={20} />
          </View>
        </View>
      </View>
      <View
        style={[
          Layout.rowHCenter,
          Layout.justifyContentBetween,
          Gutters.smallVPadding,
          { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
        ]}
      >
        <Text>Unità di valuta</Text>
        <View style={[Layout.rowHCenter]}>
          <RNPickerSelect
            onValueChange={value => setCurrency(value)}
            items={CURRENCIES}
            value={currency}
            style={{
              inputIOS: {
                color: Colors.textGray200,
                ...Fonts.fontMedium,
                fontWeight: 'bold',
              },
              inputAndroid: {
                color: Colors.textGray200,
                ...Fonts.fontMedium,
                fontWeight: 'bold',
              },
            }}
          />
          <Ionicons name="chevron-forward" color="white" size={20} />
        </View>
      </View>
    </View>
  );
};

export default Settings;

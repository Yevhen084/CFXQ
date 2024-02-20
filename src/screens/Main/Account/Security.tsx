/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '@hooks';
import { Text } from '@components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '@hooks';
import { AccountStackScreenProps } from 'types/navigation';

const Account = ({ navigation } : AccountStackScreenProps) => {
  const { Layout, Colors, Gutters } = useTheme();
  const { user } = useAppSelector(state => state.app);

  return (
    <View
      style={[Layout.container, Gutters.smallHPadding, Gutters.smallTPadding]}
    >
      <View style={{ borderTopWidth: 1, borderTopColor: Colors.textGray400 }}>
        <TouchableOpacity
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
        >
          <Text>KYC</Text>
          <View style={[Layout.rowHCenter]}>
            <Text color="highlight" weight="bold" size="tiny">
              Non verificato
            </Text>
            <Ionicons name="chevron-forward" color="white" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
          onPress={() => navigation.navigate("VerifyEmail")}
        >
          <Text>Email</Text>
          <View style={[Layout.rowHCenter]}>
            <Text color="highlight" weight="bold" size="tiny">
              Non verificato
            </Text>
            <Ionicons name="chevron-forward" color="white" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
          onPress={() => navigation.navigate("VerifyPhone")}
        >
          <Text>Telefono</Text>
          <View style={[Layout.rowHCenter]}>
            <Text color="highlight" weight="bold" size="tiny">
              Non verificato
            </Text>
            <Ionicons name="chevron-forward" color="white" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
        >
          <Text>Google Authenticator</Text>
          <View style={[Layout.rowHCenter]}>
            <Text color="highlight" weight="bold" size="tiny">
              Non verificato
            </Text>
            <Ionicons name="chevron-forward" color="white" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

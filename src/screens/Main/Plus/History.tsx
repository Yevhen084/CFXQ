import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@hooks';
import { Text, Divider } from '@components';
import { numnber2LocaleString } from '@utils';
import { ScrollView } from 'react-native-gesture-handler';

const History = () => {
  const { Layout, Gutters, Colors } = useTheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.card, Gutters.smallBMargin, Gutters.smallPadding]}>
        <View>
          <Text color="error" weight="bold">
            Stake
          </Text>
        </View>
        <Divider />

        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
          <Text style={{ flex: 1 }} align="left" color="error">
            DATA
          </Text>
          <Text style={{ flex: 1 }} align="center" color="error">
            QUANTITÀ
          </Text>
          <Text style={{ flex: 1 }} align="right" color="error">
            STATUS
          </Text>
        </View>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.tinyTMargin,
          ]}
        >
          <Text style={{ flex: 1 }} weight="bold">
            2021/07/16 20:54
          </Text>
          <Text style={{ flex: 1 }} align="center" weight="bold">
            {numnber2LocaleString(1000)}
          </Text>
          <Text style={{ flex: 1 }} align="right" weight="bold">
            SUCCESSO
          </Text>
        </View>
      </View>

      <View style={[styles.card, Gutters.smallBMargin, Gutters.smallPadding]}>
        <View>
          <Text color="error" weight="bold">
            Sblocca il Settlement
          </Text>
        </View>
        <Divider />

        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
          <Text style={{ flex: 1 }} align="left" color="error">
            DATA
          </Text>
          <Text style={{ flex: 1 }} align="center" color="error">
            QUANTITÀ
          </Text>
          <Text style={{ flex: 1 }} align="right" color="error">
            STATUS
          </Text>
        </View>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.tinyTMargin,
          ]}
        >
          <Text style={{ flex: 1 }} weight="bold">
            2021/07/16 20:54
          </Text>
          <Text style={{ flex: 1 }} align="center" weight="bold">
            {numnber2LocaleString(1000)}
          </Text>
          <Text style={{ flex: 1 }} align="right" weight="bold">
            SUCCESSO
          </Text>
        </View>
      </View>

      <View style={[styles.card, Gutters.smallBMargin, Gutters.smallPadding]}>
        <View>
          <Text color="error" weight="bold">
            Sblocca
          </Text>
        </View>
        <Divider />

        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
          <Text style={{ flex: 1 }} align="left" color="error">
            DATA
          </Text>
          <Text style={{ flex: 1 }} align="center" color="error">
            QUANTITÀ
          </Text>
          <Text style={{ flex: 1 }} align="right" color="error">
            STATUS
          </Text>
        </View>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.tinyTMargin,
          ]}
        >
          <Text style={{ flex: 1 }} weight="bold">
            2021/07/16 20:54
          </Text>
          <Text style={{ flex: 1 }} align="center" weight="bold">
            {numnber2LocaleString(1000)}
          </Text>
          <Text style={{ flex: 1 }} align="right" weight="bold">
            SUCCESSO
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#171A23',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A3363D',
  },
});

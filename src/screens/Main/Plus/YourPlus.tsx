import React from 'react'
import { StyleSheet, View, ScrollView, Image } from 'react-native'
import { Text, Divider } from '@components'
import { useTheme } from '@hooks';
import { numnber2LocaleString } from '@utils';

const YourPlus = () => {

  const { Layout, Gutters, Colors, Images } = useTheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[Gutters.smallBMargin]}>
        <Text color="error" uppercase weight='bold'>Plus</Text>
        <Text weight='bold' uppercase mt={10}>PLUS SULL'IMPORTO DI ZEROONE IN STAKING</Text>
        <Text weight='bold' mt={10}>
          Gli ZEROONE PLUS del mese in corso vengono visualizzati a partire dal primo giorno di staking.
        </Text>
        <Text weight='bold' mt={10}>Sono aggiornati ogni giorno.</Text>
      </View>
      <Divider  />

      <View style={[Gutters.tinyTMargin, Gutters.tinyHPadding, Gutters.smallBMargin]}>
        <Text color="error" uppercase weight='bold'>Plus</Text>
        <View style={[styles.card, Gutters.smallPadding, Gutters.tinyTMargin]}>
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyVPadding]}>
            <Text weight='bold'>Saldo stake</Text>
            <Text weight='bold'>{numnber2LocaleString(1000)}</Text>
          </View>
          <Divider />
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyVPadding]}>
            <Text weight='bold'>Compound</Text>
            <Text weight="bold">{numnber2LocaleString(260.468)}</Text>
          </View>
          <Divider />
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyVPadding]}>
            <Text weight='bold'>Totale in staking</Text>
            <Text weight="bold">{numnber2LocaleString(1260.468)}</Text>
          </View>
          <Divider />
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyVPadding]}>
            <Text weight='bold'>Plus questo mese</Text>
            <Text weight="bold">{numnber2LocaleString(7.319)}</Text>
          </View>
          <Divider />
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyVPadding]}>
            <Text weight='bold'>Zone liberi</Text>
            <Text weight="bold">{numnber2LocaleString(33.929)}</Text>
          </View>
        </View>
      </View>
      <Divider  />

      <View style={[Gutters.tinyVPadding]}>
        <View style={[Layout.rowHCenter]}>
          <Image source={Images.icons.zerooneToken} />
          <Text ml={20} weight='bold'>Totale ZONE = {numnber2LocaleString(1301.716)}</Text>
        </View>

        <View style={[Layout.row, Gutters.smallTMargin]}>
          <Image source={Images.icons.returns} />
          <View style={[Gutters.smallLMargin]}>
            <Text weight='bold'>Prossima versione</Text>
            <Text weight='bold' mt={10}>Data prossimo plus = 01/09/2023</Text>
            <Text color="error" mt={10}>GUIDA ALLO STAKING</Text>
          </View>
        </View>
      </View>
      <Divider  />

      <View style={[Gutters.tinyVPadding]}>
        <Text uppercase color="error">Records</Text>

        <View style={[styles.card, Gutters.smallTMargin, Gutters.smallPadding, Gutters.smallBMargin]}>
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyBMargin]}>
            <View>
              <Text weight="bold" size="regular"># CYCLE #30</Text>
              <Text color="textGray200">2023-06-01</Text>
            </View>
            <Text color="error">Compound Interest</Text>
          </View>
          <Divider  />

          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyTMargin]}>
            <Image source={Images.icons.zerooneToken} />
            <Text weight='bold'>12.356 ZONE</Text>
          </View>
        </View>

        <View style={[styles.card, Gutters.smallTMargin, Gutters.smallPadding,  Gutters.smallBMargin]}>
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyBMargin]}>
            <View>
              <Text weight="bold" size="regular"># CYCLE #30</Text>
              <Text color="textGray200">2023-06-01</Text>
            </View>
            <Text color="error">Compound Interest</Text>
          </View>
          <Divider  />

          <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.tinyTMargin]}>
            <Image source={Images.icons.zerooneToken} />
            <Text weight='bold'>12.356 ZONE</Text>
          </View>
        </View>
        
      </View>



    </ScrollView>
  )
}

export default YourPlus

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#171A23",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A3363D',
    shadowColor: "#C0444F",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,

    elevation: 16,
  }
})
import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, useWindowDimensions, } from 'react-native'
import { Text } from '@components';
import { useTheme } from '@hooks';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Staking from './Staking';
import History from './History';
import YourPlus from './YourPlus';

const renderScene = SceneMap({
  staking: Staking,
  plus: YourPlus,
  history: History
});

const Plus = () => {

  const { Layout, Gutters, Colors, Images } = useTheme();
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();

  const [routes] = React.useState([
    { key: 'staking', title: 'Staking' },
    { key: 'plus', title: 'Il Tuo Plus' },
    { key: 'history', title: 'Storico' },
  ]);

  return (
    <View style={[Layout.container, Gutters.tinyHPadding]}>
      <SafeAreaView style={[Layout.fill]}>
        <View style={[Layout.alignItemsEnd]}>
          <Image source={Images.main.zerooneCal}  />
        </View>
        <View style={[Layout.alignItemsCenter]}>
          <Image source={Images.main.zerooneLogo}  />
        </View> 

        {/* Tab */}
        <View style={[Layout.fill, Gutters.smallTMargin]}>
          <TabView
            renderTabBar={props => (
              <TabBar
                {...props}
                indicatorStyle={styles.tabBarIndicatorStyle}
                style={styles.tabBarStyle}
                renderLabel={({ route, focused }) => (
                  <Text
                    color={focused ? 'error' : 'textGray200'}
                    uppercase
                    weight="semibold"
                  >
                    {route.title}
                  </Text>
                )}
              />
            )}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Plus

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'transparent',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#515156',
    marginBottom: 16
  },
  tabBarIndicatorStyle: {
    backgroundColor: 'transparent',
  },
})
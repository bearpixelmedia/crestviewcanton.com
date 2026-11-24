import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Platform, StyleSheet, Text, type ColorValue } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabHeader } from '@/components/TabHeader';
import { colors, fonts } from '@/constants/theme';

// The tab bar has a fixed content height, so Android's font scaling (users can push
// it to 2x) would grow this 10pt label past its 14pt line box and out of the bar.
// Capping it at 1.2x keeps the icon + label block at ~47pt inside the 50pt content
// area while still honouring a modest accessibility increase.
const TAB_LABEL_MAX_SCALE = 1.2;

function TabLabel({ label, color }: { label: string; color: ColorValue }) {
  return (
    <Text
      maxFontSizeMultiplier={TAB_LABEL_MAX_SCALE}
      numberOfLines={1}
      style={[styles.tabLabel, { color }]}
    >
      {label}
    </Text>
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.canopy,
        tabBarInactiveTintColor: '#7b8c83',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.hairline,
          borderTopWidth: StyleSheet.hairlineWidth * 2,
          height: 66 + insets.bottom,
          paddingTop: 8,
          paddingBottom: insets.bottom + 8,
        },
        tabBarIconStyle: {
          marginBottom: 3,
        },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.paper },
        headerTintColor: colors.pine,
        headerTitleStyle: {
          fontFamily: fonts.display,
          fontSize: 22,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabel: ({ color }) => <TabLabel color={color} label="Home" />,
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'house.fill', android: 'home', web: 'home' }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 25 : 23}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          header: () => <TabHeader title="Calendar" />,
          tabBarLabel: ({ color }) => <TabLabel color={color} label="Calendar" />,
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'calendar', android: 'calendar_month', web: 'calendar_month' }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 25 : 23}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Groups',
          header: () => <TabHeader title="Groups" />,
          tabBarLabel: ({ color }) => <TabLabel color={color} label="Groups" />,
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'person.3.fill', android: 'groups', web: 'groups' }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 25 : 23}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Classes',
          header: () => <TabHeader title="Classes & Events" />,
          tabBarLabel: ({ color }) => <TabLabel color={color} label="Classes" />,
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'book.fill', android: 'menu_book', web: 'menu_book' }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 25 : 23}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          headerShown: false,
          tabBarLabel: ({ color }) => <TabLabel color={color} label="More" />,
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'ellipsis.circle.fill', android: 'more_horiz', web: 'more_horiz' }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 25 : 23}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    marginTop: 2,
    fontFamily: fonts.semibold,
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.4,
  },
});

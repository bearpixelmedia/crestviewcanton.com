import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { brand } from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: brand.canopy,
        tabBarInactiveTintColor: '#6a7d74',
        tabBarStyle: {
          backgroundColor: brand.white,
          borderTopColor: brand.fog,
        },
        headerStyle: { backgroundColor: brand.paper },
        headerTintColor: brand.pine,
        headerTitleStyle: {
          fontFamily: 'CormorantGaramond_600SemiBold',
          fontSize: 22,
        },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'house.fill',
                android: 'home',
                web: 'home',
              }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 26 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'person.3.fill',
                android: 'groups',
                web: 'groups',
              }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 26 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'calendar',
                android: 'calendar_month',
                web: 'calendar_month',
              }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 26 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Classes',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'book.fill',
                android: 'menu_book',
                web: 'menu_book',
              }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 26 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'ellipsis.circle.fill',
                android: 'more_horiz',
                web: 'more_horiz',
              }}
              tintColor={color}
              size={Platform.OS === 'ios' ? 26 : 24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

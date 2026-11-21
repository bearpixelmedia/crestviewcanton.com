import {
  CormorantGaramond_600SemiBold,
  CormorantGaramond_700Bold,
} from '@expo-google-fonts/cormorant-garamond';
import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
} from '@expo-google-fonts/manrope';
import { useFonts } from 'expo-font';
import { Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { brand } from '@/constants/Colors';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  anchor: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

const CrestviewTheme = {
  dark: false as const,
  colors: {
    primary: brand.canopy,
    background: brand.paper,
    card: brand.white,
    text: brand.ink,
    border: brand.fog,
    notification: brand.dawn,
  },
  fonts: {
    regular: {
      fontFamily: 'Manrope_400Regular',
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: 'Manrope_500Medium',
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: 'Manrope_600SemiBold',
      fontWeight: '600' as const,
    },
    heavy: {
      fontFamily: 'Manrope_600SemiBold',
      fontWeight: '700' as const,
    },
  },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    CormorantGaramond_600SemiBold,
    CormorantGaramond_700Bold,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={CrestviewTheme}>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="about"
          options={{
            presentation: 'modal',
            title: 'About',
            headerTintColor: brand.pine,
            headerStyle: { backgroundColor: brand.paper },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

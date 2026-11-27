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

import { colors, fonts } from '@/constants/theme';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  anchor: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

const CrestviewTheme = {
  dark: false as const,
  colors: {
    primary: colors.canopy,
    background: colors.paper,
    card: colors.white,
    text: colors.ink,
    border: colors.hairline,
    notification: colors.dawn,
  },
  fonts: {
    regular: {
      fontFamily: fonts.body,
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: fonts.medium,
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: fonts.semibold,
      fontWeight: '600' as const,
    },
    heavy: {
      fontFamily: fonts.displayBold,
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
      <Stack screenOptions={{ contentStyle: { backgroundColor: colors.paper } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="about"
          options={{
            presentation: 'modal',
            headerShown: false,
            contentStyle: { backgroundColor: colors.paper },
          }}
        />
        <Stack.Screen
          name="church-center"
          options={{
            presentation: 'modal',
            headerShown: false,
            contentStyle: { backgroundColor: colors.paper },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

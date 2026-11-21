import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { brand } from '@/constants/Colors';
import { config } from '@/constants/config';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={styles.brand}>{config.churchName}</Text>
        <Text style={styles.body}>
          This app is a branded shell for staff and members. Calendar, groups,
          and class signup open Planning Center Church Center inside the app.
          Give, livestream, and staff pages open crestviewcanton.com (or the
          linked giving provider).
        </Text>

        <Text style={styles.section}>Church Center</Text>
        <Text style={styles.body}>
          Org URL in use: {config.churchCenterRoot}
        </Text>
        <Text style={styles.body}>
          Staff: sign in at planningcenter.com for admin. Members use Church
          Center with the same org URL. If calendar or groups look empty,
          confirm the slug with Byron and set EXPO_PUBLIC_CHURCH_CENTER_URL.
        </Text>

        <Text style={styles.section}>Built by</Text>
        <Pressable
          accessibilityRole="link"
          onPress={() => void Linking.openURL(config.bearPixel.url)}
        >
          <Text style={styles.credit}>{config.bearPixel.name}</Text>
        </Pressable>
        <Text style={styles.muted}>{config.bearPixel.url}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: brand.paper,
  },
  content: {
    padding: 24,
    gap: 12,
  },
  brand: {
    fontFamily: 'CormorantGaramond_700Bold',
    fontSize: 32,
    color: brand.pine,
  },
  section: {
    marginTop: 12,
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: brand.canopy,
  },
  body: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: brand.ink,
  },
  credit: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 18,
    color: brand.canopy,
    textDecorationLine: 'underline',
  },
  muted: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    color: '#4a5c54',
  },
});

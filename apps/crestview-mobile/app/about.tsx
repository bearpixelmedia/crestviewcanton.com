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
          This app is a branded shell for staff and class members. Calendar,
          groups, class signup, and the directory open Planning Center Church
          Center inside the app. Give, livestream, and staff pages open
          crestviewcanton.com or the linked giving provider.
        </Text>

        <Text style={styles.section}>Church Center paths</Text>
        {config.churchCenterConfigured ? (
          <>
            <Text style={styles.body}>
              Calendar: {config.churchCenter.calendar}
            </Text>
            <Text style={styles.body}>Groups: {config.churchCenter.groups}</Text>
            <Text style={styles.body}>
              Classes: {config.churchCenter.registrations}
            </Text>
            <Text style={styles.body}>
              The calendar, groups, and class listings are public. Signing in,
              joining a group, registering, and the directory need a Church
              Center login. The app keeps that cookie session across tabs.
            </Text>
          </>
        ) : (
          <Text style={styles.body}>
            Not configured. Set EXPO_PUBLIC_CHURCH_CENTER_URL in .env to the
            Canton Planning Center org and restart the app. Church Center does
            not load until it is set.
          </Text>
        )}

        <Text style={styles.section}>Org URL in use</Text>
        <Text style={styles.body}>
          {config.churchCenterConfigured
            ? config.churchCenterRoot
            : 'None. This build has no Church Center org.'}
        </Text>
        <Text style={styles.body}>
          Church Center is the member facing side. Staff create events, groups,
          and registrations in Planning Center Online. Before distributing a
          build, confirm this org URL belongs to Crestview in Canton, NC.
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

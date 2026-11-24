import { Link } from 'expo-router';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { BrandLockup } from '@/components/BrandLockup';
import { Screen } from '@/components/Screen';
import { brand } from '@/constants/Colors';
import { config } from '@/constants/config';

type QuickLink = {
  label: string;
  description: string;
  url: string;
};

const quickLinks: QuickLink[] = [
  {
    label: 'Give Online',
    description: 'Partner with Crestview through MyVanco giving.',
    url: config.giveUrl,
  },
  {
    label: 'Watch Live',
    description: 'Join Sunday worship when we broadcast online.',
    url: config.liveUrl,
  },
  {
    label: 'Our Staff',
    description: 'Meet the ministry and facility team.',
    url: config.staffUrl,
  },
];

export default function HomeScreen() {
  return (
    <Screen subtitle={config.tagline}>
      <BrandLockup />

      <View style={styles.heroBand}>
        <Text style={styles.heroEyebrow}>REACH · EQUIP · SEND</Text>
        <Text style={styles.heroBody}>
          Groups, the church calendar, class signup, and the directory live in
          Church Center. Use the tabs below or open Church Center here.
        </Text>
      </View>

      <Link href="/church-center" asChild>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.primaryCard,
            pressed && styles.linkRowPressed,
          ]}
        >
          <View style={styles.linkCopy}>
            <Text style={styles.primaryTitle}>Church Center</Text>
            <Text style={styles.primaryBody}>
              Sign in once for groups, directory, and everything else Church
              Center offers.
            </Text>
          </View>
          <Text style={styles.primaryChevron}>›</Text>
        </Pressable>
      </Link>

      <Text style={styles.sectionLabel}>At Crestview</Text>
      {quickLinks.map((item) => (
        <Pressable
          key={item.label}
          accessibilityRole="link"
          onPress={() => void Linking.openURL(item.url)}
          style={({ pressed }) => [
            styles.linkRow,
            pressed && styles.linkRowPressed,
          ]}
        >
          <View style={styles.linkCopy}>
            <Text style={styles.linkTitle}>{item.label}</Text>
            <Text style={styles.linkBody}>{item.description}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </Pressable>
      ))}

      <Link href="/about" asChild>
        <Pressable
          style={({ pressed }) => [
            styles.aboutLink,
            pressed && styles.linkRowPressed,
          ]}
        >
          <Text style={styles.aboutText}>About this app</Text>
        </Pressable>
      </Link>

      <View style={styles.credit}>
        <Text style={styles.creditText}>Built by </Text>
        <Pressable
          accessibilityRole="link"
          onPress={() => void Linking.openURL(config.bearPixel.url)}
        >
          <Text style={styles.creditLink}>{config.bearPixel.name}</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heroBand: {
    backgroundColor: brand.pine,
    padding: 20,
    gap: 10,
    borderRadius: 2,
  },
  heroEyebrow: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 12,
    letterSpacing: 2,
    color: brand.goldSoft,
  },
  heroBody: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: brand.fog,
  },
  sectionLabel: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: brand.canopy,
    marginTop: 8,
  },
  primaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: brand.canopy,
    paddingVertical: 18,
    paddingHorizontal: 18,
    gap: 12,
  },
  primaryTitle: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 24,
    color: brand.white,
  },
  primaryBody: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: brand.fog,
  },
  primaryChevron: {
    fontSize: 28,
    lineHeight: 28,
    color: brand.goldSoft,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: brand.white,
    borderWidth: 1,
    borderColor: brand.fog,
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 12,
  },
  linkRowPressed: {
    opacity: 0.75,
  },
  linkCopy: {
    flex: 1,
    gap: 4,
  },
  linkTitle: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 17,
    color: brand.pine,
  },
  linkBody: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#4a5c54',
  },
  chevron: {
    fontSize: 28,
    color: brand.leaf,
    lineHeight: 28,
  },
  aboutLink: {
    marginTop: 8,
    paddingVertical: 12,
  },
  aboutText: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 15,
    color: brand.canopy,
    textDecorationLine: 'underline',
  },
  credit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: brand.fog,
  },
  creditText: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 13,
    color: '#4a5c54',
  },
  creditLink: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 13,
    color: brand.canopy,
    textDecorationLine: 'underline',
  },
});

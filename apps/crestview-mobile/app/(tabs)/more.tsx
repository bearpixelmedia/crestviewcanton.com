import { useRouter } from 'expo-router';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Screen } from '@/components/Screen';
import { brand } from '@/constants/Colors';
import { config } from '@/constants/config';

type Row = {
  label: string;
  onPress: () => void;
};

export default function MoreScreen() {
  const router = useRouter();
  const rows: Row[] = [
    {
      label: 'Church website',
      onPress: () => void Linking.openURL(config.websiteUrl),
    },
    {
      label: 'Give Online',
      onPress: () => void Linking.openURL(config.giveUrl),
    },
    {
      label: 'Livestream',
      onPress: () => void Linking.openURL(config.liveUrl),
    },
    {
      label: 'Our Staff',
      onPress: () => void Linking.openURL(config.staffUrl),
    },
    ...(config.churchCenterConfigured
      ? [
          {
            label: 'Church Center in browser',
            onPress: () => void Linking.openURL(config.churchCenterRoot),
          },
        ]
      : []),
    {
      label: `Call ${config.phone}`,
      onPress: () => void Linking.openURL(`tel:${config.phoneTel}`),
    },
    {
      label: 'Email the office',
      onPress: () => void Linking.openURL(`mailto:${config.email}`),
    },
  ];

  return (
    <Screen subtitle="Church Center, website links, and contact.">
      <View style={styles.list}>
        <Pressable
          onPress={() => router.push('/church-center')}
          style={({ pressed }) => [
            styles.row,
            pressed && styles.rowPressed,
          ]}
        >
          <View style={styles.rowCopy}>
            <Text style={styles.rowLabel}>Church Center</Text>
            <Text style={styles.rowHint}>
              Sign in, directory, and the rest of Church Center
            </Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </Pressable>

        {rows.map((row) => (
          <Pressable
            key={row.label}
            accessibilityRole="button"
            onPress={row.onPress}
            style={({ pressed }) => [
              styles.row,
              pressed && styles.rowPressed,
            ]}
          >
            <Text style={styles.rowLabel}>{row.label}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}

        <Pressable
          onPress={() => router.push('/about')}
          style={({ pressed }) => [
            styles.row,
            pressed && styles.rowPressed,
          ]}
        >
          <Text style={styles.rowLabel}>About this app</Text>
          <Text style={styles.chevron}>›</Text>
        </Pressable>
      </View>

      <Text style={styles.address}>{config.address}</Text>
      <Text style={styles.hint}>
        {config.churchCenterConfigured
          ? `Calendar, groups, and class signup use Planning Center Church Center (${config.churchCenterRoot}). There is no custom Crestview API in this app.`
          : 'Church Center is not set up yet. Set EXPO_PUBLIC_CHURCH_CENTER_URL to the Canton org in .env and restart the app. There is no custom Crestview API in this app.'}
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    borderWidth: 1,
    borderColor: brand.fog,
    backgroundColor: brand.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: brand.fog,
    gap: 10,
  },
  rowPressed: {
    backgroundColor: brand.fog,
  },
  rowCopy: {
    flex: 1,
    gap: 2,
  },
  rowLabel: {
    flex: 1,
    fontFamily: 'Manrope_500Medium',
    fontSize: 16,
    color: brand.pine,
  },
  rowHint: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 13,
    color: '#4a5c54',
  },
  chevron: {
    fontSize: 24,
    color: brand.leaf,
    lineHeight: 24,
  },
  address: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    color: '#4a5c54',
  },
  hint: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: '#4a5c54',
  },
});

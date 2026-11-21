import { Link } from 'expo-router';
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
    {
      label: 'Open Church Center home',
      onPress: () => void Linking.openURL(config.churchCenterRoot),
    },
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
    <Screen
      title="More"
      subtitle="Website links, contact, and app info."
    >
      <View style={styles.list}>
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

        <Link href="/about" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.row,
              pressed && styles.rowPressed,
            ]}
          >
            <Text style={styles.rowLabel}>About this app</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </Link>
      </View>

      <Text style={styles.address}>{config.address}</Text>
      <Text style={styles.hint}>
        Calendar, groups, and class signup use Planning Center Church Center
        ({config.churchCenterRoot}). There is no custom Crestview API in this
        app.
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
  },
  rowPressed: {
    backgroundColor: brand.fog,
  },
  rowLabel: {
    flex: 1,
    fontFamily: 'Manrope_500Medium',
    fontSize: 16,
    color: brand.pine,
  },
  chevron: {
    fontSize: 24,
    color: brand.leaf,
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BrandMark } from '@/components/BrandMark';
import { colors, fonts, layout, tracking } from '@/constants/theme';

type Props = {
  title: string;
};

/** Compact header used above the in-app Church Center pages. */
export function TabHeader({ title }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingTop: insets.top + 10 }]}>
      <StatusBar style="dark" />
      <BrandMark size="sm" showName={false} />
      <View style={styles.copy}>
        <Text style={styles.kicker}>CRESTVIEW</Text>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    paddingHorizontal: layout.gutter,
    paddingBottom: 12,
    backgroundColor: colors.paper,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: colors.hairline,
  },
  copy: {
    flex: 1,
    gap: 1,
  },
  kicker: {
    fontFamily: fonts.semibold,
    fontSize: 8.5,
    letterSpacing: 1.8,
    color: colors.leaf,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 23,
    lineHeight: 26,
    letterSpacing: -0.2,
    color: colors.pine,
  },
});

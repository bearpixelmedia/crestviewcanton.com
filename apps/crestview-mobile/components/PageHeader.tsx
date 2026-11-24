import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BrandMark } from '@/components/BrandMark';
import { colors, fonts, layout, tracking } from '@/constants/theme';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  onClose?: () => void;
};

/** Pine page header used on More / About — the app's take on the site's inner-page hero. */
export function PageHeader({ eyebrow, title, subtitle, onClose }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingTop: insets.top + 14 }]}>
      <StatusBar style="light" />
      <View style={styles.topRow}>
        <BrandMark onDark />
        {onClose ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            onPress={onClose}
            hitSlop={12}
            style={({ pressed }) => [styles.close, pressed ? styles.closePressed : null]}
          >
            <Text style={styles.closeLabel}>Close</Text>
          </Pressable>
        ) : null}
      </View>

      <View style={styles.heading}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <View style={styles.rule} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.pine,
    paddingHorizontal: layout.gutter,
    paddingBottom: 26,
    gap: 22,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  close: {
    minHeight: 34,
    minWidth: 34,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.hairlineOnDark,
  },
  closePressed: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  closeLabel: {
    fontFamily: fonts.semibold,
    fontSize: 12,
    letterSpacing: tracking.label,
    color: colors.fog,
  },
  heading: {
    gap: 8,
  },
  eyebrow: {
    fontFamily: fonts.semibold,
    fontSize: 10.5,
    letterSpacing: tracking.eyebrow,
    color: colors.goldSoft,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 36,
    lineHeight: 38,
    letterSpacing: -0.7,
    color: colors.fog,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 22,
    color: colors.mutedOnDark,
  },
  rule: {
    marginTop: 8,
    width: 40,
    height: 2,
    backgroundColor: colors.gold,
  },
});

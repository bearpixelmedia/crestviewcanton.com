import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';

import { colors, fonts, radius } from '@/constants/theme';

type Variant = 'primary' | 'secondary' | 'solid';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  /** For outline buttons sitting on a dark photo / pine band. */
  onDark?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
};

export function CtaButton({
  label,
  onPress,
  variant = 'primary',
  onDark = false,
  fullWidth = false,
  style,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        fullWidth ? styles.full : null,
        variant === 'primary' ? styles.primary : null,
        variant === 'solid' ? styles.solid : null,
        variant === 'secondary'
          ? onDark
            ? styles.secondaryOnDark
            : styles.secondaryOnLight
          : null,
        pressed ? styles.pressed : null,
        style,
      ]}
    >
      <View style={styles.inner}>
        <Text
          style={[
            styles.label,
            variant === 'primary' ? styles.labelPrimary : null,
            variant === 'solid' ? styles.labelSolid : null,
            variant === 'secondary'
              ? onDark
                ? styles.labelOnDark
                : styles.labelOnLight
              : null,
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: radius.sm,
  },
  full: {
    alignSelf: 'stretch',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  primary: {
    backgroundColor: colors.dawn,
  },
  solid: {
    backgroundColor: colors.pine,
  },
  secondaryOnDark: {
    borderWidth: 1,
    borderColor: 'rgba(183, 201, 191, 0.42)',
  },
  secondaryOnLight: {
    borderWidth: 1,
    borderColor: 'rgba(15, 42, 32, 0.3)',
  },
  pressed: {
    opacity: 0.82,
  },
  label: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    letterSpacing: 0.6,
  },
  labelPrimary: {
    color: colors.forest,
  },
  labelSolid: {
    color: colors.fog,
  },
  labelOnDark: {
    color: colors.fog,
  },
  labelOnLight: {
    color: colors.pine,
  },
});

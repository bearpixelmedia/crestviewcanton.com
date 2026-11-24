import { StyleSheet, Text, View, type ViewStyle } from 'react-native';

import { colors, fonts, tracking } from '@/constants/theme';

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  onDark?: boolean;
  align?: 'left' | 'center';
  style?: ViewStyle;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  onDark = false,
  align = 'left',
  style,
}: Props) {
  return (
    <View style={[align === 'center' ? styles.centered : null, style]}>
      {eyebrow ? (
        <Text
          style={[
            styles.eyebrow,
            onDark ? styles.eyebrowOnDark : null,
            align === 'center' ? styles.textCenter : null,
          ]}
        >
          {eyebrow}
        </Text>
      ) : null}
      <Text
        style={[
          styles.title,
          onDark ? styles.titleOnDark : null,
          align === 'center' ? styles.textCenter : null,
        ]}
      >
        {title}
      </Text>
      {body ? (
        <Text
          style={[
            styles.body,
            onDark ? styles.bodyOnDark : null,
            align === 'center' ? styles.textCenter : null,
          ]}
        >
          {body}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  },
  eyebrow: {
    fontFamily: fonts.semibold,
    fontSize: 10.5,
    letterSpacing: tracking.eyebrow,
    color: colors.dawnDeep,
  },
  eyebrowOnDark: {
    color: colors.goldSoft,
  },
  title: {
    marginTop: 10,
    fontFamily: fonts.display,
    fontSize: 31,
    lineHeight: 35,
    letterSpacing: -0.6,
    color: colors.pine,
  },
  titleOnDark: {
    color: colors.fog,
  },
  body: {
    marginTop: 12,
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 24,
    color: colors.muted,
  },
  bodyOnDark: {
    color: colors.mutedOnDark,
  },
  textCenter: {
    textAlign: 'center',
  },
});

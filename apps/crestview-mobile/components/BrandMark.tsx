import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, fonts, tracking } from '@/constants/theme';
import { photos } from '@/constants/photos';

type Props = {
  /** Light text for pine / photo surfaces. */
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
};

const diameters = { sm: 34, md: 46, lg: 60 } as const;
const nameSizes = { sm: 19, md: 24, lg: 30 } as const;

export function BrandMark({ onDark = false, size = 'md', showName = true }: Props) {
  const diameter = diameters[size];

  return (
    <View style={styles.row} accessibilityRole="header">
      <View
        style={[
          styles.badge,
          {
            width: diameter,
            height: diameter,
            borderRadius: diameter / 2,
            borderColor: onDark ? 'rgba(183, 201, 191, 0.34)' : 'rgba(15, 42, 32, 0.14)',
          },
        ]}
      >
        <Image source={photos.mark} style={styles.badgeImage} resizeMode="cover" />
      </View>
      {showName ? (
        <View style={styles.wordmark}>
          <Text
            style={[
              styles.name,
              { fontSize: nameSizes[size], lineHeight: nameSizes[size] + 2 },
              onDark ? styles.nameOnDark : null,
            ]}
          >
            Crestview
          </Text>
          <Text
            style={[
              styles.sub,
              size === 'sm' ? styles.subSmall : null,
              onDark ? styles.subOnDark : null,
            ]}
          >
            BAPTIST CHURCH
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  badge: {
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth * 2,
    backgroundColor: colors.white,
  },
  badgeImage: {
    width: '100%',
    height: '100%',
  },
  wordmark: {
    justifyContent: 'center',
  },
  name: {
    fontFamily: fonts.display,
    letterSpacing: -0.3,
    color: colors.pine,
  },
  nameOnDark: {
    color: colors.fog,
  },
  sub: {
    marginTop: 2,
    fontFamily: fonts.semibold,
    fontSize: 9,
    letterSpacing: tracking.eyebrow,
    color: 'rgba(26, 70, 52, 0.8)',
  },
  subSmall: {
    fontSize: 8,
    letterSpacing: 1.6,
  },
  subOnDark: {
    color: 'rgba(183, 201, 191, 0.9)',
  },
});

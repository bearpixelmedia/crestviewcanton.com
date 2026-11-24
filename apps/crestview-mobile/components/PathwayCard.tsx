import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/constants/theme';

type Props = {
  title: string;
  body: string;
  cta: string;
  photo: number;
  onPress: () => void;
};

export function PathwayCard({ title, body, cta, photo, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${title} — ${cta}`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed ? styles.pressed : null]}
    >
      <View style={styles.photoWrap}>
        <Image source={photo} style={styles.photo} resizeMode="cover" />
        <View style={styles.photoScrim} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <View style={styles.ctaRow}>
        <Text style={styles.cta}>{cta}</Text>
        <Text style={styles.chevron}>›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
  },
  pressed: {
    opacity: 0.9,
  },
  photoWrap: {
    width: '100%',
    aspectRatio: 16 / 10,
    backgroundColor: colors.fog,
    marginBottom: 14,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  photoScrim: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(15, 42, 32, 0.12)',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 24,
    lineHeight: 27,
    letterSpacing: -0.3,
    color: colors.pine,
  },
  body: {
    marginTop: 7,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.muted,
  },
  ctaRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minHeight: 24,
  },
  cta: {
    fontFamily: fonts.semibold,
    fontSize: 13.5,
    letterSpacing: 0.2,
    color: colors.dawnDeep,
  },
  chevron: {
    fontFamily: fonts.body,
    fontSize: 19,
    lineHeight: 20,
    color: colors.dawnDeep,
  },
});

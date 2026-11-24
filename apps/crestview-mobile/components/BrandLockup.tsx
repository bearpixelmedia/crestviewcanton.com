import { Image, StyleSheet, Text, View } from 'react-native';

import mark from '../assets/images/crestview-mark.png';
import { brand } from '@/constants/Colors';

export function BrandLockup() {
  return (
    <View style={styles.row}>
      <View style={styles.badge}>
        <Image
          source={mark}
          style={styles.mark}
          resizeMode="contain"
          alt=""
          accessible={false}
        />
      </View>
      <View style={styles.copy}>
        <Text style={styles.name}>Crestview</Text>
        <Text style={styles.sub}>BAPTIST CHURCH</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: brand.white,
    borderWidth: 1,
    borderColor: brand.fog,
  },
  mark: {
    width: '100%',
    height: '100%',
  },
  copy: {
    gap: 2,
  },
  name: {
    fontFamily: 'CormorantGaramond_700Bold',
    fontSize: 30,
    lineHeight: 32,
    color: brand.pine,
  },
  sub: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 10,
    letterSpacing: 2,
    color: brand.canopy,
  },
});

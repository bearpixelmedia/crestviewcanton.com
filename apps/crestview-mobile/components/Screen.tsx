import { ReactNode } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { brand } from '@/constants/Colors';

type Props = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  scroll?: boolean;
  style?: ViewStyle;
};

export function Screen({
  children,
  title,
  subtitle,
  scroll = true,
  style,
}: Props) {
  const body = (
    <View style={[styles.inner, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {children}
    </View>
  );

  return (
    <SafeAreaView style={styles.safe} edges={['left', 'right']}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {body}
        </ScrollView>
      ) : (
        <View style={styles.fill}>{body}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: brand.paper,
  },
  fill: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  inner: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  title: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 34,
    lineHeight: 40,
    color: brand.pine,
  },
  subtitle: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5c54',
    marginTop: -8,
  },
});

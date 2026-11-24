import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { colors } from '@/constants/theme';

type Props = {
  children: ReactNode;
  background?: string;
  contentStyle?: StyleProp<ViewStyle>;
};

/** Paper scroll surface used under the branded page headers. */
export function Screen({ children, background = colors.paper, contentStyle }: Props) {
  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: background }]}
      contentContainerStyle={[styles.content, contentStyle]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 40,
  },
});

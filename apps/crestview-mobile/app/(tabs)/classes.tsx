import { StyleSheet, View } from 'react-native';

import { SitePageWebView } from '@/components/SitePageWebView';
import { config } from '@/constants/config';

// Used by the web build's static rendering to title and describe this page.
export function generateMetadata() {
  return {
    title: 'Classes & Events · Crestview Baptist Church',
    description:
      'Classes, events, and signups at Crestview Baptist Church in Canton, NC — browse and register on Church Center.',
  };
}

export default function ClassesScreen() {
  return (
    <View style={styles.fill}>
      <SitePageWebView
        url={config.pages.classes}
        title="Classes and events"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});

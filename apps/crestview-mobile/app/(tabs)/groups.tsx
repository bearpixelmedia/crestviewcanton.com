import { StyleSheet, View } from 'react-native';

import { SitePageWebView } from '@/components/SitePageWebView';
import { config } from '@/constants/config';

// Used by the web build's static rendering to title and describe this page.
export function generateMetadata() {
  return {
    title: 'Groups · Crestview Baptist Church',
    description:
      'Life Groups and ministries at Crestview Baptist Church in Canton, NC — find a group and see meeting details on Church Center.',
  };
}

export default function GroupsScreen() {
  return (
    <View style={styles.fill}>
      <SitePageWebView url={config.pages.groups} title="Groups" />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});

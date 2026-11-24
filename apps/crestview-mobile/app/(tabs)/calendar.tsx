import { StyleSheet, View } from 'react-native';

import { SitePageWebView } from '@/components/SitePageWebView';
import { config } from '@/constants/config';

// Used by the web build's static rendering to title and describe this page.
export function generateMetadata() {
  return {
    title: 'Church Calendar · Crestview Baptist Church',
    description:
      'Upcoming services and events at Crestview Baptist Church in Canton, NC — the church calendar on Church Center.',
  };
}

export default function CalendarScreen() {
  return (
    <View style={styles.fill}>
      <SitePageWebView
        url={config.pages.calendar}
        title="Church calendar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});

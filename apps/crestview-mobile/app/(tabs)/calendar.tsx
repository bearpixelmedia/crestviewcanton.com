import { StyleSheet, View } from 'react-native';

import { ChurchCenterWebView } from '@/components/ChurchCenterWebView';
import { config } from '@/constants/config';

export default function CalendarScreen() {
  return (
    <View style={styles.fill}>
      <ChurchCenterWebView
        url={config.churchCenter.calendar}
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

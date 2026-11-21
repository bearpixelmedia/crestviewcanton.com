import { StyleSheet, View } from 'react-native';

import { ChurchCenterWebView } from '@/components/ChurchCenterWebView';
import { config } from '@/constants/config';

export default function ClassesScreen() {
  return (
    <View style={styles.fill}>
      <ChurchCenterWebView
        url={config.churchCenter.registrations}
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

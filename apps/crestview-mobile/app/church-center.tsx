import { StyleSheet, View } from 'react-native';

import { ChurchCenterWebView } from '@/components/ChurchCenterWebView';
import { config } from '@/constants/config';

export default function ChurchCenterScreen() {
  return (
    <View style={styles.fill}>
      <ChurchCenterWebView
        url={config.churchCenter.home}
        title="Church Center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});

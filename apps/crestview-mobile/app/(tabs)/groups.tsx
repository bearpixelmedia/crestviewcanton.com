import { StyleSheet, View } from 'react-native';

import { ChurchCenterWebView } from '@/components/ChurchCenterWebView';
import { config } from '@/constants/config';

export default function GroupsScreen() {
  return (
    <View style={styles.fill}>
      <ChurchCenterWebView
        url={config.churchCenter.groups}
        title="Groups"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});

import { useRouter } from 'expo-router';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PageHeader } from '@/components/PageHeader';
import { Screen } from '@/components/Screen';
import { config } from '@/constants/config';
import { colors, fonts, layout, tracking } from '@/constants/theme';

const open = (url: string) => void Linking.openURL(url);

// Used by the web build's static rendering to title and describe this page.
export function generateMetadata() {
  return {
    title: 'About This App · Crestview Baptist Church',
    description:
      'A simple, church-branded home for Sunday life at Crestview — our weekly rhythm, ministries, giving, and the classes and groups you’re part of.',
  };
}

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <Screen>
        <PageHeader
          eyebrow="Crestview Baptist Church"
          title="About this app"
          onClose={() => router.back()}
        />

        <View style={styles.body}>
          <Text style={styles.lead}>
            A simple, church-branded home for Sunday life at Crestview — our weekly
            rhythm, ministries, giving, and the classes and groups you’re part of.
          </Text>

          <Text style={styles.section}>Weekly rhythm</Text>
          <View style={styles.card}>
            {config.schedule.map((group, groupIndex) => (
              <View
                key={group.day}
                style={[
                  styles.scheduleGroup,
                  groupIndex === config.schedule.length - 1 ? styles.last : null,
                ]}
              >
                <Text style={styles.day}>{group.day}</Text>
                {group.items.map((item) => (
                  <View key={item.label} style={styles.timeRow}>
                    <Text style={styles.timeLabel}>{item.label}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <Text style={styles.section}>Crestview online</Text>
          <Text style={styles.paragraph}>
            Calendar, groups, and class signup open Church Center inside the app, so
            every screen matches what the church office publishes there. Anything not
            in the app opens in your browser.
          </Text>
          <Text style={styles.orgUrl}>{config.churchCenterUrl}</Text>

          <Text style={styles.section}>Visit us</Text>
          <View style={styles.card}>
            <InfoRow label="Address" value={config.address} onPress={() => open(config.mapUrl)} />
            <InfoRow label="Phone" value={config.phone} onPress={() => open(`tel:${config.phoneTel}`)} />
            <InfoRow
              label="Email"
              value={config.email}
              onPress={() => open(`mailto:${config.email}`)}
              last
            />
          </View>

          <Text style={styles.section}>Built by</Text>
          <Pressable
            accessibilityRole="link"
            onPress={() => open(config.bearPixel.url)}
            style={({ pressed }) => [styles.creditCard, pressed ? styles.pressed : null]}
          >
            <View style={styles.creditCopy}>
              <Text style={styles.creditName}>{config.bearPixel.name}</Text>
              <Text style={styles.creditUrl}>{config.bearPixel.url}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
          <Text style={styles.fineprint}>
            © 2026 {config.churchName}. Scripture and sermon media belong to
            Crestview Baptist Church, Canton, NC.
          </Text>
        </View>
      </Screen>
    </View>
  );
}

function InfoRow({
  label,
  value,
  onPress,
  last = false,
}: {
  label: string;
  value: string;
  onPress: () => void;
  last?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        last ? styles.last : null,
        pressed ? styles.rowPressed : null,
      ]}
    >
      <View style={styles.rowCopy}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  body: {
    paddingHorizontal: layout.gutter,
    paddingTop: 26,
  },
  lead: {
    fontFamily: fonts.body,
    fontSize: 15.5,
    lineHeight: 25,
    color: 'rgba(13, 23, 19, 0.82)',
  },
  section: {
    marginTop: 28,
    marginBottom: 10,
    fontFamily: fonts.semibold,
    fontSize: 9.5,
    letterSpacing: tracking.eyebrow,
    textTransform: 'uppercase',
    color: colors.dawnDeep,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  scheduleGroup: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 7,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: colors.hairline,
  },
  last: {
    borderBottomWidth: 0,
  },
  day: {
    fontFamily: fonts.display,
    fontSize: 21,
    lineHeight: 23,
    color: colors.pine,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  timeLabel: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.muted,
  },
  time: {
    fontFamily: fonts.semibold,
    fontSize: 12.5,
    color: colors.canopy,
  },
  paragraph: {
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 23,
    color: colors.muted,
  },
  orgUrl: {
    marginTop: 10,
    fontFamily: fonts.medium,
    fontSize: 13,
    lineHeight: 20,
    color: colors.canopy,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: 62,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: colors.hairline,
  },
  rowPressed: {
    backgroundColor: colors.paper,
  },
  rowCopy: {
    flex: 1,
    gap: 3,
  },
  rowLabel: {
    fontFamily: fonts.semibold,
    fontSize: 9.5,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: colors.leaf,
  },
  rowValue: {
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 21,
    color: colors.ink,
  },
  creditCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  creditCopy: {
    flex: 1,
    gap: 3,
  },
  creditName: {
    fontFamily: fonts.display,
    fontSize: 21,
    color: colors.pine,
  },
  creditUrl: {
    fontFamily: fonts.body,
    fontSize: 12.5,
    color: colors.muted,
  },
  chevron: {
    fontFamily: fonts.body,
    fontSize: 20,
    color: colors.leaf,
  },
  fineprint: {
    marginTop: 14,
    fontFamily: fonts.body,
    fontSize: 11,
    lineHeight: 18,
    color: 'rgba(74, 92, 84, 0.75)',
  },
  pressed: {
    opacity: 0.85,
  },
});

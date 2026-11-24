import { useRouter, type Href } from 'expo-router';
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
    title: 'More · Crestview Baptist Church',
    description:
      'Contact the church office, give online, watch live, or open Church Center for the calendar, groups, and class signups in the Crestview app.',
  };
}

type Row = {
  label: string;
  meta?: string;
  onPress: () => void;
};

type Group = {
  title: string;
  rows: Row[];
};

function buildGroups(push: (href: Href) => void): Group[] {
  return [
    {
      title: 'In the app',
      rows: [
        { label: 'Calendar', meta: 'Church Center', onPress: () => push('/calendar') },
        { label: 'Groups', meta: 'Church Center', onPress: () => push('/groups') },
        {
          label: 'Classes & signup',
          meta: 'Church Center',
          onPress: () => push('/classes'),
        },
      ],
    },
    {
      title: 'Crestview online',
      rows: [
        { label: 'Church website', onPress: () => open(config.websiteUrl) },
        { label: 'Watch live', onPress: () => open(config.liveUrl) },
        { label: 'Our staff', onPress: () => open(config.staffUrl) },
        { label: 'Ways to give', onPress: () => open(`${config.websiteUrl}/give-online`) },
        { label: 'Photo gallery', onPress: () => open(`${config.websiteUrl}/photo-gallery`) },
      ],
    },
    {
      title: 'Giving',
      rows: [
        { label: 'Give online', meta: 'MyVanco', onPress: () => open(config.giveUrl) },
        { label: 'Text to give', meta: '1 828 537 4412', onPress: () => open('sms:18285374412') },
      ],
    },
    {
      title: 'Contact',
      rows: [
        { label: `Call ${config.phone}`, onPress: () => open(`tel:${config.phoneTel}`) },
        { label: 'Email the office', onPress: () => open(`mailto:${config.email}`) },
        { label: 'Get directions', onPress: () => open(config.mapUrl) },
      ],
    },
  ];
}

export default function MoreScreen() {
  const router = useRouter();
  const groups = buildGroups((href) => router.push(href));

  return (
    <View style={styles.root}>
      <Screen>
        <PageHeader
          eyebrow="Connect & Give"
          title="More"
          subtitle="Contact the office, give online, or jump into the website."
        />

        <View style={styles.body}>
          {groups.map((group) => (
            <View key={group.title} style={styles.group}>
              <Text style={styles.groupTitle}>{group.title}</Text>
              <View style={styles.card}>
                {group.rows.map((row, index) => (
                  <Pressable
                    key={row.label}
                    accessibilityRole="button"
                    onPress={row.onPress}
                    style={({ pressed }) => [
                      styles.row,
                      index === group.rows.length - 1 ? styles.rowLast : null,
                      pressed ? styles.rowPressed : null,
                    ]}
                  >
                    <Text style={styles.rowLabel}>{row.label}</Text>
                    {row.meta ? <Text style={styles.rowMeta}>{row.meta}</Text> : null}
                    <Text style={styles.chevron}>›</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}

          <View style={styles.group}>
            <Text style={styles.groupTitle}>App</Text>
            <View style={styles.card}>
              <Pressable
                accessibilityRole="button"
                onPress={() => router.push('/about')}
                style={({ pressed }) => [
                  styles.row,
                  styles.rowLast,
                  pressed ? styles.rowPressed : null,
                ]}
              >
                <Text style={styles.rowLabel}>About this app</Text>
                <Text style={styles.chevron}>›</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.address}>
            <Text style={styles.addressName}>{config.churchName}</Text>
            <Text style={styles.addressLine}>{config.address}</Text>
            <Text style={styles.addressLine}>
              {config.phone} · {config.email}
            </Text>
          </View>

          <Text style={styles.hint}>
            Calendar, groups, and class signup open Church Center, so the app always
            matches what the church office publishes there.
          </Text>
        </View>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  body: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    paddingHorizontal: layout.gutter,
    paddingTop: 26,
    paddingBottom: 20,
  },
  group: {
    marginBottom: 26,
  },
  groupTitle: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    minHeight: 54,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: colors.hairline,
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  rowPressed: {
    backgroundColor: colors.paper,
  },
  rowLabel: {
    flex: 1,
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.pine,
  },
  rowMeta: {
    fontFamily: fonts.semibold,
    fontSize: 9.5,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.leaf,
  },
  chevron: {
    fontFamily: fonts.body,
    fontSize: 20,
    lineHeight: 22,
    color: colors.leaf,
  },
  address: {
    gap: 4,
    paddingTop: 6,
    marginBottom: 14,
  },
  addressName: {
    fontFamily: fonts.display,
    fontSize: 22,
    color: colors.pine,
  },
  addressLine: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: colors.muted,
  },
  hint: {
    fontFamily: fonts.body,
    fontSize: 11.5,
    lineHeight: 18,
    color: 'rgba(74, 92, 84, 0.8)',
  },
});

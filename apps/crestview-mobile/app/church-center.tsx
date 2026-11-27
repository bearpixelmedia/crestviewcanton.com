import { useRouter } from 'expo-router';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { CtaButton } from '@/components/CtaButton';
import { PageHeader } from '@/components/PageHeader';
import { Screen } from '@/components/Screen';
import { config } from '@/constants/config';
import { colors, fonts, layout, tracking } from '@/constants/theme';

const open = (url: string) => void Linking.openURL(url);

// Used by the web build's static rendering to title and describe this page.
export function generateMetadata() {
  return {
    title: 'What Is Church Center? · Crestview Baptist Church',
    description:
      'Church Center is where Crestview keeps its calendar, groups, and class signups. What it is, how to sign in, and what you will find there.',
  };
}

const places = [
  {
    label: 'Calendar',
    meta: 'Tab: Calendar',
    body: 'Dated gatherings with times and locations: special services, camps and retreats, fellowships, and one-off events.',
    href: '/calendar' as const,
  },
  {
    label: 'Groups',
    meta: 'Tab: Groups',
    body: 'Life Groups, kids and student ministry teams, worship and production, outreach, and serving teams, each with a way to ask about joining.',
    href: '/groups' as const,
  },
  {
    label: 'Registrations',
    meta: 'Tab: Classes',
    body: 'Anything you sign up for: the Exploratory New Members class, baptism dates, Vacation Bible School, camps, and seasonal studies.',
    href: '/classes' as const,
  },
];

const signInSteps = [
  'Open Church Center in your browser, or install the Church Center app and choose Crestview Baptist Church in Canton.',
  'Choose Sign in and enter your email address. If the office already has that address on file, your groups and signups will be waiting.',
  'Church Center emails you a sign-in code. Type it in and you are in, with no password to remember.',
];

export default function ChurchCenterScreen() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <Screen>
        <PageHeader
          eyebrow="Church Center"
          title="What is Church Center?"
          subtitle="One place for the calendar, groups, and signups."
          onClose={() => router.back()}
        />

        <View style={styles.body}>
          <Text style={styles.lead}>
            Church Center is the church’s free web and mobile tool for the details
            that change week to week. Instead of a printed list or a call to the
            office, you can check a date, find a group, or sign up for a class
            yourself. The office keeps it updated, so it is the best place to look
            before you come.
          </Text>
          <Text style={styles.fineprint}>
            You do not need it to visit on Sunday, and it is not how we receive
            gifts. Giving stays on our separate secure giving page.
          </Text>

          <Text style={styles.section}>What you’ll find there</Text>
          <View style={styles.card}>
            {places.map((place, index) => (
              <Pressable
                key={place.label}
                accessibilityRole="button"
                onPress={() => router.push(place.href)}
                style={({ pressed }) => [
                  styles.row,
                  index === places.length - 1 ? styles.last : null,
                  pressed ? styles.rowPressed : null,
                ]}
              >
                <View style={styles.rowCopy}>
                  <Text style={styles.rowLabel}>{place.label}</Text>
                  <Text style={styles.rowBody}>{place.body}</Text>
                </View>
                <View style={styles.rowAside}>
                  <Text style={styles.rowMeta}>{place.meta}</Text>
                  <Text style={styles.chevron}>›</Text>
                </View>
              </Pressable>
            ))}
          </View>

          <Text style={styles.section}>How to sign in</Text>
          <View style={styles.card}>
            {signInSteps.map((step, index) => (
              <View
                key={step}
                style={[styles.step, index === signInSteps.length - 1 ? styles.last : null]}
              >
                <Text style={styles.stepNumber}>{index + 1}</Text>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.orgUrl}>{config.churchCenterUrl}</Text>

          <Text style={styles.paragraph}>
            Stuck on a sign-in code, or not sure which email we have? Call the
            office at {config.phone} or email {config.email}.
          </Text>

          <View style={styles.buttonRow}>
            <CtaButton
              label="Open Church Center"
              onPress={() => open(config.churchCenterUrl)}
            />
            <CtaButton
              label={`Call ${config.phone}`}
              variant="secondary"
              onPress={() => open(`tel:${config.phoneTel}`)}
            />
          </View>
          <Text style={styles.fineprint}>
            Church Center opens in your browser so sign-in and your groups stay
            signed in.
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
  lead: {
    fontFamily: fonts.body,
    fontSize: 15.5,
    lineHeight: 25,
    color: 'rgba(13, 23, 19, 0.82)',
  },
  paragraph: {
    marginTop: 18,
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 23,
    color: colors.muted,
  },
  fineprint: {
    marginTop: 12,
    fontFamily: fonts.body,
    fontSize: 12.5,
    lineHeight: 20,
    color: 'rgba(74, 92, 84, 0.8)',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: colors.hairline,
  },
  rowPressed: {
    backgroundColor: colors.paper,
  },
  last: {
    borderBottomWidth: 0,
  },
  rowCopy: {
    flex: 1,
    gap: 5,
  },
  rowLabel: {
    fontFamily: fonts.display,
    fontSize: 21,
    lineHeight: 23,
    color: colors.pine,
  },
  rowBody: {
    fontFamily: fonts.body,
    fontSize: 13,
    lineHeight: 20,
    color: colors.muted,
  },
  rowAside: {
    alignItems: 'center',
    gap: 4,
  },
  rowMeta: {
    fontFamily: fonts.semibold,
    fontSize: 9,
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
  step: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: colors.hairline,
  },
  stepNumber: {
    width: 18,
    fontFamily: fonts.semibold,
    fontSize: 11,
    lineHeight: 22,
    color: colors.dawnDeep,
  },
  stepText: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.ink,
  },
  orgUrl: {
    marginTop: 10,
    fontFamily: fonts.medium,
    fontSize: 13,
    lineHeight: 20,
    color: colors.canopy,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 22,
  },
});

import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, type Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  ImageBackground,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BrandMark } from '@/components/BrandMark';
import { CtaButton } from '@/components/CtaButton';
import { PathwayCard } from '@/components/PathwayCard';
import { SectionHeading } from '@/components/SectionHeading';
import { config } from '@/constants/config';
import { photos } from '@/constants/photos';
import { colors, fonts, layout, radius, tracking } from '@/constants/theme';

const page = (path: string) => `${config.websiteUrl}${path}`;
const open = (url: string) => void Linking.openURL(url);

// Used by the web build's static rendering to title and describe the home page.
export function generateMetadata() {
  return {
    title: 'Crestview Baptist Church · Canton, NC',
    description:
      'A welcoming, Christ-centered church family in Canton, North Carolina. Life Groups at 9:30 AM and worship at 10:45 AM on Sundays — reach, equip, send.',
  };
}

const pathways = [
  {
    title: 'Worship Services',
    body: 'Gathered worship every Sunday at 10:45 AM — come as you are and sing with us.',
    cta: 'Plan your visit',
    photo: photos.worship,
    url: page('/plan-your-visit'),
  },
  {
    title: 'Crestview Kids',
    body: 'Nursery through grade 5, with VBS and God’s Kidz on Wednesday nights.',
    cta: 'Children’s ministry',
    photo: photos.kids,
    url: page('/childrens-ministry'),
  },
  {
    title: 'Crestview Youth',
    body: '6th–12th grade worship, evangelism, missions, and fellowship in the Youth Center.',
    cta: 'Student ministry',
    photo: photos.youth,
    url: page('/student-ministry'),
  },
  {
    title: 'Prayer',
    body: 'Come together in prayer to support one another and seek God’s guidance together.',
    cta: 'Share a request',
    photo: photos.prayer,
    url: page('/prayer-requests'),
  },
] as const;

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={photos.campus}
          style={[styles.hero, { paddingTop: insets.top + 16 }]}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(7,21,16,0.82)', 'rgba(7,21,16,0.46)', 'rgba(7,21,16,0.94)']}
            locations={[0, 0.42, 1]}
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.heroTop}>
            <BrandMark onDark />
            <Pressable
              accessibilityRole="link"
              accessibilityLabel="Give online"
              onPress={() => open(config.giveUrl)}
              style={({ pressed }) => [styles.givePill, pressed ? styles.pressed : null]}
            >
              <Text style={styles.givePillLabel}>Give</Text>
            </Pressable>
          </View>

          <View style={styles.heroCopy}>
            <Text style={styles.heroEyebrow}>REACH · EQUIP · SEND</Text>
            <Text style={styles.heroTitle}>Welcome to Our Church Family.</Text>
            <Text style={styles.heroBody}>
              Join us in faith. Together we grow in our relationship with Jesus and
              serve others with love — whether you’re new to faith or have been on
              this journey for years.
            </Text>
            <View style={styles.heroActions}>
              <CtaButton
                label="Plan your visit"
                onPress={() => open(page('/plan-your-visit'))}
              />
              <CtaButton
                label="Watch live"
                variant="secondary"
                onDark
                onPress={() => open(config.liveUrl)}
              />
            </View>
          </View>

          <View style={styles.heroFooter}>
            <View style={styles.heroRule} />
            <Text style={styles.heroFooterText}>
              Sundays · Life Groups 9:30 AM · Worship 10:45 AM · Canton, NC
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.sheet}>
          <View style={styles.scheduleCard}>
            <View style={styles.scheduleHead}>
              <Text style={styles.cardEyebrow}>THIS WEEK AT CRESTVIEW</Text>
              <Text style={styles.cardPlace}>Canton, NC</Text>
            </View>
            {config.schedule.map((group) => (
              <View key={group.day} style={styles.scheduleGroup}>
                <Text style={styles.day}>{group.day}</Text>
                <View style={styles.timeList}>
                  {group.items.map((item) => (
                    <View key={item.label} style={styles.timeRow}>
                      <Text style={styles.timeLabel}>{item.label}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.quickRow}>
            <QuickLink href="/calendar" label="Calendar" />
            <View style={styles.quickDivider} />
            <QuickLink href="/groups" label="Groups" />
            <View style={styles.quickDivider} />
            <QuickLink href="/classes" label="Sign up" />
          </View>

          <View style={styles.section}>
            <SectionHeading
              eyebrow="Our Mission and Values"
              title="A place to belong, grow, and serve"
            />
            <Text style={styles.prose}>
              At Crestview Baptist Church, we are devoted to helping you walk with
              Jesus and grow in your faith. Our community values grace, truth, and
              discipleship, creating a place where everyone is welcomed and
              encouraged to deepen their spiritual journey with Christ.
            </Text>
            <Text style={styles.prose}>
              Our community mission is to REACH–EQUIP–SEND: reaching others with the
              gospel, equipping them in the Scriptures as multiplying disciples of
              Jesus, and sending them back out to reproduce other disciples.
            </Text>

            <Pressable
              accessibilityRole="button"
              onPress={() => open(page('/our-beliefs'))}
              style={styles.inlineLink}
            >
              <Text style={styles.inlineLinkLabel}>Explore our beliefs</Text>
              <Text style={styles.inlineLinkChevron}>›</Text>
            </Pressable>

            <View style={styles.missionPhotoWrap}>
              <Image source={photos.mission} style={styles.missionPhoto} resizeMode="cover" />
              <LinearGradient
                colors={['rgba(7,21,16,0.05)', 'rgba(7,21,16,0.82)']}
                style={styles.missionScrim}
              />
              <Text style={styles.missionCaption}>
                Crestview congregation gathered in the sanctuary
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.pathwayBand}>
          <View style={styles.pathwayInner}>
            <SectionHeading
              eyebrow="Ways to Grow"
              title="Ways to grow with us"
              body="From gathered worship to serving neighbors, there’s a place for you at Crestview."
            />
            <View style={styles.pathwayList}>
              {pathways.map((item) => (
                <PathwayCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  cta={item.cta}
                  photo={item.photo}
                  onPress={() => open(item.url)}
                />
              ))}
            </View>
          </View>
        </View>

        <LinearGradient
          colors={['#1a4634', '#0f2a20']}
          start={{ x: 0.15, y: 0 }}
          end={{ x: 0.85, y: 1 }}
          style={styles.inviteBand}
        >
          <Text style={styles.inviteEyebrow}>JOIN US THIS WEEK</Text>
          <Text style={styles.inviteTitle}>Join Us This Sunday for Worship</Text>
          <Text style={styles.inviteBody}>
            Experience inspiring worship and uplifting fellowship with us. Whether
            you’re seeking answers or a community, we’re here to welcome you into a
            place of hope and encouragement.
          </Text>
          <View style={styles.inviteActions}>
            <CtaButton
              label="Plan your visit"
              onPress={() => open(page('/plan-your-visit'))}
              fullWidth
            />
            <CtaButton
              label="Give online"
              variant="secondary"
              onDark
              fullWidth
              onPress={() => open(config.giveUrl)}
            />
          </View>
        </LinearGradient>

        <View style={styles.contactSection}>
          <SectionHeading eyebrow="Get in Touch" title="We’d love to hear from you" />
          <View style={styles.contactCard}>
            <ContactRow
              label="Our Address"
              value={config.address}
              onPress={() => open(config.mapUrl)}
            />
            <ContactRow
              label="Phone Number"
              value={config.phone}
              onPress={() => open(`tel:${config.phoneTel}`)}
            />
            <ContactRow
              label="Email Us"
              value={config.email}
              onPress={() => open(`mailto:${config.email}`)}
            />
            <ContactRow
              label="Find Us"
              value="Get directions"
              onPress={() => open(config.mapUrl)}
              last
            />
          </View>
          <CtaButton
            label="Contact the church office"
            variant="secondary"
            fullWidth
            onPress={() => open(page('/contact'))}
            style={styles.contactButton}
          />
        </View>

        <View style={styles.footer}>
          <BrandMark onDark size="sm" />
          <Text style={styles.footerTagline}>{config.tagline}</Text>
          <View style={styles.footerLinks}>
            <FooterLink label="Facebook" url={config.social.facebook} />
            <Text style={styles.footerDot}>·</Text>
            <FooterLink label="Instagram" url={config.social.instagram} />
            <Text style={styles.footerDot}>·</Text>
            <FooterLink label="YouTube" url={config.social.youtube} />
            <Text style={styles.footerDot}>·</Text>
            <FooterLink label="Website" url={config.websiteUrl} />
          </View>
          <View style={styles.footerRule} />
          <Text style={styles.footerCredit}>
            © 2026 {config.churchName} · Built by{' '}
            <Text
              style={styles.footerCreditLink}
              onPress={() => open(config.bearPixel.url)}
              accessibilityRole="link"
            >
              {config.bearPixel.name}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function QuickLink({ href, label }: { href: Href; label: string }) {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => router.push(href)}
      style={({ pressed }) => [styles.quickItem, pressed ? styles.pressed : null]}
    >
      <Text style={styles.quickKicker}>OPEN</Text>
      <Text style={styles.quickLabel}>{label}</Text>
    </Pressable>
  );
}

function ContactRow({
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
        styles.contactRow,
        last ? styles.contactRowLast : null,
        pressed ? styles.contactRowPressed : null,
      ]}
    >
      <View style={styles.contactCopy}>
        <Text style={styles.contactLabel}>{label}</Text>
        <Text style={styles.contactValue}>{value}</Text>
      </View>
      <Text style={styles.contactChevron}>›</Text>
    </Pressable>
  );
}

function FooterLink({ label, url }: { label: string; url: string }) {
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => open(url)}
      hitSlop={8}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Text style={styles.footerLink}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 0,
  },
  hero: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    minHeight: 600,
    paddingHorizontal: layout.gutter,
    paddingBottom: 48,
    justifyContent: 'space-between',
    backgroundColor: colors.forest,
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  givePill: {
    minHeight: 38,
    paddingHorizontal: 18,
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.dawn,
  },
  givePillLabel: {
    fontFamily: fonts.semibold,
    fontSize: 12.5,
    letterSpacing: 0.8,
    color: colors.forest,
  },
  heroCopy: {
    marginTop: 54,
    gap: 14,
  },
  heroEyebrow: {
    fontFamily: fonts.semibold,
    fontSize: 10.5,
    letterSpacing: tracking.eyebrow,
    color: colors.goldSoft,
  },
  heroTitle: {
    fontFamily: fonts.display,
    fontSize: 42,
    lineHeight: 42,
    letterSpacing: -1,
    color: colors.fog,
  },
  heroBody: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(231, 238, 240, 0.86)',
  },
  heroActions: {
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  heroFooter: {
    marginTop: 34,
    gap: 10,
  },
  heroRule: {
    width: 34,
    height: 2,
    backgroundColor: colors.gold,
  },
  heroFooterText: {
    fontFamily: fonts.medium,
    fontSize: 11,
    lineHeight: 17,
    letterSpacing: 0.9,
    color: 'rgba(231, 238, 240, 0.72)',
  },
  sheet: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    backgroundColor: colors.paper,
    paddingHorizontal: layout.gutter,
  },
  scheduleCard: {
    marginTop: -26,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.hairline,
    borderTopWidth: 3,
    borderTopColor: colors.gold,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 6,
  },
  scheduleHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cardEyebrow: {
    fontFamily: fonts.semibold,
    fontSize: 9.5,
    letterSpacing: 1.8,
    color: colors.dawnDeep,
  },
  cardPlace: {
    fontFamily: fonts.medium,
    fontSize: 11,
    color: colors.muted,
  },
  scheduleGroup: {
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    borderTopColor: colors.hairline,
    gap: 8,
  },
  day: {
    fontFamily: fonts.display,
    fontSize: 20,
    lineHeight: 22,
    color: colors.pine,
  },
  timeList: {
    gap: 6,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 13,
    letterSpacing: 0.3,
    color: colors.canopy,
  },
  quickRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.pine,
    borderRadius: radius.sm,
  },
  quickItem: {
    flex: 1,
    minHeight: 62,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  quickDivider: {
    width: StyleSheet.hairlineWidth * 2,
    backgroundColor: 'rgba(183, 201, 191, 0.24)',
    marginVertical: 12,
  },
  quickKicker: {
    fontFamily: fonts.semibold,
    fontSize: 8,
    letterSpacing: 1.6,
    color: colors.goldSoft,
  },
  quickLabel: {
    fontFamily: fonts.display,
    fontSize: 20,
    lineHeight: 22,
    color: colors.fog,
  },
  section: {
    paddingTop: 40,
  },
  prose: {
    marginTop: 12,
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 25,
    color: 'rgba(13, 23, 19, 0.78)',
  },
  inlineLink: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minHeight: 30,
  },
  inlineLinkLabel: {
    fontFamily: fonts.semibold,
    fontSize: 13.5,
    color: colors.canopy,
    textDecorationLine: 'underline',
  },
  inlineLinkChevron: {
    fontSize: 18,
    color: colors.canopy,
  },
  missionPhotoWrap: {
    marginTop: 22,
    width: '100%',
    aspectRatio: 4 / 3,
    justifyContent: 'flex-end',
    padding: 16,
    overflow: 'hidden',
    backgroundColor: colors.fog,
  },
  missionPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  missionScrim: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  missionCaption: {
    fontFamily: fonts.medium,
    fontSize: 11,
    letterSpacing: 0.7,
    color: 'rgba(231, 238, 240, 0.9)',
  },
  pathwayBand: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    marginTop: 44,
    backgroundColor: colors.fog,
    paddingVertical: 40,
  },
  pathwayInner: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    paddingHorizontal: layout.gutter,
  },
  pathwayList: {
    marginTop: 28,
  },
  inviteBand: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    paddingHorizontal: layout.gutter + 4,
    paddingVertical: 46,
    alignItems: 'center',
  },
  inviteEyebrow: {
    fontFamily: fonts.semibold,
    fontSize: 10,
    letterSpacing: tracking.eyebrow,
    color: colors.goldSoft,
  },
  inviteTitle: {
    marginTop: 12,
    fontFamily: fonts.display,
    fontSize: 34,
    lineHeight: 36,
    letterSpacing: -0.7,
    textAlign: 'center',
    color: colors.fog,
  },
  inviteBody: {
    marginTop: 14,
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.mutedOnDark,
  },
  inviteActions: {
    marginTop: 24,
    alignSelf: 'stretch',
    gap: 10,
  },
  contactSection: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    paddingHorizontal: layout.gutter,
    paddingTop: 42,
  },
  contactCard: {
    marginTop: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 64,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: colors.hairline,
  },
  contactRowLast: {
    borderBottomWidth: 0,
  },
  contactRowPressed: {
    backgroundColor: colors.paper,
  },
  contactCopy: {
    flex: 1,
    gap: 3,
  },
  contactLabel: {
    fontFamily: fonts.semibold,
    fontSize: 9.5,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: colors.leaf,
  },
  contactValue: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 21,
    color: colors.ink,
  },
  contactChevron: {
    fontFamily: fonts.body,
    fontSize: 22,
    color: colors.leaf,
  },
  contactButton: {
    marginTop: 14,
  },
  footer: {
    width: '100%',
    maxWidth: layout.appWidth,
    alignSelf: 'center',
    marginTop: 46,
    backgroundColor: colors.forest,
    paddingHorizontal: layout.gutter,
    paddingTop: 32,
    paddingBottom: 30,
    gap: 14,
  },
  footerTagline: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: 'rgba(183, 201, 191, 0.8)',
    maxWidth: 320,
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  footerLink: {
    fontFamily: fonts.semibold,
    fontSize: 12.5,
    color: colors.goldSoft,
  },
  footerDot: {
    color: 'rgba(183, 201, 191, 0.45)',
    fontSize: 12,
  },
  footerRule: {
    height: StyleSheet.hairlineWidth * 2,
    backgroundColor: 'rgba(183, 201, 191, 0.18)',
    marginTop: 4,
  },
  footerCredit: {
    fontFamily: fonts.body,
    fontSize: 11,
    lineHeight: 18,
    color: 'rgba(183, 201, 191, 0.62)',
  },
  footerCreditLink: {
    color: 'rgba(223, 200, 138, 0.9)',
    textDecorationLine: 'underline',
  },
  pressed: {
    opacity: 0.8,
  },
});

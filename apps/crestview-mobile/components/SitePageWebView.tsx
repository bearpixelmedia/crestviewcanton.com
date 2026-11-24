import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { BrandMark } from '@/components/BrandMark';
import { CtaButton } from '@/components/CtaButton';
import { colors, fonts, layout, tracking } from '@/constants/theme';

type Props = {
  url: string;
  title?: string;
};

const WEBSITE_HOST = 'crestviewcanton.com';
const CHURCH_CENTER_HOST = 'crestviewbaptistchurch.churchcenter.com';

function isSiteHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return [WEBSITE_HOST, CHURCH_CENTER_HOST].some(
    (siteHost) => host === siteHost || host.endsWith(`.${siteHost}`),
  );
}

/** Keep the church's own pages inside the app; send every other host to the browser. */
function shouldLoadInWebView(requestUrl: string): boolean {
  if (!requestUrl || requestUrl === 'about:blank') {
    return true;
  }

  try {
    return isSiteHost(new URL(requestUrl).hostname);
  } catch {
    return true;
  }
}

function hostLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return WEBSITE_HOST;
  }
}

export function SitePageWebView({ url, title }: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const onShouldStartLoadWithRequest = useCallback(
    (request: { url: string }) => {
      if (shouldLoadInWebView(request.url)) {
        return true;
      }
      void Linking.openURL(request.url);
      return false;
    },
    [],
  );

  const retry = useCallback(() => {
    setError(null);
    setLoading(true);
    setReloadKey((key) => key + 1);
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.fallback}>
        <LinearGradient
          colors={['#1a4634', '#0f2a20']}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 0.9, y: 1 }}
          style={styles.fallbackHeader}
        >
          <BrandMark onDark />
          <Text style={styles.fallbackEyebrow}>{hostLabel(url).toUpperCase()}</Text>
          <Text style={styles.fallbackTitle}>{title ?? 'Crestview'}</Text>
        </LinearGradient>
        <View style={styles.fallbackBody}>
          <Text style={styles.fallbackBodyText}>
            This page lives on Church Center. It opens inside the Crestview app on
            your phone — on the web, use the button below.
          </Text>
          <CtaButton
            label="Open in browser"
            onPress={() => void Linking.openURL(url)}
            style={styles.fallbackButton}
          />
          <Text style={styles.hint}>{url}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {loading && !error ? (
        <View style={styles.loading} pointerEvents="none">
          <BrandMark />
          <ActivityIndicator color={colors.canopy} size="small" />
          <Text style={styles.loadingText}>Loading {hostLabel(url)}…</Text>
          <View style={styles.loadingRule} />
        </View>
      ) : null}

      {error ? (
        <View style={styles.errorOverlay}>
          <BrandMark />
          <Text style={styles.errorTitle}>Could not load</Text>
          <Text style={styles.errorBody}>{error}</Text>
          <View style={styles.buttonRow}>
            <CtaButton label="Try again" onPress={retry} />
            <CtaButton
              label="Open in browser"
              variant="secondary"
              onPress={() => void Linking.openURL(url)}
            />
          </View>
          <Text style={styles.hint}>{url}</Text>
        </View>
      ) : null}

      <WebView
        key={reloadKey}
        source={{ uri: url }}
        style={[styles.webview, error ? styles.webviewHidden : null]}
        onLoadStart={() => {
          setLoading(true);
          setError(null);
        }}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(
            `The page did not load. Check your connection, or open ${hostLabel(url)} in your browser.`,
          );
        }}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        startInLoadingState
        allowsBackForwardNavigationGestures
        setSupportMultipleWindows={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  webviewContainer: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  webview: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  webviewHidden: {
    opacity: 0,
    height: 0,
    flex: 0,
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: layout.gutter,
    gap: 16,
    backgroundColor: colors.paper,
  },
  loadingText: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    color: colors.muted,
  },
  loadingRule: {
    width: 30,
    height: 2,
    backgroundColor: colors.gold,
    marginTop: 4,
  },
  errorOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    paddingHorizontal: layout.gutter,
    paddingVertical: 40,
    justifyContent: 'center',
    gap: 14,
    backgroundColor: colors.paper,
  },
  errorTitle: {
    fontFamily: fonts.display,
    fontSize: 28,
    lineHeight: 30,
    color: colors.pine,
  },
  errorBody: {
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 23,
    color: colors.muted,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 6,
  },
  hint: {
    marginTop: 10,
    fontFamily: fonts.body,
    fontSize: 11.5,
    color: 'rgba(74, 92, 84, 0.8)',
  },
  fallback: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  fallbackHeader: {
    paddingHorizontal: layout.gutter,
    paddingTop: 32,
    paddingBottom: 30,
    gap: 10,
  },
  fallbackEyebrow: {
    marginTop: 10,
    fontFamily: fonts.semibold,
    fontSize: 10,
    letterSpacing: tracking.eyebrow,
    color: colors.goldSoft,
  },
  fallbackTitle: {
    fontFamily: fonts.display,
    fontSize: 34,
    lineHeight: 36,
    letterSpacing: -0.6,
    color: colors.fog,
  },
  fallbackBody: {
    paddingHorizontal: layout.gutter,
    paddingTop: 26,
    gap: 14,
  },
  fallbackBodyText: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(13, 23, 19, 0.8)',
  },
  fallbackButton: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
});

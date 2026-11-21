import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { brand } from '@/constants/Colors';
import { config } from '@/constants/config';

type Props = {
  url: string;
  title?: string;
};

function isChurchCenterHost(hostname: string): boolean {
  return (
    hostname.endsWith('churchcenter.com') ||
    hostname.endsWith('planningcenteronline.com')
  );
}

function shouldLoadInWebView(requestUrl: string): boolean {
  if (!requestUrl || requestUrl === 'about:blank') {
    return true;
  }

  try {
    const parsed = new URL(requestUrl);
    if (isChurchCenterHost(parsed.hostname)) {
      return true;
    }
    // Keep auth/oauth flows that Planning Center may open.
    if (
      parsed.hostname.includes('planningcenter') ||
      parsed.hostname.includes('accounts.google.com') ||
      parsed.hostname.includes('appleid.apple.com')
    ) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
}

export function ChurchCenterWebView({ url, title }: Props) {
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
        <Text style={styles.fallbackTitle}>{title ?? 'Church Center'}</Text>
        <Text style={styles.fallbackBody}>
          Church Center opens best in the Expo Go app on a phone, or in your
          browser.
        </Text>
        <Pressable
          accessibilityRole="link"
          onPress={() => void Linking.openURL(url)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Open in browser</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {loading && !error ? (
        <View style={styles.loading} pointerEvents="none">
          <ActivityIndicator color={brand.canopy} size="large" />
          <Text style={styles.loadingText}>Loading Church Center…</Text>
        </View>
      ) : null}

      {error ? (
        <View style={styles.errorOverlay}>
          <Text style={styles.fallbackTitle}>Could not load</Text>
          <Text style={styles.fallbackBody}>{error}</Text>
          <View style={styles.buttonRow}>
            <Pressable
              accessibilityRole="button"
              onPress={retry}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Try again</Text>
            </Pressable>
            <Pressable
              accessibilityRole="link"
              onPress={() => void Linking.openURL(url)}
              style={[styles.button, styles.buttonSecondary]}
            >
              <Text style={[styles.buttonText, styles.buttonSecondaryText]}>
                Open in browser
              </Text>
            </Pressable>
          </View>
          <Text style={styles.hint}>
            Org URL: {config.churchCenterRoot}
          </Text>
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
            'Church Center did not load. Check your connection or confirm EXPO_PUBLIC_CHURCH_CENTER_URL.',
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
    backgroundColor: brand.paper,
  },
  webview: {
    flex: 1,
    backgroundColor: brand.paper,
  },
  webviewHidden: {
    opacity: 0,
    height: 0,
    flex: 0,
  },
  loading: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brand.paper,
    gap: 12,
  },
  loadingText: {
    color: brand.ink,
    fontFamily: 'Manrope_500Medium',
    fontSize: 15,
  },
  errorOverlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 2,
    padding: 24,
    justifyContent: 'center',
    gap: 12,
    backgroundColor: brand.paper,
  },
  fallback: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 12,
    backgroundColor: brand.paper,
  },
  fallbackTitle: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 28,
    color: brand.pine,
  },
  fallbackBody: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: brand.ink,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: brand.canopy,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 4,
  },
  buttonSecondary: {
    backgroundColor: brand.white,
    borderWidth: 1,
    borderColor: brand.canopy,
  },
  buttonText: {
    color: brand.white,
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 15,
  },
  buttonSecondaryText: {
    color: brand.canopy,
  },
  hint: {
    marginTop: 16,
    fontFamily: 'Manrope_400Regular',
    fontSize: 13,
    color: '#4a5c54',
  },
});

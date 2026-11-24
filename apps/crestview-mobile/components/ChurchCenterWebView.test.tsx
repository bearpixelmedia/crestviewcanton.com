import { render } from '@testing-library/react-native';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';

const ENV_KEY = 'EXPO_PUBLIC_CHURCH_CENTER_URL';

// The native module behind react-native-webview does not exist in Jest, and
// this suite only exercises the setup screen, where no WebView should mount.
jest.mock('react-native-webview', () => {
  const React = jest.requireActual<typeof import('react')>('react');

  return {
    WebView: () =>
      React.createElement('WebView', { testID: 'church-center-webview' }),
  };
});

type WebViewComponent = (typeof import('./ChurchCenterWebView'))['ChurchCenterWebView'];

/**
 * The component reads the org URL through constants/config at import time, so
 * clear the variable and load a fresh module graph before rendering. This keeps
 * the case deterministic even if the shell has the variable exported.
 */
async function renderWithoutOrg() {
  delete process.env[ENV_KEY];

  let Component: WebViewComponent | undefined;
  jest.isolateModules(() => {
    Component = jest.requireActual<typeof import('./ChurchCenterWebView')>(
      './ChurchCenterWebView',
    ).ChurchCenterWebView;
  });

  if (!Component) {
    throw new Error('ChurchCenterWebView did not load');
  }

  return render(<Component url="" />);
}

beforeEach(() => {
  delete process.env[ENV_KEY];
});

afterEach(() => {
  delete process.env[ENV_KEY];
});

describe('ChurchCenterWebView with no Church Center org', () => {
  it('shows the setup message instead of Church Center', async () => {
    const { getByText } = await renderWithoutOrg();

    expect(getByText('Church Center is not set up')).toBeTruthy();
  });

  it('tells the reader which variable to set', async () => {
    const { getByText } = await renderWithoutOrg();

    expect(getByText(/Crestview Canton Planning Center org/)).toBeTruthy();
    expect(
      getByText(/EXPO_PUBLIC_CHURCH_CENTER_URL=https:\/\/your-org/),
    ).toBeTruthy();
  });

  it('mounts no WebView and shows no loading state', async () => {
    const { queryByTestId, queryByText } = await renderWithoutOrg();

    expect(queryByTestId('church-center-webview')).toBeNull();
    expect(queryByText('Loading Church Center…')).toBeNull();
  });
});

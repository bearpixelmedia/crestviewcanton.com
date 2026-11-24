import { afterEach, describe, expect, it, jest } from '@jest/globals';

const ENV_KEY = 'EXPO_PUBLIC_CHURCH_CENTER_URL';

type AppConfig = typeof import('./config').config;

/**
 * config.ts reads the env var at import time, so every case gets a fresh copy
 * of the module after the variable has been set or cleared.
 */
function loadConfig(value?: string): AppConfig {
  if (value === undefined) {
    delete process.env[ENV_KEY];
  } else {
    process.env[ENV_KEY] = value;
  }

  let loaded: AppConfig | undefined;
  jest.isolateModules(() => {
    loaded = jest.requireActual<typeof import('./config')>('./config').config;
  });

  if (!loaded) {
    throw new Error('constants/config.ts did not load');
  }
  return loaded;
}

afterEach(() => {
  delete process.env[ENV_KEY];
});

describe('Church Center configuration', () => {
  it('reports an unconfigured org when the env var is missing', () => {
    const config = loadConfig();

    expect(config.churchCenterConfigured).toBe(false);
    expect(config.churchCenterRoot).toBe('');
    expect(config.churchCenter.home).toBe('');
    expect(config.churchCenter.directory).toBe('');
  });

  it('does not fall back to the Griffin, GA slug', () => {
    const config = loadConfig();

    expect(JSON.stringify(config.churchCenter)).not.toContain('churchcenter.com');
    expect(config.churchCenterRoot).not.toContain('crestviewbaptist');
  });

  it('treats a whitespace-only value as unset', () => {
    const config = loadConfig('   ');

    expect(config.churchCenterConfigured).toBe(false);
    expect(config.churchCenterRoot).toBe('');
    expect(config.churchCenter.groups).toBe('');
  });

  it('builds every path from the configured org root', () => {
    const config = loadConfig('https://crestview-canton.churchcenter.com');

    expect(config.churchCenterConfigured).toBe(true);
    expect(config.churchCenterRoot).toBe(
      'https://crestview-canton.churchcenter.com',
    );
    expect(config.churchCenter).toEqual({
      home: 'https://crestview-canton.churchcenter.com/home',
      calendar: 'https://crestview-canton.churchcenter.com/calendar',
      groups: 'https://crestview-canton.churchcenter.com/groups',
      registrations:
        'https://crestview-canton.churchcenter.com/registrations/events',
      directory: 'https://crestview-canton.churchcenter.com/directory',
      login: 'https://crestview-canton.churchcenter.com/login',
    });
  });

  it('strips trailing slashes so paths do not double up', () => {
    const config = loadConfig('https://crestview-canton.churchcenter.com/');

    expect(config.churchCenterRoot).toBe(
      'https://crestview-canton.churchcenter.com',
    );
    expect(config.churchCenter.login).toBe(
      'https://crestview-canton.churchcenter.com/login',
    );
  });
});

# Crestview mobile app

Expo (React Native) shell for **Crestview Baptist Church** (Canton, NC).

**Backend:** Planning Center **Church Center** (not a custom Crestview API). Calendar, groups, and class / event signup load Church Center pages in an in-app WebView. Give, livestream, and staff links open crestviewcanton.com (or MyVanco for giving).

Audience: **staff first**, plus **members who sign up for classes**.

Built by [Bear Pixel Media](https://bearpixelmedia.com).

## Setup

From this folder:

```bash
cd apps/crestview-mobile
npm install
cp .env.example .env
npx expo start
```

Then press `i` (iOS simulator), `a` (Android emulator), or scan the QR code with Expo Go on a device.

The Next.js website at the repo root is separate. Do not run site scripts from this folder.

## Environment variables

| Variable | Required? | Purpose |
|----------|-----------|---------|
| `EXPO_PUBLIC_CHURCH_CENTER_URL` | Recommended | Church Center org root, e.g. `https://crestviewbaptistchurch.churchcenter.com`. This is the confirmed org; only override it if the church's org ever changes. |
| `EXPO_PUBLIC_GIVE_URL` | Optional | Overrides Give Online (defaults to MyVanco). |
| `EXPO_PUBLIC_LIVE_URL` | Optional | Overrides livestream page. |
| `EXPO_PUBLIC_STAFF_URL` | Optional | Overrides Our Staff page. |

Copy `.env.example` to `.env` for local work. Restart Expo after changing env vars.

### How staff find the Church Center URL + Planning Center admin

1. Open [churchcenter.com](https://churchcenter.com) or the church’s published Church Center link (often `https://<org>.churchcenter.com`).
2. Crestview’s confirmed org is `https://crestviewbaptistchurch.churchcenter.com`, serving registrations at `/registrations`, calendar at `/calendar`, and groups at `/groups`.
3. For **admin** (create events, groups, registrations, rosters): staff sign in at [planningcenter.com](https://planningcenter.com) with a Planning Center organization account. Church Center is the public / member-facing surface; Planning Center Online is where staff manage data.
4. Paste the org root into `EXPO_PUBLIC_CHURCH_CENTER_URL` (no trailing slash). Example: `https://crestviewbaptistchurch.churchcenter.com`.

## App tabs

| Tab | Behavior |
|-----|----------|
| Home | Crestview branding; links to Give, Live, Staff on the website |
| Calendar | WebView → Church Center `/calendar` |
| Groups | WebView → Church Center `/groups` |
| Classes | WebView → Church Center `/registrations` (class / event signup) |
| More | Contact, website links, About (Bear Pixel Media credit) |

## TestFlight / Play Store notes

1. Create an [Expo](https://expo.dev) account and run `npx eas-cli login` then `npx eas-cli init` in this folder (replace the placeholder `extra.eas.projectId` in `app.json`).
2. Bundle IDs in `app.json`:
   - iOS: `com.crestviewcanton.mobile`
   - Android: `com.crestviewcanton.mobile`
3. Apple: church or Bear Pixel Media Apple Developer account → App Store Connect app → EAS build (`eas build --platform ios`) → submit to TestFlight (`eas submit --platform ios`).
4. Google: Play Console app (Internal testing track first) → EAS Android build → upload AAB.
5. Privacy: Church Center / Planning Center handle auth and personal data for groups and registrations. Document that in store listings. This app does not store church member data itself.
6. Icons / splash: replace `assets/images/*` with final Crestview artwork before store submission.

## Stack

- Expo SDK 58 + Expo Router
- TypeScript
- `react-native-webview` for Church Center
- Brand colors from the website (`pine` / `paper` palette)
- Fonts: Cormorant Garamond + Manrope (same families as the site)

## Monorepo note

This app lives under `apps/crestview-mobile/` beside the Next.js site. It has its own `package.json` and `node_modules`. Root `npm run dev` still only starts the website.

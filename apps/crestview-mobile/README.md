# Crestview mobile app

Expo (React Native) shell for **Crestview Baptist Church** (Canton, NC).

**Backend:** none of its own. The Calendar, Groups, and Classes tabs load the church’s Church Center pages (`crestviewbaptistchurch.churchcenter.com`) in an in-app WebView. Give, livestream, and staff links open the church website (`crestviewcanton.com`), with MyVanco for giving.

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
| `EXPO_PUBLIC_SITE_URL` | Optional | Church website origin for Home / More links. Defaults to `https://crestviewcanton.com`. |
| `EXPO_PUBLIC_CHURCH_CENTER_URL` | Optional | Church Center org used by the Calendar / Groups / Classes tabs. Defaults to `https://crestviewbaptistchurch.churchcenter.com`. |
| `EXPO_PUBLIC_GIVE_URL` | Optional | Overrides Give Online (defaults to MyVanco). |
| `EXPO_PUBLIC_LIVE_URL` | Optional | Overrides livestream page. |
| `EXPO_PUBLIC_STAFF_URL` | Optional | Overrides Our Staff page. |

Copy `.env.example` to `.env` for local work. Restart Expo after changing env vars.

### Where the tabs go

| Tab | Page |
|-----|------|
| Calendar | `https://crestviewbaptistchurch.churchcenter.com/calendar` |
| Groups | `https://crestviewbaptistchurch.churchcenter.com/groups` |
| Classes | `https://crestviewbaptistchurch.churchcenter.com/registrations` |

The church office maintains these pages in Church Center. Links that leave `crestviewbaptistchurch.churchcenter.com` (or `crestviewcanton.com`) open in the phone’s browser instead of the WebView.

## App tabs

| Tab | Behavior |
|-----|----------|
| Home | Crestview branding; links to Give, Live, Staff on the website |
| Calendar | WebView → Church Center `/calendar` |
| Groups | WebView → Church Center `/groups` |
| Classes | WebView → Church Center `/registrations` (class and event signups) |
| More | Contact, website links, About (Bear Pixel Media credit) |

## TestFlight / Play Store notes

1. Create an [Expo](https://expo.dev) account and run `npx eas-cli login` then `npx eas-cli init` in this folder (replace the placeholder `extra.eas.projectId` in `app.json`).
2. Bundle IDs in `app.json`:
   - iOS: `com.crestviewcanton.mobile`
   - Android: `com.crestviewcanton.mobile`
3. Apple: church or Bear Pixel Media Apple Developer account → App Store Connect app → EAS build (`eas build --platform ios`) → submit to TestFlight (`eas submit --platform ios`).
4. Google: Play Console app (Internal testing track first) → EAS Android build → upload AAB.
5. Privacy: the Calendar, Groups, and Classes tabs show public Church Center pages. The app stores no member data; forms and registrations are handled by Church Center.
6. Icons / splash: replace `assets/images/*` with final Crestview artwork before store submission.

## Stack

- Expo SDK 58 + Expo Router
- TypeScript
- `react-native-webview` for the Church Center pages
- Brand colors from the website (`pine` / `paper` palette)
- Fonts: Cormorant Garamond + Manrope (same families as the site)

## Monorepo note

This app lives under `apps/crestview-mobile/` beside the Next.js site. It has its own `package.json` and `node_modules`. Root `npm run dev` still only starts the website.

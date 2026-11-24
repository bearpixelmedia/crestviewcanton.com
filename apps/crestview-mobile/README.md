# Crestview mobile app

Expo (React Native) app for **Crestview Baptist Church**, Canton, NC. It is a
branded shell around **Planning Center Church Center**, so staff and class
members get groups, calendars, class signup, and the directory without a custom
backend.

Built by [Bear Pixel Media](https://bearpixelmedia.com).

## Stack

- Expo SDK 58 with Expo Router (typed routes)
- TypeScript
- `react-native-webview` loading Church Center
- Brand colors and mark taken from [crestviewcanton.com](https://crestviewcanton.com)

## Tabs and Church Center URL mapping

The Church Center org root comes from `EXPO_PUBLIC_CHURCH_CENTER_URL`. Every
path below is relative to that root. There is no default org, so until the
variable is set every Church Center screen shows a setup message instead of a
WebView.

| Tab | Opens | Login needed? |
| --- | --- | --- |
| Home | Native screen. Logo, Church Center entry point, Give / Live / Staff links | No |
| Groups | `/groups` | List is public. "My groups", joining a group, and group signup need a Church Center login |
| Calendar | `/calendar` | Event list is public. Event registration needs a login |
| Classes | `/registrations/events` | List is public. Registering for a class needs a login |
| More | Native screen. In-app Church Center (`/home`), website links, contact | Directory (`/directory`) needs a login |
| About | Native screen with paths and credits | No |

Church Center paths used by the app (see `constants/config.ts`):

```
/home
/calendar
/groups
/registrations/events     # /registrations redirects here
/directory                # redirects to /login?return=/directory
/login
```

### Login and cookie behavior

Church Center handles auth itself. The app does not have its own accounts, and
it does not store member data.

- Public pages: `/calendar`, `/groups`, and `/registrations/events` render
  without a session.
- Login required: the member directory, a member's groups, group join or signup,
  event registration, and check-in all redirect to `/login`.
- The WebView keeps the Church Center session with `sharedCookiesEnabled` on
  iOS, `thirdPartyCookiesEnabled` on Android, and DOM storage enabled. Signing in
  on one tab carries to the other tabs.
- Sign-in identity providers that Planning Center can hand off to (Google,
  Apple) stay inside the WebView. Any other external link (giving, website)
  opens in the phone browser.
- iOS swipe back and Android hardware back walk WebView history before leaving
  the tab.

### Device smoke test: login and directory

Run this on a real iPhone and a real Android phone against a build pointed at
the confirmed Canton org. Uninstall the app first so no Church Center cookie
survives from an earlier test.

1. Build once with `EXPO_PUBLIC_CHURCH_CENTER_URL` empty. Groups, Calendar,
   Classes, and More → Church Center must all show "Church Center is not set
   up", never a Church Center page. Then rebuild with the org set.
2. With no one signed in, open Groups and Calendar. Both lists should render.
3. More → Church Center → Sign in. The Church Center form must appear inside
   the app, not in Safari or Chrome. Sign in with a member account.
4. After signing in, open More → Church Center → Directory. It should list
   members without a second login. A bounce to `/login?return=/directory`
   means cookies are not persisting.
5. Move Groups → Calendar → Classes → back to Directory. The session must hold
   on every tab with no repeated login.
6. Force quit the app, reopen it, and open Directory again. Still signed in
   means cookies survived a cold start.
7. Sign out in Church Center, then reopen Directory. It should send you back to
   `/login`.
8. On Android, press hardware back inside Church Center: it should go back one
   page. On iOS, use the swipe-back gesture. Both should walk history before
   leaving the tab.
9. Tap Give Online or the church website from Home. It should open in the phone
   browser, not inside the WebView.
10. Turn on airplane mode and open Calendar. The "Could not load" screen with
    Try again should appear instead of a blank page.

### Church Center org must be confirmed before shipping

`https://crestviewbaptist.churchcenter.com` is the URL named in the product
brief, but **as of November 24, 2026 that org is not the Canton church.** Its
Church Center home shows Crestview Baptist Church in Griffin, GA (1670 North
Expressway, Griffin, GA 30223), and no Church Center org is publicly
discoverable for Crestview in Canton, NC. The Canton website does not publish a
Church Center link either.

Because of that, the app has no default org. When
`EXPO_PUBLIC_CHURCH_CENTER_URL` is unset, the WebView screens render "Church
Center is not set up" with the variable name, and the app never loads the
Griffin org. The church office needs to confirm the Canton Planning Center
organization. Once confirmed, set the variable in `.env`, restart Expo or
rebuild, and every tab follows it with no code change.

## Local development

```bash
cd apps/crestview-mobile
npm install
cp .env.example .env
npx expo start
```

Then set `EXPO_PUBLIC_CHURCH_CENTER_URL` in `.env` to the confirmed Canton org.
`.env.example` ships that line commented out, so an unedited copy shows the
setup screen on purpose.

Press `i` for the iOS simulator, `a` for the Android emulator, or scan the QR
code with Expo Go. `react-native-webview` ships in Expo Go, so no development
build is required to try the shell.

Restart Expo after changing `.env`.

The Next.js website at the repo root is a separate app. Root `npm run dev` does
not start this one.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `EXPO_PUBLIC_CHURCH_CENTER_URL` | Required | Church Center org root, no trailing slash. No default: when unset, Church Center screens show a setup message instead of loading another church's org |
| `EXPO_PUBLIC_GIVE_URL` | Optional | Overrides Give Online. Defaults to MyVanco |
| `EXPO_PUBLIC_LIVE_URL` | Optional | Overrides the livestream page |
| `EXPO_PUBLIC_STAFF_URL` | Optional | Overrides the Our Staff page |

Only `EXPO_PUBLIC_*` values are exposed to the app bundle, so never put a secret
in `.env` here.

## Checks

```bash
npm test
npx tsc --noEmit
npx expo-doctor
```

`npm test` runs Jest through the `jest-expo` preset. `constants/config.ts` is
covered for no org configured, whitespace-only values, path building, and
trailing-slash trimming. `components/ChurchCenterWebView.test.tsx` checks that
the setup message renders and no WebView mounts while the org is unset. Device
behavior still needs the smoke test above.

## EAS builds for TestFlight and Play internal testing

The code is finished without any Apple or Google credentials. Credentials are
only needed when a build is uploaded to a store account. Work through these in
order: steps 1 to 4 set up the account and project, steps 5 to 8 cover bundle
IDs, builds, and updates.

1. Create the Expo account at https://expo.dev/signup with the church Gmail.
   Use a shared username such as `crestview-canton`, verify the email, and keep
   the recovery details with the church office. The account should belong to the
   church or to Bear Pixel Media, not to a personal address that may leave with
   whoever set it up.
2. Create the EAS access token. Sign in, open Account settings, then Access
   tokens, and choose Create token. Name it `eas-cli`, keep the default scope,
   and copy the value once. Expo does not show it again.
3. Store the token outside the repository:
   - On this computer: export it in the shell that runs EAS
     (`export EXPO_TOKEN=...`) or let `eas-cli` prompt for it. Never put it in
     `.env`, `.env.example`, `.env.local`, or any tracked file.
   - In automation: add it as a repository secret named `EXPO_TOKEN` under
     Settings, Secrets and variables, Actions.

   Paste the token into the prompt or the secret field, never into a message.
4. Confirm the account, then link the project. With `EXPO_TOKEN` set, EAS
   already knows the account; if you are signed out, run
   `npx eas-cli@latest login` first. From this folder run:

   ```bash
   npx eas-cli@latest whoami
   npx eas-cli@latest init
   ```

   `whoami` prints the account without printing the token. `init` writes
   `extra.eas.projectId` into `app.json`; commit that change. If the token is
   ever pasted into chat, a ticket, or a log, delete it in Access tokens and
   create a new one.
5. Bundle IDs are already set in `app.json`:

   - iOS: `com.crestviewcanton.mobile`
   - Android: `com.crestviewcanton.mobile`

   They can only change before the first store upload.

6. Internal builds (TestFlight / Play internal track). `eas.json` defines a
   `preview` profile that produces an installable build:

   ```bash
   npx eas-cli@latest build --profile preview --platform ios
   npx eas-cli@latest build --profile preview --platform android
   ```

   iOS internal builds need each test device registered first
   (`npx eas-cli@latest device:create`). Android preview builds are APKs.

7. Production builds and store upload:

   ```bash
   npx eas-cli@latest build --profile production --platform all
   npx eas-cli@latest submit --platform ios
   npx eas-cli@latest submit --platform android
   ```

   - TestFlight: needs an Apple Developer Program membership, an App Store
     Connect app record for `com.crestviewcanton.mobile`, and either an Apple ID
     with an app-specific password or an App Store Connect API key. EAS prompts
     for these on the first iOS build or submit.
   - Play internal testing: needs a Google Play Console account, an app created
     for `com.crestviewcanton.mobile`, and a service account JSON with release
     permissions. Add it with `npx eas-cli@latest credentials`.
   - The `production` profile auto-increments the build number. App version
     stays at `app.json` `version` until it is raised by hand.

8. Over-the-air updates are not configured. Add `expo-updates` and an update
   channel later if the church wants JS-only fixes without a store build.

### Store review notes

- The app is a WebView shell, which Apple reviews under guideline 4.2 (minimum
  functionality). The native Home, More, and About screens plus church-specific
  shortcuts are the native value. Expect review questions and have the church's
  Planning Center plan ready.
- Privacy: Church Center and Planning Center handle accounts and member data.
  The app stores no member data itself. Use
  `https://crestviewcanton.com/privacy` as the privacy policy URL in App Store
  Connect and Play Console; the page also links Planning Center's policy. The
  app description can say the app stores no member data.
- Replace `assets/images/*` if the church supplies newer artwork. The current
  icons are generated from `public/brand/crestview-mark.png` in this repo.

## Project layout

```
app/                      Expo Router routes
  (tabs)/index.tsx        Home
  (tabs)/groups.tsx       Church Center groups
  (tabs)/calendar.tsx     Church Center calendar
  (tabs)/classes.tsx      Church Center registrations
  (tabs)/more.tsx         Links, contact, Church Center
  church-center.tsx       Full Church Center WebView
  about.tsx               Paths, org URL, credits
components/               BrandLockup, Screen, ChurchCenterWebView
constants/                Brand colors and config
```

## Out of scope

- Custom Firebase, Supabase, or other backend
- Scraping Planning Center APIs without OAuth
- App Store or Play submission without the church's Apple and Google accounts

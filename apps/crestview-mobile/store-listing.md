# Store listing copy

Draft listing text for the App Store and Google Play. Character limits are noted
per field. The privacy policy URL is live after this merges and deploys:
`https://crestviewcanton.com/privacy`.

| Field | Value |
| --- | --- |
| Privacy policy URL | `https://crestviewcanton.com/privacy` |
| Support URL | `https://crestviewcanton.com/contact` |
| Marketing URL | `https://crestviewcanton.com` |
| Support email | `crestviewcanton@gmail.com` |

## App Store

**Name** (30 characters): `Crestview Baptist Church`

**Subtitle** (30): `Canton, NC church center`

**Promotional text** (170): Groups, calendar, class signup, and the church
directory in one place. Sign in once with Church Center and move between tabs
without signing in again.

**Description** (4000):

```
Crestview Baptist Church is a Southern Baptist congregation on Pisgah Drive in Canton, North Carolina. This app keeps the church calendar, groups, class signup, and member directory a tap away.

WHAT YOU CAN DO

- Open Planning Center Church Center inside the app.
- Check the church calendar, including events and registration links.
- Find your groups and join or sign up where the church allows it.
- Browse class listings and register for a class.
- Sign in once, then use the member directory and other Church Center pages across tabs.
- Give online, watch the livestream, and reach staff pages from Home and More.

ABOUT SIGN IN

Calendar, groups, and class listings are public. The member directory, joining a group, and registering for a class use your existing Church Center account. The app does not create accounts, and it stores no member data on church servers.

PRIVACY

Planning Center Church Center handles accounts and member information. The app itself has no ads, analytics, or tracking. Read the full policy at https://crestviewcanton.com/privacy.

Built for Crestview Baptist Church by Bear Pixel Media.
```

**Keywords** (100, comma separated, no spaces):

```
church,Canton,NC,Baptist,groups,calendar,events,classes,directory,giving,sermons,prayer
```

**Primary category:** Lifestyle

**Age rating:** 4+ (no ads, no unrestricted web browsing, no user-generated content in the app itself)

**Copyright:** © 2026 Crestview Baptist Church

**App Privacy answers:** Data Not Collected. The app has no analytics, ads, or
tracking SDKs, and the Church Center session cookie stays on the device. Confirm
this in App Store Connect against the current build, since adding any SDK
changes the answer.

## Google Play

**App name** (30): `Crestview Baptist Church`

**Short description** (80): Groups, calendar, classes, and the church directory
for Crestview in Canton, NC.

**Full description** (4000):

```
Stay connected with Crestview Baptist Church in Canton, North Carolina.

The Crestview app opens Planning Center Church Center inside the app, so you can find your groups, check the church calendar, sign up for a class, and use the member directory without a separate account in the app.

WHAT YOU CAN DO

- See upcoming events and registration links on the church calendar.
- Find your groups and join or sign up where the church allows it.
- Browse class listings and register.
- Sign in once with Church Center, then move between tabs without signing in again.
- Give online through Vanco, watch the livestream, and open staff and ministry pages on crestviewcanton.com.

ABOUT SIGN IN

Calendar, groups, and class listings are public. The member directory, joining a group, and class registration need a Church Center login. Accounts and member information are handled by Planning Center Church Center, not by this app.

PRIVACY

The app stores no member data on church servers and includes no ads, analytics, or tracking. Read the full policy at https://crestviewcanton.com/privacy.

Crestview Baptist Church meets at 3258 Pisgah Drive, Canton, NC 28716. Life Groups at 9:30 AM, Morning Worship at 10:45 AM.

Built by Bear Pixel Media.
```

**Category:** Lifestyle

**Contact details:** `crestviewcanton@gmail.com`, `(828) 648-1110`,
`https://crestviewcanton.com`

**Data safety:** No data collected, no data shared, no ads. The app has no
analytics or tracking SDKs and does not request location, contacts, photos,
camera, or microphone. Keep the disclosure in step with the build if any SDK is
added later.

**App access:** Some screens need a Church Center login. Provide Play review with
a member test account, and note that Calendar, Groups, and Classes open without
signing in.

## Screenshots and graphics

Sizes checked against Apple's Screenshot specifications and Google Play's preview
asset rules in November 2026. Neither store accepts images with an alpha
channel.

### App Store

- **iPhone, required:** at least one screenshot at **1206 x 2622** or
  **1179 x 2556** portrait (iPhone with Dynamic Island, medium display). A
  6.9-inch set at **1320 x 2868**, **1290 x 2796**, or **1260 x 2736** is also
  accepted and scaled down, so either size satisfies the requirement.
- **iPad 13-inch, required:** **2064 x 2752** or **2048 x 2732** portrait,
  because `app.json` sets `supportsTablet: true`. Without it App Store Connect
  will not accept the build. If the church decides the iPad layout is not ready,
  the alternative is to ship iPhone-only by turning `supportsTablet` off, which
  is a product decision, not a screenshot workaround.
- 1 to 10 screenshots per size, JPEG or PNG, no transparency.
- App icon: **1024 x 1024** PNG, no alpha, exported from
  `assets/images/icon.png`.

### Google Play

- **Phone screenshots:** at least 2, up to 8, JPEG or 24-bit PNG with no alpha,
  each side between **320 and 3840 px**, long side no more than twice the short
  side. Capture at **1080 x 1920**.
- 4 or more screenshots at 1080 px or larger make the listing eligible for
  Google Play's larger recommendation formats.
- **Feature graphic:** **1024 x 500**, JPEG or 24-bit PNG with no alpha.
  Required for every listing.
- **App icon:** **512 x 512**, 32-bit PNG with no alpha, 1 MB max.
- 7-inch and 10-inch tablet screenshots are optional. Add them if the tablet
  layout is checked.

### Shot list

Capture after the Canton org is confirmed, from a preview or production build
rather than Expo Go, so no developer overlay appears. Use a member test account
for shots 5 and 7, and keep real member names out of every image.

| # | Screen | What to show | Capture on | Suggested caption |
| --- | --- | --- | --- | --- |
| 1 | Home | Native lockup and tagline, the REACH · EQUIP · SEND band, the Church Center card, and the Give Online, Watch Live, Our Staff rows | iPhone, iPad, Android | Your church, one tap away |
| 2 | Calendar | `/calendar` with four to six real upcoming events and their dates | iPhone, iPad, Android | See what is coming up |
| 3 | Groups | `/groups` with several groups visible | iPhone, iPad, Android | Find your groups |
| 4 | Classes | `/registrations/events`, scrolled to show at least two classes | iPhone, iPad, Android | Sign up for a class |
| 5 | Directory, signed in | `/directory` after Church Center sign-in, using the test household. Blur, cover, or use test-only names for everyone else | iPhone, iPad, Android | Directory for members |
| 6 | More | Native More list: Church Center, website, giving, livestream, staff, phone, email, About | iPhone, Android | More ways to connect |
| 7 | About, privacy | The Privacy section with the Privacy Policy link and the line that the app stores no member data | iPhone, Android | Clear about privacy |

Recommended sets: 6 screenshots for each phone listing (shots 1 to 6, plus 7 if
the About screen is wanted), and 4 for the iPad listing (Home, Calendar, Groups,
Directory). Apple accepts 1 as a minimum, but 4 shows the layout across the app.
Screenshots must match the build under review.

### Capture setup

- Point `.env` at the confirmed Canton org and rebuild. Every WebView tab must
  show real content, not the setup message.
- Use a clean device or simulator: light mode, full battery, 9:41 status bar, no
  notifications or badges, no personal wallpaper, English (US).
- iPhone: iPhone 16 Pro Max simulator or device gives 1320 x 2868. iPad: iPad Pro
  13-inch (M4) gives 2064 x 2752. Android: Pixel emulator at 1080 x 1920.
- Capture portrait, then export JPEG or fully opaque PNG. Flatten any
  transparency before upload.
- Sign in before shots 5 and 7, then sign out and clear app data afterwards.
- Do not capture system permission prompts, debug banners, or a Church Center
  login form with a real password entered.
- Keep the store art out of the app bundle; `assets/images/*` holds only the
  icons and splash that ship with the binary.

## Store review notes

- The app is a WebView shell and Apple reviews that under guideline 4.2. The
  native Home, More, and About screens, the branded header, and the church
  shortcuts are the native value. Have the church's Planning Center plan ready
  if review asks.
- Privacy policy URL for both stores: `https://crestviewcanton.com/privacy`. The
  same URL is linked from the footer of crestviewcanton.com and from the app's
  About screen.
- The app has no accounts of its own. Church Center, Planning Center, Formspree,
  Google Analytics (website only, when enabled), and Vanco are described in the
  policy.
- Replace `assets/images/*` if the church supplies newer artwork. The current
  icons come from `public/brand/crestview-mark.png`.

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

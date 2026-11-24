import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Crestview Baptist Church handles information in the Crestview mobile app and on crestviewcanton.com.",
  path: "/privacy",
});

const EFFECTIVE_DATE = "November 24, 2026";

const linkClass = "text-canopy underline underline-offset-2 hover:text-pine";

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        lead="How Crestview Baptist Church handles information in the Crestview mobile app and on this website. In short: we do not sell your information, the app has no accounts of its own, and member data stays in Planning Center Church Center."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="text-sm text-ink/60">Effective {EFFECTIVE_DATE}</p>

          <p className="mt-6 text-ink/80 leading-relaxed">
            This policy covers the Crestview mobile app for iOS and Android and
            the website at{" "}
            <a href={site.url} className={linkClass}>
              crestviewcanton.com
            </a>
            . It does not cover Planning Center, Formspree, Vanco, YouTube,
            Facebook, Instagram, or other services we link to. Each of those has
            its own privacy policy.
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">
            Who we are
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            {site.name}, {site.address.full}. You can reach the church office at{" "}
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>{" "}
            or{" "}
            <a href={`tel:${site.phoneTel}`} className={linkClass}>
              {site.phone}
            </a>
            .
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">
            What the mobile app does
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            The Crestview app is a branded shell that displays Planning Center
            Church Center inside the app. The app does not create accounts, ask
            for your name, email address, or password, or store member
            information on our servers.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80 leading-relaxed">
            <li>
              The app does not include advertising, analytics, crash reporting,
              or third party tracking.
            </li>
            <li>
              The app does not request access to your location, contacts,
              photos, camera, or microphone.
            </li>
            <li>
              When you sign in to Church Center, the web view stores a session
              cookie on your device so you stay signed in between tabs and
              visits. The app does not read or copy that cookie. Signing out in
              Church Center, or clearing the app&apos;s data, removes it.
            </li>
            <li>
              Links to other services, such as online giving, YouTube, or the
              church website, open in your phone&apos;s browser, outside the app.
            </li>
          </ul>

          <h2 className="mt-10 font-display text-2xl text-pine">
            Church Center and Planning Center
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            Groups, the church calendar, class signup, check-in, the member
            directory, and contribution records are provided through Planning
            Center Church Center. Planning Center is a separate company that
            processes this information on the church&apos;s behalf under its own
            privacy policy at{" "}
            <a
              href="https://planning.center/privacy/"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              planning.center/privacy
            </a>
            . What appears in the directory, and who can see it, is controlled by
            the church in Planning Center. Contact the office to update or
            remove your household information.
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">
            Forms on this website
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            When you submit a form on this website, such as contact, prayer
            request, plan your visit, newsletter, or serve, the details you enter
            are sent through Formspree to the church office inbox so staff can
            respond. Formspree processes the submission on our behalf under its
            own privacy policy at{" "}
            <a
              href="https://formspree.io/legal/privacy-policy/"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              formspree.io/legal/privacy-policy
            </a>
            . Please do not include sensitive information, such as medical
            details or financial account numbers, in a form.
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">
            Website analytics and logs
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            If the church has enabled Google Analytics on this website, Google
            receives standard usage information such as pages visited, an
            approximate location derived from your IP address, and device type.
            We use it only to understand which pages are helpful. The mobile app
            does not load Google Analytics. Our hosting provider also keeps
            standard server logs, which can include IP addresses and request
            times, for security and reliability.
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">
            Online giving
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            Give Online opens Vanco, also called MyVanco, in your browser. Payment
            details are entered there and handled by Vanco, not by this app or
            website. The church receives contribution records through Planning
            Center and Vanco for giving statements and church business.
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">Children</h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            The app and website are intended for adults and families and are not
            directed to children under 13. Children&apos;s ministry check-in and
            family information are managed by the church in Planning Center with
            a parent or guardian. Please do not submit a child&apos;s personal
            information through a website form.
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">
            Your choices
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/80 leading-relaxed">
            <li>Sign out of Church Center, or clear the app&apos;s data, to end a session.</li>
            <li>
              Email the office to ask what directory information the church has
              about your household, or to correct or remove it.
            </li>
            <li>
              Use the unsubscribe link in a newsletter, or ask the office, to stop
              receiving email updates.
            </li>
          </ul>

          <h2 className="mt-10 font-display text-2xl text-pine">
            Changes to this policy
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            We may update this policy as the app or Church Center changes. When we
            do, we will post the new version here with a new effective date.
          </p>

          <h2 className="mt-10 font-display text-2xl text-pine">Contact</h2>
          <p className="mt-3 text-ink/80 leading-relaxed">
            Questions about this policy can go to {site.name},{" "}
            {site.address.full}, by email at{" "}
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
            , or by phone at{" "}
            <a href={`tel:${site.phoneTel}`} className={linkClass}>
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}

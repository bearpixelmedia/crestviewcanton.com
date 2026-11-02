import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give Online",
  description:
    "Partner with Crestview Baptist Church through online giving, text-to-give, and in-person offerings.",
};

export default function GiveOnlinePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Give Online"
        title="Because of you, we get to reach more people for Jesus."
        lead="Thank you for everything you do! Because of you, we are blessed with opportunities to reach more people for Jesus. Below are ways you can contribute — and there are more ways than finances to help grow our ministry."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <blockquote className="border-l-2 border-gold pl-5 font-display text-xl leading-snug text-canopy">
            “But this I say: He who sows sparingly will also reap sparingly, and
            he who sows bountifully will also reap bountifully… for God loves a
            cheerful giver.”
            <cite className="mt-3 block font-sans text-sm not-italic text-ink/60">
              2 Corinthians 9:6–7
            </cite>
          </blockquote>

          <div className="mt-12 space-y-10">
            <div>
              <h2 className="font-display text-2xl text-pine">
                Start Giving Today
              </h2>
              <p className="mt-3 text-ink/75 leading-relaxed">
                Use the online giving form to give securely. If you are donating
                to a designated fund (for example Local Missions), select that
                option so gifts go directly to the correct fund.
              </p>
              <a
                href={site.giveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog hover:bg-canopy"
              >
                Give Now
              </a>
            </div>

            <div className="border-t border-pine/10 pt-8">
              <h2 className="font-display text-2xl text-pine">Text to Give</h2>
              <p className="mt-3 text-ink/75">
                Have a cell phone? You can Text to Give:{" "}
                <a
                  href={`sms:${site.textToGive}`}
                  className="font-semibold text-canopy"
                >
                  {site.textToGiveDisplay}
                </a>
              </p>
            </div>

            <div className="border-t border-pine/10 pt-8">
              <h2 className="font-display text-2xl text-pine">
                Building / Campaign Giving
              </h2>
              <p className="mt-3 text-ink/75 leading-relaxed">
                If you would like to give toward building needs (such as the
                Educational Wing / Welcome Center / Master Building Fund when
                campaigns are active), choose the appropriate fund in the giving
                form.
              </p>
            </div>

            <div className="border-t border-pine/10 pt-8">
              <h2 className="font-display text-2xl text-pine">
                In Church &amp; By Mail
              </h2>
              <p className="mt-3 text-ink/75 leading-relaxed">
                Give during worship services, or stop by the church office.
                <br />
                {site.address.full}
                <br />
                {site.phone}
              </p>
            </div>
          </div>

          <p className="mt-14 text-sm text-ink/60">
            Your partnership helps Crestview Reach, Equip, and Send — for the
            glory of Jesus Christ.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

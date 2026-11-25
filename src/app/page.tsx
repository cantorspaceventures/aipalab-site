import { Check, RatingBadge } from "@/components/graphics";
import { HeroVideo } from "@/components/hero-video";

const APP_URL = "https://app.aipalab.in";
const CONTACT = "mailto:info@aipalab.in?subject=aipalab%20walkthrough";

const stages = [
  { code: "G0", name: "Intake", body: "Upload the deck, financials and data room. The assessment reads everything and lists what is missing.", owner: "aipalab with the sponsor" },
  { code: "G1", name: "Screen", body: "Mandate fit, red flags and a first view of the opportunity, in minutes rather than weeks.", owner: "aipalab" },
  { code: "G2", name: "Deep dive", body: "Market sizing, competition, team, unit economics, a full financial model and stress-tested scenarios.", owner: "aipalab, your analysts review" },
  { code: "G3", name: "Committee pack", body: "An investment memo with every figure sourced, the risks ranked and a suggested rating.", owner: "aipalab, your analysts edit" },
  { code: "G4", name: "Decision", body: "Your committee reviews, decides and signs. The record shows what was suggested and what was decided.", owner: "Your committee only", committee: true },
];

const coverage = [
  { title: "Market and competition", body: "Top-down and bottom-up sizing, competitor maps, pricing benchmarks and demand signals from live research.", data: "TAM · SAM · SOM · 12+ sources cited" },
  { title: "Team and governance", body: "Founder track record, cap table, related parties, board structure and key-person risk.", data: "Background checks · cap table review" },
  { title: "Financial model", body: "A three-statement model rebuilt from the sponsor's numbers, with the assumptions shown and challenged.", data: "IRR · MOIC · NPV · payback · DSCR" },
  { title: "Scenario analysis", body: "Monte Carlo and named scenarios on the drivers that matter, so every return carries its range.", data: "P10 · P50 · P90 · sensitivity tornado" },
  { title: "Synthetic customer panel", body: "Simulated buyer interviews that test the offer, price points and objections before money is committed.", data: "Personas · willingness to pay · objections" },
  { title: "Cross-border and regulatory", body: "Structuring, licensing, tax and FX exposure for projects that cross jurisdictions, including India and the GCC.", data: "FDI / ODI · free zone vs mainland · treaties" },
];

const lenses = [
  { name: "Venture capital", body: "Is the market big enough and the team strong enough for an outsized outcome? Founder-market fit, traction quality and the path to the next round.", data: "Power-law return · milestones to next round" },
  { name: "Private equity", body: "Can the business carry the capital and grow cash flow? Quality of earnings, leverage capacity, value-creation levers and exit routes.", data: "EBITDA quality · leverage · exit multiple" },
  { name: "Family office and HNI", body: "Does it fit this investor's mandate, horizon and appetite for risk? Capital preservation, income, ticket size and concentration.", data: "Mandate fit · downside · liquidity" },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="wordmark" href="/" aria-label="aipalab home">aipalab</a>
          <nav className="nav-links" aria-label="Main">
            <a href="#how-it-works">How it works</a>
            <a href="#coverage">What we cover</a>
            <a href="#governance">Your committee decides</a>
            <a href="#plans">Plans</a>
          </nav>
          <div className="header-actions">
            <a className="btn btn--outline-petrol hide-sm" href={CONTACT}>Book a walkthrough</a>
            <a className="btn btn--on-petrol" href={APP_URL}>Sign in</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <p className="eyebrow">AI Incubated Project Appraisal Lab</p>
              <h1 className="display-xl">Appraise every project the way an investment committee would.</h1>
              <p className="body-l">
                aipalab takes a project from pitch deck to committee pack. It researches the market, rebuilds the financial
                model, runs the scenarios and asks the questions a seasoned analyst would ask, with every step shown.
              </p>
              <div className="btn-row">
                <a className="btn btn--on-petrol" href={CONTACT}>Book a walkthrough</a>
                <a className="btn btn--outline-petrol" href="#how-it-works">See how it works</a>
              </div>
              <p className="hero-note">Decision support for investment committees. Your committee makes every decision.</p>
            </div>

            <HeroVideo />
          </div>
        </section>

        <section className="audience" aria-label="Who it is for">
          <div className="wrap">
            <p className="eyebrow">Built for</p>
            <ul>
              <li>Trade and investment councils</li>
              <li>Family offices</li>
              <li>Angel networks and syndicates</li>
              <li>Accelerators and incubators</li>
              <li>Development finance teams</li>
            </ul>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2 className="display-l">Five gates, from first upload to a signed decision.</h2>
              <p className="body-l muted measure">
                Each project moves through the same gates your best analysts would use. You can stop at a screen, or take
                it all the way to a committee pack. Nothing passes G4 without your people.
              </p>
            </div>
            <ol className="stages">
              {stages.map((s) => (
                <li key={s.code} className={`stage${s.committee ? " stage--committee" : ""}`}>
                  <span className="stage-code">{s.code}</span>
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                  <span className="owner">{s.owner}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--raised" id="coverage">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What every deep dive covers</p>
              <h2 className="display-l">The full diligence workload, done in days and shown in full.</h2>
            </div>
            <div className="coverage">
              {coverage.map((c) => (
                <div key={c.title} className="cover-item">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <p className="data">{c.data}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--petrol" id="lenses">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Three investor lenses</p>
              <h2 className="display-l">The same project, read the way each kind of investor reads it.</h2>
              <p className="body-l measure" style={{ color: "rgba(244,246,244,.82)" }}>
                A project that suits a family office can be wrong for a venture fund. aipalab scores each project through
                all three lenses and matches it against each funder&apos;s mandate.
              </p>
            </div>
            <div className="lenses">
              {lenses.map((l) => (
                <div key={l.name} className="lens">
                  <h3>{l.name}</h3>
                  <p>{l.body}</p>
                  <p className="data">{l.data}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="conversation">
          <div className="wrap split">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Ask, answer, by text or voice</p>
              <h2 className="display-l">An analyst that asks the next question.</h2>
              <p className="body-l muted">
                The assessment questions the sponsor where the data is thin, and answers your committee&apos;s questions with
                its sources. You can type, or talk to it.
              </p>
              <ul className="checks">
                <li><Check /><span>Follow-up questions sent to the sponsor, with answers logged against the claim they test</span></li>
                <li><Check /><span>Every answer cites the document, dataset or page it came from</span></li>
                <li><Check /><span>Voice mode for walk-throughs and committee preparation</span></li>
              </ul>
            </div>
            <div className="chat" aria-label="Example conversation">
              <div className="chat-head">
                <span className="eyebrow" style={{ color: "var(--ink-muted)" }}>G2 · Deep dive · Example</span>
                <span className="data muted">Cold-chain logistics hub</span>
              </div>
              <div className="msg msg--you">
                <span className="who">Committee member</span>
                <p>Why is the IRR range so wide?</p>
              </div>
              <div className="msg msg--lab">
                <span className="who">aipalab</span>
                <p>
                  Two drivers explain most of it: warehouse utilisation in year 2 (assumed 72%, peers run 55 to 85%) and the
                  power tariff. If utilisation holds at 65%, the P50 IRR falls from 24.6% to 19.1%. I&apos;ve asked the sponsor
                  for signed offtake letters.
                </p>
                <span className="cite">Sources: sponsor model v3, tab Ops · regional tariff schedule 2026</span>
              </div>
              <div className="voice" aria-hidden="true">
                <span className="voice-bars">
                  {[8, 14, 18, 10, 16, 6, 12].map((h, i) => (
                    <i key={i} style={{ height: h }} />
                  ))}
                </span>
                Voice mode is on. Ask a follow-up.
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised" id="governance">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Your committee decides</p>
              <h2 className="display-l">aipalab prepares the case. Your people make the call.</h2>
              <p className="body-l muted measure">
                aipalab is a decision-support tool, not an adviser. Its ratings are suggestions for your internal use, and the
                record keeps them apart from what your committee decides.
              </p>
            </div>
            <div className="gov">
              <div className="gov-item">
                <h3>Named sign-off</h3>
                <p>A decision at G4 needs a named signatory from your committee. aipalab cannot issue one on its own.</p>
              </div>
              <div className="gov-item">
                <h3>A full audit trail</h3>
                <p>Every input, question, source, model version and edit is logged, so any figure can be traced back.</p>
              </div>
              <div className="gov-item">
                <h3>Your data stays yours</h3>
                <p>Each client has its own workspace. Projects and documents are never shared across clients or used to train models.</p>
              </div>
            </div>
            <div className="ledger" role="region" aria-label="Example decision log" tabIndex={0}>
              <table>
                <thead>
                  <tr><th>Project</th><th>Suggested by aipalab</th><th>Committee decision</th><th>Signed</th></tr>
                </thead>
                <tbody>
                  <tr><td>Cold-chain logistics hub, phase 2</td><td><RatingBadge rating="conditions" /></td><td><RatingBadge rating="recommended" /></td><td className="data">18 Nov 2026 · Chair</td></tr>
                  <tr><td>Agritech export platform</td><td><RatingBadge rating="watchlist" /></td><td><RatingBadge rating="watchlist" /></td><td className="data">11 Nov 2026 · Chair</td></tr>
                  <tr><td>Solar EPC contractor</td><td><RatingBadge rating="declined" /></td><td><RatingBadge rating="declined" /></td><td className="data">4 Nov 2026 · Vice-chair</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small muted" style={{ marginTop: "var(--space-3)" }}>Example records for illustration.</p>
          </div>
        </section>

        <section className="section" id="plans">
          <div className="wrap plans">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Plans</p>
              <h2 className="display-l">One monthly allowance, spent on the work you need.</h2>
              <p className="body-l muted">
                Each plan includes a monthly token allowance. A quick screen costs a little; a full deep dive costs more.
                Unused tokens carry over for a month, and a run that fails is refunded.
              </p>
              <p className="muted">Plans are priced for each organisation, with onboarding and training included.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href={CONTACT}>Talk to us about a plan</a>
              </div>
            </div>
            <div>
              <div className="meter" aria-label="Example token balance">
                <div className="meter-head">
                  <span className="eyebrow" style={{ color: "var(--ink-muted)" }}>Tokens · November <span className="example-tag">Example</span></span>
                  <span className="meter-balance">1,240 left</span>
                </div>
                <div className="meter-track" role="img" aria-label="2,400 tokens available: 1,010 used, 150 reserved, 1,240 left">
                  <span className="meter-used" style={{ width: "42%" }} />
                  <span className="meter-reserved" style={{ width: "6%" }} />
                </div>
                <div className="meter-legend">
                  <span><i style={{ background: "var(--accent)" }} />1,010 used</span>
                  <span><i style={{ background: "var(--brass)" }} />150 reserved</span>
                  <span>2,000 this month + 400 carried over</span>
                </div>
              </div>
              <ul className="price-list" aria-label="What tokens buy">
                <li><span>Quick screen (G1)</span><span className="data">15 tokens</span></li>
                <li><span>Full deep dive (G2 and G3)</span><span className="data">150 tokens</span></li>
                <li><span>Extra research module</span><span className="data">50 tokens</span></li>
                <li><span>Synthetic customer panel</span><span className="data">25 tokens</span></li>
                <li><span>Questions, answers and exports</span><span className="data">Included</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--petrol">
          <div className="wrap cta">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 className="display-l">See a project go from deck to committee pack.</h2>
              <p className="body-l">Bring one of your own projects to a walkthrough, and we&apos;ll run it through the gates with you.</p>
            </div>
            <div className="btn-row">
              <a className="btn btn--on-petrol" href={CONTACT}>Book a walkthrough</a>
              <a className="btn btn--outline-petrol" href={APP_URL}>Sign in</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a className="wordmark" href="/">aipalab</a>
              <p style={{ marginTop: "var(--space-4)", maxWidth: "40ch" }}>AI Incubated Project Appraisal Lab. Investment appraisal for committees that decide.</p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#coverage">What we cover</a></li>
                <li><a href="#plans">Plans</a></li>
                <li><a href={APP_URL}>Sign in to the app</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@aipalab.in">info@aipalab.in</a></li>
              </ul>
            </div>
          </div>
          <p className="disclaimer">
            aipalab provides software that prepares assessments for its clients&apos; internal use. It does not provide investment
            advice, and its outputs are not offers or recommendations to any investor. Investment decisions are made by each
            client&apos;s own committee. Figures shown on this page are examples. © 2026 aipalab.
          </p>
        </div>
      </footer>
    </>
  );
}

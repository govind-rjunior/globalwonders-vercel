import Footer from './Footer';
import Header from './Header';
import HeroVisual from './HeroVisual';
import DeckFigure from './DeckFigure';
import {
  DealIcon,
  FundraisingIcon,
  NetworkIcon,
  MAIcon,
  VCIcon,
  DebtIcon,
  TrendUpIcon,
  UsersIcon,
  RocketIcon,
  ShieldIcon
} from './Icons';
import ProcessFlow from './ProcessFlow';
import Link from 'next/link';

export default function GlobalWondersSite() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 scroll-smooth">
      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#1B7A72]/5">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="#1B7A72" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B7A72] tracking-tight">
            Capital advisory for private companies<br className="hidden md:block" /> focused on equity &amp; strategic capital
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-700">
            A practical execution partner for private companies preparing to raise
            equity or strategic capital. The Right Connection. The Right Direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/founder-interest"
              className="px-6 py-3 rounded-xl bg-[#1B7A72] text-white font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Start Your Journey
            </Link>
            <a
              href="#about"
              className="px-6 py-3 rounded-xl border-2 border-[#1B7A72] text-[#1B7A72] font-semibold hover:bg-[#1B7A72]/10 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      {/* Credibility Strip */}
      <section className="bg-white border-y border-slate-200 py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3 text-[#1B7A72]">
                <NetworkIcon />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">150+</div>
              <div className="text-sm text-slate-600 mt-1">Active Fund Relationships</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-[#1B7A72]">
                <TrendUpIcon />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">$1M–$8M</div>
              <div className="text-sm text-slate-600 mt-1">Typical Ticket Size</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-[#1B7A72]">
                <RocketIcon />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">4–6</div>
              <div className="text-sm text-slate-600 mt-1">Months, Typical Deal Cycle</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-[#1B7A72]">
                <ShieldIcon />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">Sector</div>
              <div className="text-sm text-slate-600 mt-1">Agnostic, Fundamentals First</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] mb-4">
          About Global Wonders
        </h2>
        <p className="text-slate-700 leading-relaxed max-w-3xl">
          Global Wonders is a capital advisory firm for private companies focused on
          equity and strategic capital. We do not manufacture investor interest — we
          improve the quality, sequencing, and discipline of a capital raise process,
          so the right investors see the right opportunity with decision-quality material.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium text-[#1B7A72] mb-2">
              Investment Readiness
            </h3>
            <p className="text-slate-700">
              Strengthen your story, finances, and materials before outreach begins.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[#1B7A72] mb-2">
              Targeted Investor Access
            </h3>
            <p className="text-slate-700">
              Leverage relationships with 150+ funds — VCs, family offices, and angels.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[#1B7A72] mb-2">
              Transaction Process Support
            </h3>
            <p className="text-slate-700">
              End-to-end support through negotiation and closing.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <DeckFigure
            src="/deck/slide-02.jpg"
            alt="Global Wonders overview: capital advisory for private companies with investment readiness, targeted investor access via 150+ funds, transaction process support, and a sector-agnostic approach"
            caption="What Global Wonders is — and the sectors we work across."
          />
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="bg-[#1B7A72]/5 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-4">
            The Problem Is Not Capital Scarcity. It Is Process Friction.
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
            Founders and investors lose time because the company is usually not ready
            for institutional evaluation when outreach begins. Founders raising
            $1M–$8M sit in a structural blind spot: too small for bulge-bracket banks,
            too large for syndicate platforms, outside warm-network range.
          </p>
          <DeckFigure
            src="/deck/slide-03.jpg"
            alt="Founder-side and investor-side failure modes in fundraising: unclear narrative, incomplete data rooms, and low-readiness inbound deals mean good companies get ignored — the $1M to $8M fundraising gap"
            caption="Where raises actually stall — on both sides of the table."
          />
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-4">
            Our Solutions for Startups
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Integrated solutions that de-risk your raise and accelerate access to the right strategic capital.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tailored Deal Structuring */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                <DealIcon />
              </div>
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Tailored Deal Structuring
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1.5 text-sm">
                <li>
                  Expert guidance on selecting the right investment instruments.
                </li>
                <li>
                  Use of both traditional and alternative data for informed decision making.
                </li>
              </ul>
            </div>

            {/* Comprehensive Fundraising Support */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                <FundraisingIcon />
              </div>
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Comprehensive Fundraising Support
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1.5 text-sm">
                <li>
                  End-to-end assistance in securing funding, from crafting business plans to financial modelling.
                </li>
                <li>
                  A disciplined, sequenced funding process that streamlines access to capital.
                </li>
              </ul>
            </div>

            {/* Funding Acceleration Network */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                <NetworkIcon />
              </div>
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Funding Acceleration Network
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1.5 text-sm">
                <li>
                  A vast network of over 150 VC funds, angel investors, and family offices.
                </li>
                <li>
                  A dynamic ecosystem fostering partnerships across the funding landscape.
                </li>
              </ul>
            </div>

            {/* M&A Services */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                <MAIcon />
              </div>
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                M&amp;A Services
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1.5 text-sm">
                <li>
                  Advisory on integration strategies to ensure a smooth transition post-investment.
                </li>
                <li>
                  Ongoing advisory post-deal closure to achieve desired outcomes.
                </li>
              </ul>
            </div>

            {/* Venture Capital & Private Equity */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                <VCIcon />
              </div>
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Venture Capital &amp; Private Equity
              </h3>
              <p className="text-slate-700 text-sm">
                Comprehensive assistance in securing capital infusion at all stages of a company's growth.
              </p>
            </div>

            {/* Debt Financing */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                <DebtIcon />
              </div>
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Debt Financing
              </h3>
              <p className="text-slate-700 text-sm">
                Navigate beyond equity transactions with advisory on working capital loans, venture debt and revenue-based financing.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <DeckFigure
              src="/deck/slide-04.jpg"
              alt="Global Wonders solutions for startups: tailored deal structuring, comprehensive fundraising support, and a funding acceleration network of over 150 VC funds, angel investors and family offices"
              caption="Our solutions for startups, at a glance."
            />
          </div>
        </div>
      </section>

      {/* Readiness & Matching Section */}
      <section id="readiness" className="bg-[#1B7A72]/5 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-4">
            Built on Readiness. Matched With Intent.
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
            Most capital raises fail before outreach because the company cannot answer
            basic investor questions with clean evidence. A founder should be able to
            explain the raise in one meeting and support every claim with a document,
            number, or operating fact. And investor access is a matching problem, not
            a volume game — we filter the investor universe by actual mandate fit
            before outreach begins.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <DeckFigure
              src="/deck/slide-14.jpg"
              alt="The fundraise readiness stack: investment memo, financial model, data room, investor Q&A bank and process tracker — a typical deal cycle of 4 to 6 months with a curated list of 30 to 50 funds"
              caption="The readiness stack every raise is built on."
            />
            <DeckFigure
              src="/deck/slide-15.jpg"
              alt="Investor access as a matching problem: sector, stage, geography, check size and round type filtered through mandate-fit logic to produce a ranked target list and disciplined outreach"
              caption="Matching logic: smarter targeting, better conversations, faster closes."
            />
          </div>
        </div>
      </section>

      {/* Responsible Realization Section */}
      <section id="responsible" className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] mb-6">
          Responsible Realization of Capital
        </h2>
        <p className="text-slate-700 mb-6">
          We believe that capital must be deployed responsibly to create lasting
          impact. Our approach aligns investor interests with founder ambitions
          through clear objectives and collaborative engagement.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-[#1B7A72] mb-3">
              Objectives
            </h3>
            <ul className="list-disc ml-5 text-slate-700 space-y-1">
              <li>
                Connect investors with startups holding high potential for impact and returns.
              </li>
              <li>
                Provide investors with a clear understanding of each
                startup's strategic direction and use of funds.
              </li>
              <li>
                Promote financial sustainability and scalable growth models
                within the startup ecosystem.
              </li>
              <li>
                Track and report on fund utilisation and milestones achieved
                by funded startups.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[#1B7A72] mb-3">
              Key Points
            </h3>
            <ul className="list-disc ml-5 text-slate-700 space-y-1">
              <li>
                Streamlined access to a vetted pipeline of startups.
              </li>
              <li>
                Reduced time and resources required for sourcing and due
                diligence.
              </li>
              <li>
                Participation in a collaborative ecosystem that enhances the
                collective success of all stakeholders.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessFlow />

      {/* Closing Vision Section */}
      <section id="vision" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-4">
          Connecting Capital to Innovation. Powering Global Impact.
        </h2>
        <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
          Global Wonders bridges the gap between startups and investors, ensuring
          capital flows to the right opportunities — stronger companies, sustainable
          growth, meaningful returns for investors.
        </p>
        <DeckFigure
          src="/deck/slide-17.jpg"
          alt="Connecting capital to innovation: the flow between startups and investors through Global Wonders — identify high-potential startups, rigorous evaluation and due diligence, strategic matching, and value creation"
          caption="The Right Connection. The Right Direction."
        />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#1B7A72]/5 px-4 py-20 text-center"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-slate-700 mb-6">
            Whether you're a founder preparing a raise or an investor looking for
            curated opportunities, the next step is a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/founder-interest"
              className="inline-block px-8 py-4 rounded-xl bg-[#1B7A72] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Founder Interest Form
            </Link>
            <a
              href="mailto:info@globalwonders.co"
              className="inline-block px-8 py-4 rounded-xl border-2 border-[#1B7A72] text-[#1B7A72] font-semibold hover:bg-[#1B7A72]/10 transition-colors"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

eexport default function GlobalWondersSite() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Site Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo and brand */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Global Wonders logo"
             className="h-24 w-auto bg-white rounded-md p-1 shadow-sm"m"
            />
            <span className="sr-only">Global Wonders</span>
          </a>
          {/* Primary navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-[#1B7A72]">
              Home
            </a>
            <a href="#about" className="hover:text-[#1B7A72]">
              About
            </a>
            <a href="#solutions" className="hover:text-[#1B7A72]">
              Solutions
            </a>
            <a href="#responsible" className="hover:text-[#1B7A72]">
              Responsibility
            </a>
            <a href="#process" className="hover:text-[#1B7A72]">
              Process
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-xl bg-[#1B7A72] text-white hover:opacity-90"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center px-4 py-24 text-center bg-[#1B7A72]/5"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B7A72] tracking-tight">
          Connecting Smart Funds with Game‑Changing Startups
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          Responsible realization of capital begins with the right partnerships.
          We bridge the gap between visionary investors and ambitious companies.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#1B7A72] text-white font-semibold hover:opacity-90"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="px-5 py-2.5 rounded-xl border border-[#1B7A72] text-[#1B7A72] font-semibold hover:bg-[#1B7A72]/10"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] mb-4">
          About Global Wonders
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Global Wonders is a trailblazer in the financial ecosystem for private
          companies. Our platform acts as a funding gateway that seamlessly
          bridges the gap between ambitious companies and visionary investors,
          simplifying financing for businesses and unlocking growth potential.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-[#1B7A72] mb-2">
              Mission
            </h3>
            <p className="text-slate-700">
              Our mission is to provide credible, actionable and personalised
              advice that helps founders actualise their vision and ensures
              investments are deployed responsibly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[#1B7A72] mb-2">
              Vision
            </h3>
            <p className="text-slate-700">
              We aim to become the cornerstone of startup success and VC
              investment synergy by incorporating transparency &amp; objectivity,
              speed &amp; efficiency, and growth &amp; success for all.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-[#1B7A72]/5 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-10">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tailored Deal Structuring */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Tailored Deal Structuring
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1">
                <li>
                  Expert guidance on selecting the right investment instruments.
                </li>
                <li>
                  Use of traditional and alternative data for informed decision
                  making.
                </li>
              </ul>
            </div>
            {/* Comprehensive Fundraising Support */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Comprehensive Fundraising Support
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1">
                <li>
                  End‑to‑end assistance in securing funding, from crafting
                  business plans to financial modelling.
                </li>
                <li>
                  Fast‑tracked funding process that streamlines access to
                  capital.
                </li>
              </ul>
            </div>
            {/* Funding Acceleration Network */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Funding Acceleration Network
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1">
                <li>
                  A vast network of over 100 venture capital funds, angel
                  investors and family offices.
                </li>
                <li>
                  A dynamic ecosystem fostering partnerships and providing
                  real‑time economic and business insights.
                </li>
              </ul>
            </div>
            {/* M&A Services */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                M&amp;A Services
              </h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-1">
                <li>
                  Advisory on integration strategies to ensure a smooth
                  transition post‑investment.
                </li>
                <li>
                  Ongoing advisory post‑deal closure to achieve desired
                  outcomes.
                </li>
              </ul>
            </div>
            {/* Venture Capital & Private Equity */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Venture Capital &amp; Private Equity
              </h3>
              <p className="text-slate-700">
                Comprehensive assistance in securing capital infusion at all
                stages of a company’s growth.
              </p>
            </div>
            {/* Debt Financing */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-[#1B7A72] mb-3">
                Debt Financing
              </h3>
              <p className="text-slate-700">
                Navigate beyond equity transactions with advisory on working
                capital loans, venture debt and revenue‑based financing.
              </p>
            </div>
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
                Invest in startups with high potential for impact and returns.
              </li>
              <li>
                Provide investors with a clear understanding of each
                startup’s strategic direction and use of funds.
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

      {/* Process Section */}
      <section id="process" className="bg-[#1B7A72]/5 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-10">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Initial call & background checks */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1B7A72]">
                Initial Engagement
              </h3>
              <p className="text-slate-700">
                We begin with an initial call to understand your company’s
                vision, mission and goals. This discussion covers your
                background, product or service offerings, market potential and
                team composition, helping us establish rapport and clarify
                expectations.
              </p>
              <p className="text-slate-700">
                Within a week after the call, we perform background checks to
                evaluate viability, growth prospects and risks by reviewing your
                business model, expansion plans, financials, legal documents and
                technology assessments.
              </p>
            </div>
            {/* Onboarding & investment process */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1B7A72]">
                Onboarding &amp; Investment
              </h3>
              <p className="text-slate-700">
                Once due diligence is complete, onboarding commences with a
                mandate letter that outlines financial terms. We provide a
                negative list of previously contacted investors and a document
                checklist to ensure compliance, signalling a formal commitment
                to proceed.
              </p>
              <p className="text-slate-700">
                Upon signing the mandate, we finalise legal documents and your
                investment docket, curate a list of investors whose criteria
                align with your business model and then execute the investment
                transaction. Our goal is to expedite fundraising by proactively
                targeting the right investors.
              </p>
            </div>
          </div>
          {/* Process flow summary */}
          <div className="mt-12 grid md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#1B7A72] text-white font-bold">
                1
              </div>
              <h4 className="mt-3 font-medium text-[#1B7A72]">
                Application &amp; Assessment
              </h4>
              <p className="mt-1 text-sm text-slate-700">
                Introductory calls to assess companies against predefined
                criteria.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#1B7A72] text-white font-bold">
                2
              </div>
              <h4 className="mt-3 font-medium text-[#1B7A72]">
                Advisory &amp; Preparation
              </h4>
              <p className="mt-1 text-sm text-slate-700">
                Tailored advisory services to prepare companies for the
                investment process.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#1B7A72] text-white font-bold">
                3
              </div>
              <h4 className="mt-3 font-medium text-[#1B7A72]">
                Investor Introductions
              </h4>
              <p className="mt-1 text-sm text-slate-700">
                Structured introductions to potential investors through pitch
                sessions and one‑on‑one meetings.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#1B7A72] text-white font-bold">
                4
              </div>
              <h4 className="mt-3 font-medium text-[#1B7A72]">
                Negotiation &amp; Deal Structuring
              </h4>
              <p className="mt-1 text-sm text-slate-700">
                Assistance with negotiating terms and structuring a win‑win deal.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#1B7A72] text-white font-bold">
                5
              </div>
              <h4 className="mt-3 font-medium text-[#1B7A72]">
                Closure &amp; Post‑Investment
              </h4>
              <p className="mt-1 text-sm text-slate-700">
                Post‑investment support to help startups realise their growth
                trajectories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-4 py-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] mb-6">
          Get in Touch
        </h2>
        <p className="text-slate-700 mb-6">
          Ready to accelerate your growth or explore investment opportunities?
          Reach out to our team today and discover how Global Wonders can help
          you achieve your ambitions.
        </p>
        <a
          href="mailto:info@globalwonders.co"
          className="inline-block px-5 py-2.5 rounded-xl bg-[#1B7A72] text-white font-semibold hover:opacity-90"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

import Header from './Header';
import HeroVisual from './HeroVisual';
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

export default function GlobalWondersSite() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 scroll-smooth">
      {/* Site Header */}
      <Header />

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#1B7A72]/5">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
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
            Connecting Smart Funds with<br className="hidden md:block" /> Game-Changing Startups
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-700">
            Responsible realization of capital begins with the right partnerships.
            We bridge the gap between visionary investors and ambitious companies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-[#1B7A72] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-xl border-2 border-[#1B7A72] text-[#1B7A72] font-semibold hover:bg-[#1B7A72]/10 transition-colors"
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
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">100+</div>
              <div className="text-sm text-slate-600 mt-1">VC Funds & Investors</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-[#1B7A72]">
                <RocketIcon />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">Fast</div>
              <div className="text-sm text-slate-600 mt-1">Tracked Funding</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-[#1B7A72]">
                <ShieldIcon />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">Expert</div>
              <div className="text-sm text-slate-600 mt-1">Advisory Services</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-[#1B7A72]">
                <TrendUpIcon />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B7A72]">End-to-End</div>
              <div className="text-sm text-slate-600 mt-1">Support</div>
            </div>
          </div>
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

      {/* Enhanced Solutions Section with Icons */}
      <section id="solutions" className="bg-[#1B7A72]/5 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-4">
            Our Solutions
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Comprehensive services tailored to meet the unique needs of startups and investors
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
                  Use of traditional and alternative data for informed decision making.
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
                  End‑to‑end assistance in securing funding, from crafting business plans to financial modelling.
                </li>
                <li>
                  Fast‑tracked funding process that streamlines access to capital.
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
                  A vast network of over 100 venture capital funds, angel investors and family offices.
                </li>
                <li>
                  A dynamic ecosystem fostering partnerships and providing real‑time economic and business insights.
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
                  Advisory on integration strategies to ensure a smooth transition post‑investment.
                </li>
                <li>
                  Ongoing advisory post‑deal closure to achieve desired outcomes.
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
                Navigate beyond equity transactions with advisory on working capital loans, venture debt and revenue‑based financing.
              </p>
            </div>
          </div>

          {/* How We Help Visual */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1B7A72] text-center mb-8">
              How We Help You Succeed
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Startups */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                  <RocketIcon />
                </div>
                <h4 className="font-semibold text-lg text-[#1B7A72] mb-2">Startups</h4>
                <p className="text-sm text-slate-600">
                  Access funding, expert guidance, and investor network
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-[#1B7A72]">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="md:hidden text-[#1B7A72]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Global Wonders */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#1B7A72] flex items-center justify-center text-white mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M2 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#1B7A72] mb-2">Global Wonders</h4>
                <p className="text-sm text-slate-600">
                  Advisory, structuring, and ongoing support
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-[#1B7A72]">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="md:hidden text-[#1B7A72]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Investors */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1B7A72]/10 flex items-center justify-center text-[#1B7A72] mb-4">
                  <UsersIcon />
                </div>
                <h4 className="font-semibold text-lg text-[#1B7A72] mb-2">Investors</h4>
                <p className="text-sm text-slate-600">
                  Vetted opportunities and streamlined deal flow
                </p>
              </div>
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
          className="inline-block px-6 py-3 rounded-xl bg-[#1B7A72] text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Contact Us
        </a>
      </section>

      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-2xl font-bold text-[#1B7A72] mb-4">GLOBAL WONDERS</div>
          <p className="text-slate-400 mb-4">
            Connecting Smart Funds with Game-Changing Startups
          </p>
          <p className="text-sm text-slate-500">
            © 2025 Global Wonders. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
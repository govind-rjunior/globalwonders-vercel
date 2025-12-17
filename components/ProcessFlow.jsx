import React from 'react';

export default function ProcessFlow() {
  const steps = [
    { num: 1, title: "Application & Assessment", desc: "Introductory calls to assess companies" },
    { num: 2, title: "Advisory & Preparation", desc: "Tailored advisory services" },
    { num: 3, title: "Investor Introductions", desc: "Structured investor connections" },
    { num: 4, title: "Negotiation & Structuring", desc: "Deal terms and agreements" },
    { num: 5, title: "Closure & Support", desc: "Post-investment assistance" }
  ];

  return (
    <section id="process" className="bg-[#1B7A72]/5 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B7A72] text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Our streamlined process ensures a smooth journey from initial contact to successful investment
        </p>

        {/* Desktop Horizontal Flow */}
        <div className="hidden md:block mb-16">
          <div className="relative flex items-start justify-between gap-4">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Step Circle */}
                <div className="flex flex-col items-center flex-1">
                  <div className="w-16 h-16 rounded-full bg-[#1B7A72] text-white flex items-center justify-center font-semibold text-lg shadow-sm">
                    {step.num}
                  </div>
                  <h4 className="mt-4 font-medium text-[#1B7A72] text-center text-sm leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 text-center max-w-[130px]">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center pt-8">
                    <svg className="w-8 h-8 text-[#1B7A72]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Flow */}
        <div className="md:hidden mb-16">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#1B7A72]/20"></div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#1B7A72] text-white flex items-center justify-center font-semibold text-lg shadow-sm flex-shrink-0 z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-[#1B7A72] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Process Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Initial Engagement */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1B7A72] mb-4">
              Initial Engagement
            </h3>
            <p className="text-slate-700 mb-4">
              We begin with an initial call to understand your company's vision, mission and goals. This discussion covers your background, product or service offerings, market potential and team composition, helping us establish rapport and clarify expectations.
            </p>
            <p className="text-slate-700">
              Within a week after the call, we perform background checks to evaluate viability, growth prospects and risks by reviewing your business model, expansion plans, financials, legal documents and technology assessments.
            </p>
          </div>

          {/* Onboarding & Investment */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1B7A72] mb-4">
              Onboarding & Investment
            </h3>
            <p className="text-slate-700 mb-4">
              Once due diligence is complete, onboarding commences with a mandate letter that outlines financial terms. We provide a negative list of previously contacted investors and a document checklist to ensure compliance, signalling a formal commitment to proceed.
            </p>
            <p className="text-slate-700">
              Upon signing the mandate, we finalise legal documents and your investment docket, curate a list of investors whose criteria align with your business model and then execute the investment transaction. Our goal is to expedite fundraising by proactively targeting the right investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
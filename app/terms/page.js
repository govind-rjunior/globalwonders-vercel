"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsPage() {
  const [showPDF, setShowPDF] = useState(false);
  const [activeTab, setActiveTab] = useState("terms");

  useEffect(() => {
    // Check if URL has #disclaimer hash
    if (window.location.hash === "#disclaimer") {
      setActiveTab("disclaimer");
      setTimeout(() => {
        document
          .getElementById("disclaimer")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/GlobalWonders_Terms_And_Disclaimer.pdf";
    link.download = "GlobalWonders_Terms_And_Disclaimer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1B7A72]/10 via-white to-[#1B7A72]/5 py-12 px-4 border-b border-slate-200">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1B7A72] mb-2">
                  Terms of Use & Disclaimer
                </h1>
                <p className="text-slate-600">
                  Effective date: 16 December 2025
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPDF(!showPDF)}
                  className="px-5 py-2.5 rounded-lg bg-white border-2 border-[#1B7A72] text-[#1B7A72] font-semibold hover:bg-[#1B7A72]/5 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  {showPDF ? "Hide PDF" : "View PDF"}
                </button>
                <button
                  onClick={downloadPDF}
                  className="px-5 py-2.5 rounded-lg bg-[#1B7A72] text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mt-6 border-b-2 border-slate-200">
              <button
                onClick={() => setActiveTab("terms")}
                className={`px-4 py-2 font-semibold transition-colors border-b-2 -mb-0.5 ${
                  activeTab === "terms"
                    ? "text-[#1B7A72] border-[#1B7A72]"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                }`}
              >
                Terms of Use
              </button>
              <button
                onClick={() => {
                  setActiveTab("disclaimer");
                  setTimeout(() => {
                    document
                      .getElementById("disclaimer")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className={`px-4 py-2 font-semibold transition-colors border-b-2 -mb-0.5 ${
                  activeTab === "disclaimer"
                    ? "text-[#1B7A72] border-[#1B7A72]"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                }`}
              >
                Disclaimer
              </button>
            </div>
          </div>
        </section>

        {/* PDF Viewer Section */}
        {showPDF && (
          <section className="py-8 px-4 bg-slate-50">
            <div className="mx-auto max-w-5xl">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <iframe
                  src="/GlobalWonders_Terms_And_Disclaimer.pdf"
                  className="w-full"
                  style={{ height: "800px" }}
                  title="Terms and Disclaimer PDF"
                />
              </div>
            </div>
          </section>
        )}

        {/* Company Info Bar */}
        <section className="py-4 px-4 bg-slate-100 border-b border-slate-200">
          <div className="mx-auto max-w-5xl">
            <div className="text-xs text-slate-600 space-y-1">
              <p>
                <strong className="text-slate-800">Legal entity:</strong> RAMAN
                GLOBALWONDERS CONSULTING PRIVATE LIMITED
              </p>
              <p>
                <strong className="text-slate-800">CIN:</strong>{" "}
                U70200MH2023PTC406612
              </p>
              <p>
                <strong className="text-slate-800">Address:</strong> NO. 11 2ND,
                FLOOR, DIVYA, COMMERCIAL COMPLEX, NO. 37, Mumbai, Mumbai,
                Mumbai-400071, Maharashtra, India
              </p>
              <p>
                <strong className="text-slate-800">Contact:</strong>{" "}
                legal@globalwonders.co | support@globalwonders.co
              </p>
            </div>
          </div>
        </section>

        {/* Text Content Section */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl prose prose-slate">
            {/* Terms of Use Content */}
            <div id="terms" className={activeTab === "terms" ? "" : "hidden"}>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
                <p className="text-sm text-yellow-900 mb-0">
                  <strong>Important:</strong> These Terms of Use govern your
                  access to and use of this website. By accessing or using the
                  Site, you agree to be bound by these Terms and our Privacy
                  Policy. If you do not agree, please do not use the Site.
                </p>
              </div>

              {/* 1. Definitions */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  1. Definitions
                </h2>
                <p className="text-slate-700">
                  "Company", "we", "us" and "our" refers to the legal entity
                  named above and its authorised representatives. "You" or
                  "User" refers to any visitor, user, or entity accessing the
                  Site. "Content" includes text, graphics, logos, documents, and
                  other materials made available on the Site. "Services" refers
                  to any services we may describe or provide, whether through
                  the Site or under separate written engagement(s).
                </p>
              </div>

              {/* 2. Eligibility */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  2. Eligibility
                </h2>
                <p className="text-slate-700">
                  You represent that you are at least 18 years old and capable
                  of forming a binding contract under applicable law. If you use
                  the Site on behalf of an entity, you represent that you are
                  authorised to bind that entity to these Terms.
                </p>
              </div>

              {/* 3. Scope of the Site */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  3. Scope of the Site
                </h2>
                <p className="text-slate-700">
                  The Site is a general informational platform. It may contain
                  descriptions of our offering, experience, and ecosystem
                  participation, and may provide ways to contact us. The Site
                  may be updated, modified, suspended, or discontinued at any
                  time without notice.
                </p>
              </div>

              {/* 4. No Professional Advice */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  4. No Professional Advice
                </h2>
                <p className="text-slate-700">
                  Content on the Site is provided for general information only
                  and does not constitute legal, tax, investment, accounting,
                  securities, or other professional advice. You should consult
                  your own professional advisors before making decisions.
                </p>
              </div>

              {/* 5. No Offer / No Solicitation */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  5. No Offer / No Solicitation
                </h2>
                <p className="text-slate-700">
                  Nothing on the Site constitutes an invitation, solicitation,
                  offer, or recommendation to buy or sell securities, or to
                  participate in any investment product. Any transaction or
                  investment decision is strictly between the relevant parties,
                  and is subject to their independent assessment and applicable
                  laws.
                </p>
              </div>

              {/* 6. Regulatory Positioning */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  6. Regulatory Positioning
                </h2>
                <p className="text-slate-700">
                  The Company does not hold itself out as a bank, non-banking
                  financial company (NBFC), stock broker, merchant banker,
                  investment adviser, portfolio manager, or other regulated
                  intermediary unless expressly stated in a written, signed
                  document identifying the specific registration and scope.
                  Where a regulated permission or licence is required, you are
                  responsible for ensuring appropriate compliance for your use
                  case and jurisdiction.
                </p>
              </div>

              {/* 7. User Submissions */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  7. User Submissions
                </h2>
                <p className="text-slate-700 mb-3">
                  If you submit information via the Site (including contact
                  details, pitch materials, data rooms, or documents), you agree
                  that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>
                    You have the right to share the submitted information and it
                    does not violate any third-party rights.
                  </li>
                  <li>
                    Unless we have signed a separate written confidentiality
                    agreement (e.g., NDA) with you, your submissions may be
                    treated as non-confidential.
                  </li>
                  <li>
                    We may use the submitted information to respond to you,
                    evaluate potential engagement, and for internal
                    record-keeping, subject to our Privacy Policy.
                  </li>
                  <li>
                    You will not upload malicious code, unlawful content, or
                    content that is misleading, defamatory, or infringing.
                  </li>
                </ul>
              </div>

              {/* 8. Acceptable Use */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  8. Acceptable Use
                </h2>
                <p className="text-slate-700 mb-3">
                  You agree not to misuse the Site. Without limitation, you will
                  not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>
                    Attempt to gain unauthorised access to the Site, servers, or
                    networks;
                  </li>
                  <li>
                    Interfere with the Site's operation, introduce malware, or
                    conduct denial-of-service attacks;
                  </li>
                  <li>
                    Use the Site to send spam, phishing, or unsolicited
                    communications;
                  </li>
                  <li>
                    Copy, scrape, reverse engineer, or exploit Content except as
                    permitted by law and these Terms;
                  </li>
                  <li>
                    Use the Site in any manner that violates applicable law,
                    regulation, or third-party rights.
                  </li>
                </ul>
              </div>

              {/* 9. Intellectual Property */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-slate-700">
                  All Content on the Site is owned by or licensed to the Company
                  and is protected by intellectual property laws. You are
                  granted a limited, non-exclusive, non-transferable licence to
                  access and use the Site for your personal or internal business
                  use. You may not reproduce, distribute, create derivative
                  works from, publicly display, or commercially exploit any
                  Content without prior written permission.
                </p>
              </div>

              {/* 10. Third-Party Links */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  10. Third-Party Links
                </h2>
                <p className="text-slate-700">
                  The Site may contain links to third-party websites or
                  services. We do not control, endorse, or assume responsibility
                  for third-party content, policies, or practices. Your
                  interactions with third parties are at your own risk.
                </p>
              </div>

              {/* 11. Disclaimers of Warranty */}
              <div className="mb-10 bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  11. Disclaimers of Warranty
                </h2>
                <p className="text-red-900 font-medium uppercase text-sm">
                  THE SITE AND CONTENT ARE PROVIDED ON AN "AS IS" AND "AS
                  AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE
                  DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, NON-INFRINGEMENT, ACCURACY, AND AVAILABILITY. WE DO
                  NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE,
                  OR SECURE.
                </p>
              </div>

              {/* 12. Limitation of Liability */}
              <div className="mb-10 bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  12. Limitation of Liability
                </h2>
                <p className="text-red-900 font-medium uppercase text-sm">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                  PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY,
                  ARISING OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE)
                  THE SITE OR CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF
                  SUCH DAMAGES. TO THE EXTENT LIABILITY CANNOT BE EXCLUDED, OUR
                  AGGREGATE LIABILITY SHALL NOT EXCEED INR 10,000.
                </p>
              </div>

              {/* Continue with remaining sections... */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  13. Indemnity
                </h2>
                <p className="text-slate-700">
                  You agree to indemnify, defend, and hold harmless the Company,
                  its directors, officers, employees, and agents from and
                  against any claims, liabilities, damages, losses, and expenses
                  (including reasonable legal fees) arising out of or related
                  to: (a) your use of the Site; (b) your breach of these Terms;
                  or (c) your violation of any law or third-party rights.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  16. Governing Law and Dispute Resolution
                </h2>
                <p className="text-slate-700 mb-3">
                  These Terms are governed by the laws of India. Any dispute
                  arising out of or relating to these Terms or the Site shall be
                  resolved as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>
                    First, the parties will attempt in good faith to resolve the
                    dispute through informal discussions within 30 days of
                    written notice.
                  </li>
                  <li>
                    If not resolved, the dispute shall be referred to
                    arbitration in Mumbai, India, under the Arbitration and
                    Conciliation Act, 1996. The arbitration shall be conducted
                    by a sole arbitrator, in English.
                  </li>
                  <li>
                    Courts at Mumbai shall have exclusive jurisdiction for
                    interim relief and for any matters not subject to
                    arbitration.
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  17. Contact
                </h2>
                <p className="text-slate-700">
                  If you have questions about these Terms, contact us at{" "}
                  <a
                    href="mailto:legal@globalwonders.co"
                    className="text-[#1B7A72] hover:underline font-medium"
                  >
                    legal@globalwonders.co
                  </a>
                  . For privacy-related queries, refer to our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#1B7A72] hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:privacy@globalwonders.co"
                    className="text-[#1B7A72] hover:underline font-medium"
                  >
                    privacy@globalwonders.co
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Disclaimer Content */}
            <div
              id="disclaimer"
              className={activeTab === "disclaimer" ? "" : "hidden"}
            >
              <h1 className="text-3xl font-bold text-[#1B7A72] mb-8">
                Disclaimer
              </h1>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
                <p className="text-sm text-orange-900 mb-0">
                  <strong>Please Read Carefully:</strong> This disclaimer limits
                  our liability and clarifies what you can and cannot expect
                  from using this website.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  1. General Information Only
                </h2>
                <p className="text-slate-700">
                  All information on the Site is provided for general
                  informational purposes and may be changed without notice. We
                  do not guarantee completeness, accuracy, timeliness, or
                  suitability for any purpose.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  2. No Guarantee of Outcomes
                </h2>
                <p className="text-slate-700">
                  Any references to fundraising, investor access, deal
                  facilitation, introductions, diligence support, or ecosystem
                  relationships are illustrative of potential activities and do
                  not constitute a promise or guarantee that you will secure
                  funding, partnerships, or any particular outcome. Decisions
                  are made by third parties and depend on numerous factors
                  outside our control.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  3. Not a Public Offering / No Deposits
                </h2>
                <p className="text-slate-700">
                  The Company does not invite the public to deposit money or
                  invest through this Site. The Site is not intended to be used
                  for public solicitation. Where any activity requires
                  permission of a sector regulator, such permission must be
                  obtained by the relevant party.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  4. External Materials
                </h2>
                <p className="text-slate-700">
                  Materials submitted by users (including pitch decks,
                  financials, or other documents) are provided by such users. We
                  do not independently verify all statements and do not assume
                  responsibility for the accuracy, legality, or completeness of
                  user-provided information.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  5. Confidentiality and Security
                </h2>
                <p className="text-slate-700">
                  Do not submit sensitive personal data, banking credentials, or
                  highly confidential information through the Site unless and
                  until a secure channel is agreed and a written confidentiality
                  arrangement is in place. While we take reasonable measures, no
                  online system is fully secure, and transmission of information
                  is at your own risk.
                </p>
              </div>

              <div className="mb-10 bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  6. Limitation
                </h2>
                <p className="text-red-900 font-medium">
                  To the maximum extent permitted by law, the Company disclaims
                  liability for any loss or damage arising out of your reliance
                  on the Site, Content, or any third-party information
                  referenced on the Site.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                  7. Professional Review
                </h2>
                <p className="text-slate-700">
                  If you require legal, tax, accounting, or investment advice,
                  please consult qualified professionals. You should seek
                  independent legal review before acting on any information
                  obtained through the Site.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                © 2025 RAMAN GLOBALWONDERS CONSULTING PRIVATE LIMITED. All
                rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

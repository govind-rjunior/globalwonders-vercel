"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  const [showPDF, setShowPDF] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/GlobalWonders_Privacy_Policy.pdf";
    link.download = "GlobalWonders_Privacy_Policy.pdf";
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
                  Privacy Policy
                </h1>
                <p className="text-slate-600">Last updated: 16 December 2025</p>
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
          </div>
        </section>

        {/* PDF Viewer Section */}
        {showPDF && (
          <section className="py-8 px-4 bg-slate-50">
            <div className="mx-auto max-w-5xl">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <iframe
                  src="/GlobalWonders_Privacy_Policy.pdf"
                  className="w-full"
                  style={{ height: "800px" }}
                  title="Privacy Policy PDF"
                />
              </div>
            </div>
          </section>
        )}

        {/* Text Content Section */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl prose prose-slate">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-sm text-blue-900 mb-0">
                <strong>Quick note:</strong> This policy covers Website
                interactions. If you engage us for services (e.g., fundraising
                advisory, investor introductions, or diligence support), we may
                provide additional notices and/or contract terms for those
                engagements.
              </p>
            </div>

            {/* 1. Who We Are */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                1. Who We Are
              </h2>
              <p className="text-slate-700 mb-4">
                We are{" "}
                <strong>RAMAN GLOBALWONDERS CONSULTING PRIVATE LIMITED</strong>,
                a company incorporated in India. Our Corporate Identity Number
                (CIN) is <strong>U70200MH2023PTC406612</strong>.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-700 mb-1">
                  <strong>Registered office / mailing address:</strong>
                </p>
                <p className="text-sm text-slate-600 mb-3">
                  NO. 11 2ND, FLOOR, DIVYA COMMERCIAL COMPLEX, NO. 37,
                  Mumbai-400071, Maharashtra, India
                </p>
                <p className="text-sm text-slate-700 mb-1">
                  <strong>Privacy contact:</strong>
                </p>
                <p className="text-sm text-slate-600">
                  <a
                    href="mailto:privacy@globalwonders.co"
                    className="text-[#1B7A72] hover:underline"
                  >
                    privacy@globalwonders.co
                  </a>{" "}
                  (or write to the address above, Attention: Privacy)
                </p>
              </div>
            </div>

            {/* 2. Scope and Applicability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                2. Scope and Applicability
              </h2>
              <p className="text-slate-700">
                This Privacy Policy applies to personal data processed through
                the Website and related communications (email/phone/messages)
                that arise from Website interactions.
              </p>
              <p className="text-slate-700">
                It does not apply to third-party websites or services that may
                be linked from our Website. Their privacy practices are governed
                by their own policies.
              </p>
            </div>

            {/* 3. Personal Data We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                3. Personal Data We Collect
              </h2>
              <p className="text-slate-700 mb-4">
                Depending on how you use the Website, we may collect the
                following categories of personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  <strong>Information you provide:</strong> name, email address,
                  phone number, company/organisation name, role, city/country,
                  and the content of your message or enquiry.
                </li>
                <li>
                  <strong>Business and deal-related information</strong> (if
                  shared by you): pitch decks, business plans, financial
                  information, cap tables, team details, supporting documents,
                  and other information you choose to share for evaluation or
                  advisory discussions.
                </li>
                <li>
                  <strong>Website usage and device data:</strong> IP address,
                  browser type, device identifiers, pages viewed, date/time
                  stamps, referring URLs, and similar logs generated when you
                  access the Website.
                </li>
                <li>
                  <strong>Cookies and similar technologies:</strong> small files
                  used to enable core site functionality, improve performance,
                  and (if enabled) measure traffic/engagement.
                </li>
              </ul>
              <p className="text-slate-700 mt-4">
                We do not intentionally collect personal data that is unrelated
                to your enquiry. Please avoid submitting unnecessary sensitive
                details through the Website.
              </p>
            </div>

            {/* 4. How We Use Personal Data */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                4. How We Use Personal Data
              </h2>
              <p className="text-slate-700 mb-3">
                We use personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  To respond to your enquiries, schedule discussions, and
                  provide requested information.
                </li>
                <li>
                  To evaluate whether we can support you (for example, assessing
                  fit for advisory services or investor introductions).
                </li>
                <li>
                  To conduct diligence and background checks where relevant to
                  our services (typically after you initiate an engagement or
                  share materials).
                </li>
                <li>
                  To operate, maintain, and improve the Website (including
                  troubleshooting, analytics, and security).
                </li>
                <li>
                  To comply with legal obligations, resolve disputes, and
                  enforce our rights.
                </li>
                <li>
                  To send updates or marketing communications where permitted
                  (and where required, based on your consent).
                </li>
              </ul>
            </div>

            {/* 5. Legal Basis for Processing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                5. Legal Basis for Processing
              </h2>
              <p className="text-slate-700 mb-3">
                Where applicable, we process personal data on one or more of the
                following bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  <strong>Consent:</strong> when you voluntarily submit an
                  enquiry or opt in to receive communications.
                </li>
                <li>
                  <strong>
                    Performance of a contract / steps prior to a contract:
                  </strong>{" "}
                  when processing is necessary to provide services you request
                  or to take steps you ask us to take before entering into an
                  engagement.
                </li>
                <li>
                  <strong>Legitimate uses / business purposes:</strong> such as
                  responding to business communications, preventing fraud,
                  ensuring network and information security, and maintaining
                  records.
                </li>
                <li>
                  <strong>Legal compliance:</strong> where processing is
                  required to meet applicable laws and regulatory requirements.
                </li>
              </ul>
            </div>

            {/* 6. How We Share Personal Data */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                6. How We Share Personal Data
              </h2>
              <p className="text-slate-700 mb-3">
                We may share personal data in limited circumstances, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  <strong>Service providers:</strong> vendors that help us run
                  the Website or communicate (e.g., hosting, email delivery,
                  analytics, customer support). They process data under our
                  instructions and subject to confidentiality obligations.
                </li>
                <li>
                  <strong>Investors, founders, and counterparties:</strong> if
                  you request or proceed with introductions, we may share
                  relevant information to facilitate discussions (for example,
                  your contact details and materials you choose to share).
                </li>
                <li>
                  <strong>Professional advisers:</strong> lawyers, accountants,
                  auditors, and consultants, where needed for business
                  operations or compliance.
                </li>
                <li>
                  <strong>Regulators and law enforcement:</strong> where
                  required by applicable law, court order, or to protect rights,
                  safety, and security.
                </li>
                <li>
                  <strong>Business transfers:</strong> if we undergo a merger,
                  acquisition, or restructuring, personal data may be
                  transferred as part of that transaction, subject to applicable
                  safeguards.
                </li>
              </ul>
              <p className="text-slate-700 mt-4">
                <strong>We do not sell personal data to third parties.</strong>
              </p>
            </div>

            {/* 7. Cross-Border Transfers */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                7. Cross-Border Transfers
              </h2>
              <p className="text-slate-700">
                Our Website and service providers may process data on servers
                located outside India. Where cross-border transfers occur, we do
                so in accordance with applicable Indian data protection law and
                any restrictions notified by the Government of India.
              </p>
            </div>

            {/* 8. Data Retention */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                8. Data Retention
              </h2>
              <p className="text-slate-700">
                We retain personal data only for as long as necessary for the
                purposes described in this Privacy Policy, unless a longer
                retention period is required or permitted by law. Retention
                periods may vary depending on the type of data, the nature of
                the relationship, and legal/compliance requirements.
              </p>
            </div>

            {/* 9. Security Safeguards */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                9. Security Safeguards
              </h2>
              <p className="text-slate-700">
                We implement reasonable technical and organisational measures
                designed to protect personal data against unauthorised access,
                disclosure, alteration, and destruction. However, no method of
                transmission or storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* 10. Your Rights and Choices */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                10. Your Rights and Choices
              </h2>
              <p className="text-slate-700 mb-3">
                Subject to applicable law, you may have rights to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>
                  Request access to a summary of personal data we hold about you
                  and how it is processed.
                </li>
                <li>
                  Request correction or updating of inaccurate or incomplete
                  personal data.
                </li>
                <li>
                  Request deletion/erasure of personal data that is no longer
                  necessary for the stated purpose (subject to legal
                  exceptions).
                </li>
                <li>
                  Withdraw consent where processing is based on consent
                  (withdrawal will not affect processing already carried out).
                </li>
                <li>
                  Nominate another individual to exercise your rights on your
                  behalf, where applicable.
                </li>
              </ul>
              <p className="text-slate-700 mt-4">
                To exercise your rights, email us at{" "}
                <a
                  href="mailto:privacy@globalwonders.co"
                  className="text-[#1B7A72] hover:underline font-medium"
                >
                  privacy@globalwonders.co
                </a>{" "}
                with sufficient details to verify your request. We may need to
                verify your identity before responding.
              </p>
              <p className="text-slate-700">
                We aim to respond within timelines prescribed under applicable
                law.
              </p>
            </div>

            {/* 11. Children's Personal Data */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                11. Children's Personal Data
              </h2>
              <p className="text-slate-700">
                Our Website is not directed to children. We do not knowingly
                collect personal data of children through the Website. If you
                believe a child has provided us personal data, please contact us
                so we can take appropriate action.
              </p>
            </div>

            {/* 12. Cookies and Similar Technologies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                12. Cookies and Similar Technologies
              </h2>
              <p className="text-slate-700">
                Cookies help the Website function and may help us understand
                usage patterns. Depending on your browser settings, you can
                control or disable cookies. Disabling cookies may affect the
                functioning of the Website.
              </p>
              <p className="text-slate-700">
                If we use third-party analytics or advertising cookies in the
                future, we will update this policy and (where required)
                implement appropriate consent mechanisms.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-[#1B7A72]/5 p-8 rounded-xl border-2 border-[#1B7A72]/20 mt-12">
              <h2 className="text-2xl font-bold text-[#1B7A72] mb-4">
                Contact and Grievance Redressal
              </h2>
              <p className="text-slate-700 mb-4">
                If you have questions or concerns about this Privacy Policy or
                our data practices, contact us at{" "}
                <a
                  href="mailto:privacy@globalwonders.co"
                  className="text-[#1B7A72] hover:underline font-medium"
                >
                  privacy@globalwonders.co
                </a>{" "}
                or write to:
              </p>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-semibold text-slate-700 pr-4">
                        Legal Entity
                      </td>
                      <td className="py-2 text-slate-600">
                        RAMAN GLOBALWONDERS CONSULTING PRIVATE LIMITED
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-semibold text-slate-700 pr-4">
                        CIN
                      </td>
                      <td className="py-2 text-slate-600">
                        U70200MH2023PTC406612
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-semibold text-slate-700 pr-4">
                        Registered Office
                      </td>
                      <td className="py-2 text-slate-600">
                        NO. 11 2ND, FLOOR, DIVYA COMMERCIAL COMPLEX, NO. 37,
                        Mumbai-400071, Maharashtra, India
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-slate-700 pr-4">
                        Privacy Contact
                      </td>
                      <td className="py-2 text-slate-600">
                        <a
                          href="mailto:privacy@globalwonders.co"
                          className="text-[#1B7A72] hover:underline"
                        >
                          privacy@globalwonders.co
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-700 mt-4 text-sm">
                If you remain dissatisfied with our response, you may have the
                right to lodge a complaint with the Data Protection Board of
                India (once operational and applicable to your matter), in
                accordance with applicable law.
              </p>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                This document is provided for informational purposes and is
                intended to be used on the Website as a published Privacy
                Policy. For specific legal advice, consult your legal counsel.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

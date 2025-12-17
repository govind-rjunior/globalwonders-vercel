"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FounderInterestPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    companyName: "",
    websiteOrLinkedIn: "",
    sector: "",
    otherSector: "",
    pitch: "",
    fundingStatus: "",
    roundAndAmount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sectors = [
    "Fintech",
    "Healthtech",
    "Edtech",
    "E-commerce",
    "SaaS",
    "Enterprise Software",
    "AI / ML",
    "DeepTech",
    "CleanTech",
    "Agritech",
    "Logistics",
    "Consumer Tech",
    "D2C",
    "Gaming",
    "Web3 / Blockchain",
    "Other",
  ];

  const fundingStatuses = [
    "Not fundraising yet",
    "Preparing to raise (0–2 months)",
    "Actively fundraising",
    "Soft-circling / term sheet stage",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/founder-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          companyName: "",
          websiteOrLinkedIn: "",
          sector: "",
          otherSector: "",
          pitch: "",
          fundingStatus: "",
          roundAndAmount: "",
          message: "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1B7A72]/10 via-white to-[#1B7A72]/5 py-16 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B7A72] mb-4">
              Founder Interest Form
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
              Tell us about your startup and fundraising goals. Our team will
              review your submission and get back to you within 48 hours.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-3xl">
            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-1">
                      Thank You for Your Submission!
                    </h3>
                    <p className="text-green-800">
                      We've received your interest form and will review it
                      carefully. Our team will reach out to you within 48 hours.
                      Check your email for a confirmation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mt-0.5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-1">
                      Submission Failed
                    </h3>
                    <p className="text-red-800">
                      Something went wrong. Please try again or email us
                      directly at info@globalwonders.co
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                    placeholder="john@startup.com"
                  />
                </div>

                {/* Mobile / WhatsApp */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Mobile / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                    placeholder="Your Startup Name"
                  />
                </div>

                {/* Website / LinkedIn */}
                <div>
                  <label
                    htmlFor="websiteOrLinkedIn"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Website or LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="websiteOrLinkedIn"
                    name="websiteOrLinkedIn"
                    value={formData.websiteOrLinkedIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                    placeholder="https://yourwebsite.com or https://linkedin.com/in/yourprofile"
                  />
                </div>

                {/* Sector */}
                <div>
                  <label
                    htmlFor="sector"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Sector <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a sector</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Other Sector (conditional) */}
                {formData.sector === "Other" && (
                  <div>
                    <label
                      htmlFor="otherSector"
                      className="block text-sm font-semibold text-slate-900 mb-2"
                    >
                      Please Specify Sector{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="otherSector"
                      name="otherSector"
                      required={formData.sector === "Other"}
                      value={formData.otherSector}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your sector"
                    />
                  </div>
                )}

                {/* One-line Pitch */}
                <div>
                  <label
                    htmlFor="pitch"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    One-line Pitch <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pitch"
                    name="pitch"
                    required
                    value={formData.pitch}
                    onChange={handleChange}
                    maxLength={150}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                    placeholder="E.g., We're building AI-powered fintech solutions for SMEs"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Maximum 150 characters
                  </p>
                </div>

                {/* Funding Status */}
                <div>
                  <label
                    htmlFor="fundingStatus"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Funding Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="fundingStatus"
                    name="fundingStatus"
                    required
                    value={formData.fundingStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select funding status</option>
                    {fundingStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Round & Amount */}
                <div>
                  <label
                    htmlFor="roundAndAmount"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Round & Amount <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="roundAndAmount"
                    name="roundAndAmount"
                    required
                    value={formData.roundAndAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all"
                    placeholder="E.g., Seed – ₹4 Cr or Pre-seed – $500k"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Specify the funding round and target amount
                  </p>
                </div>

                {/* Message / Notes */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Message / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1B7A72] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Share key traction metrics, milestones achieved, and specific help you're looking for..."
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Tell us about your key traction, achievements, and what
                    specific help you need from Global Wonders
                  </p>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-[#1B7A72] text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Interest Form"
                    )}
                  </button>

                  {/* Consent Text */}
                  <p className="mt-4 text-sm text-slate-600 text-center leading-relaxed">
                    By submitting, you agree to be contacted and for your
                    details to be used to respond to your enquiry as per our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-[#1B7A72] hover:underline font-medium"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
